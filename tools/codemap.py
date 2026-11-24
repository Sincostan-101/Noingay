"""Sinh CODEMAP.md: bản đồ code SFY để Claude đọc đầu mỗi phiên thay vì đọc lại chat cũ.
Chạy trước mỗi lần đẩy lên: python3 tools/codemap.py   (cần node; dùng tools/analyze.mjs)
Đồng thời cập nhật ?v=<mã> của các file dữ liệu trong index.html.
Thêm hàm mới: gán nhóm trong tools/modules.json ("names"), nếu không sẽ hiện ở mục "Chưa phân nhóm"."""
import json,subprocess,re,collections,os
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
M=json.load(open(os.path.join(ROOT,'tools/modules.json'),encoding='utf-8'))
html=open(os.path.join(ROOT,'index.html'),encoding='utf-8').read()
# cập nhật ?v=... cho file dữ liệu để trình duyệt không dùng bản cũ trong bộ nhớ đệm
import hashlib
def _bump(m):
    f=os.path.join(ROOT,m.group(1))
    return f'<script src="{m.group(1)}?v={hashlib.md5(open(f,"rb").read()).hexdigest()[:8]}"></script>' if os.path.exists(f) else m.group(0)
_new=re.sub(r'<script src="([^"?]+)(?:\?v=[^"]*)?"></script>',_bump,html)
if _new!=html: open(os.path.join(ROOT,'index.html'),'w',encoding='utf-8').write(_new); html=_new; print('đã cập nhật ?v= cho file dữ liệu')
srcs=re.findall(r'<script src="([^"?]+)',html)
decl=[]  # (name, file, line, ids)
def scan(path,code,line0):
    tmp='/tmp/_cm.html'; open(tmp,'w',encoding='utf-8').write('<script>'+code+'</script>')
    subprocess.run(['node',os.path.join(ROOT,'tools/analyze.mjs'),tmp,'/tmp/_cm.json'],check=True,capture_output=True)
    S=json.load(open('/tmp/_cm.json'))
    # vị trí UTF-16 -> dòng
    u=code.encode('utf-16-le'); 
    def line(pos): return line0+u[:pos*2].decode('utf-16-le').count('\n')
    for s in S['stmts']:
        for n in s['names']: decl.append((n,path,line(s['start']),set(s['ids']),s['end']-s['start']))
for p in srcs: scan(p,open(os.path.join(ROOT,p),encoding='utf-8').read(),1)
best=max(re.finditer(r'<script>([\s\S]*?)</script>',html),key=lambda m:len(m.group(1)))
scan('index.html',best.group(1),html.count('\n',0,best.start(1))+1)
names={d[0] for d in decl}
grp=lambda n:M['names'].get(n,'?')
G=M['groups']; G['?']={'label':'Chưa phân nhóm','target':'(gán nhóm trong tools/modules.json)'}
by=collections.defaultdict(list); calls=collections.Counter(); callers=collections.Counter()
for n,f,l,ids,sz in decl:
    by[grp(n)].append((n,f,l,sz))
    for r in ids&names-{n}:
        callers[r]+=1
        if grp(r)!=grp(n): calls[(grp(n),grp(r))]+=1
out=['# Bản đồ code SFY','','> Tự sinh bởi `python3 tools/codemap.py`. Chạy lại sau mỗi lần thêm hoặc đổi tên hàm.',
 '> Sơ đồ tương tác: https://claude.ai/artifact/DRmCikiTMAyGu84MvDcQJf','',
 f'Tổng: {len(decl)} khai báo cấp cao, {len(G)-1} nhóm. File: index.html (khung, CSS, logic) + ' + ', '.join(srcs) + ' (dữ liệu, nạp trước).','',
 '## Nút trung tâm (sửa cẩn thận, nhiều chỗ phụ thuộc)',
 ', '.join(f'`{n}` ({c})' for n,c in callers.most_common(12)),'']
for k in list(G):
    items=by.get(k)
    if not items: continue
    files=sorted({f for _,f,_,_ in items})
    dep=sorted([(b,c) for (a,b),c in calls.items() if a==k],key=lambda x:-x[1])
    out+= [f'## {G[k]["label"]}  `[{k}]`',
      f'- Ở: {", ".join(files)} · Nếu tách: `{G[k]["target"]}`',
      ('- Gọi sang: '+', '.join(f'{G[b]["label"]} ({c})' for b,c in dep)) if dep else '- Không gọi nhóm khác',
      '- Khai báo: '+', '.join(f'`{n}`' + (f' {f}:{l}' if f!='index.html' else f' :{l}') for n,f,l,sz in sorted(items,key=lambda x:(x[1],x[2]))),'']
open(os.path.join(ROOT,'CODEMAP.md'),'w',encoding='utf-8').write('\n'.join(out))
print('CODEMAP.md:',len(decl),'khai báo;', 'chưa phân nhóm:',[n for n,*_ in by.get('?',[])])
