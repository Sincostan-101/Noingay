# Tách dữ liệu lớn khỏi index.html sang data/ và i18n/ (chạy một lần, giữ lại để tham khảo)
import json,hashlib,subprocess,os
subprocess.run(['node','tools/analyze.mjs','index.html','/tmp/stmts.json'],check=True)
S=json.load(open('/tmp/stmts.json'));st=S['stmts'];base=S['base']
html=open('index.html',encoding='utf-8').read()
# acorn đếm vị trí theo UTF-16 (emoji = 2), Python đếm theo ký tự: đổi lại cho khớp
_js=html[base:base+S['len']*2]
_map=[];_u=0
for _i,_ch in enumerate(_js):
    _map.append(_i)
    if ord(_ch)>0xFFFF: _map.append(_i)
    if len(_map)>S['len']: break
_map.append(len(_map))
def cp(u): return _map[u] if u<len(_map) else _map[-1]
for _s in st: _s['start']=cp(_s['start']); _s['end']=cp(_s['end'])
def idx(name):
    return next(i for i,s in enumerate(st) if name in s['names'])
PLAN=[('data/lessons.js','Bài hội thoại tiếng Anh, tiếng Trung, đơn vị và thứ tự bài',idx('LESSONS'),idx('LESSON_ORDER')+1),
 ('data/pron.js','Bài phát âm (âm, nhóm âm, tên bước)',idx('snd'),idx('PSTEP_NAMES')),
 ('data/vocab-work.js','Từ vựng theo bài, cấp độ từ, bài giao tiếp công việc',idx('VOCAB_RAW'),idx('VOCAB')-1),
 ('data/ipa.js','Từ điển phiên âm IPA (CMUdict rút gọn)',idx('IPA_SRC'),idx('IPA_SRC')),
 ('i18n/strings.js','Câu dịch giao diện sang tiếng Anh, tiếng Trung (I18N_DICT, I18N_RX)',idx('I18N_DICT'),idx('I18N_SECS')-1),
 ('data/news.js','Bài báo song ngữ',idx('NEWS'),idx('NEWS')),
 ('data/vocab-topics.js','Từ vựng theo chủ đề',idx('VT_RAW'),idx('VT_RAW'))]
cuts=[]
for path,desc,a,b in PLAN:
    s0=base+st[a]['start'];s1=base+st[b]['end']
    body=html[s0:s1]
    names=[n for s in st[a:b+1] for n in s['names']]
    os.makedirs(os.path.dirname(path),exist_ok=True)
    open(path,'w',encoding='utf-8').write(f"/* SFY · {desc}\n   Khai báo: {', '.join(names)}\n   Nạp trước script chính trong index.html. */\n{body}\n")
    cuts.append((s0,s1,path,names))
out=html
for s0,s1,path,names in sorted(cuts,reverse=True):
    out=out[:s0]+f"/* {', '.join(names)}: xem {path} */"+out[s1:]
tags=''.join(f'<script src="{p}?v={hashlib.md5(open(p,"rb").read()).hexdigest()[:8]}"></script>\n' for p,_,_,_ in PLAN)
i=out.index('<script>',base-len('<script>')-5)
out=out[:i]+tags+out[i:]
open('index.html','w',encoding='utf-8').write(out)
print(len(html),'->',len(out))
