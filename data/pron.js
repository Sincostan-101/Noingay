/* SFY · Bài phát âm (âm, nhóm âm, tên bước)
   Khai báo: snd, PRON_RAW, pItem, PRON_GROUPS, PRON, PSTEP_NAMES
   Nạp trước script chính trong index.html. */
function snd(s, vn, tip, ex){ return {s, vn, tip, ex}; }
const PRON_RAW = {
en: [
 { id:"pen-iu", title:"i và u: ngắn hay dài", sub:"/ɪ/ /iː/ /ʊ/ /uː/",
   sounds:[
    snd("/ɪ/","i ngắn, gần “i” trong “ích”","Miệng mở hé, lưỡi thả lỏng, phát âm thật ngắn và gọn. Không kéo dài như “i” tiếng Việt.",["ship=con tàu","sit=ngồi","big=to","fish=con cá","six=số sáu","milk=sữa","kid=đứa trẻ","film=bộ phim","live=sống","win=thắng"]),
    snd("/iː/","i dài, như “i” tiếng Việt kéo dài","Kéo hai khóe miệng sang hai bên như đang cười, lưỡi nâng cao, giữ âm lâu gấp đôi /ɪ/.",["sheep=con cừu","see=nhìn thấy","eat=ăn","tea=trà","sea=biển","free=miễn phí, rảnh","green=màu xanh lá","meet=gặp","beach=bãi biển","key=chìa khóa"]),
    snd("/ʊ/","u ngắn, gần “u” trong “úp”","Môi hơi tròn nhưng thả lỏng, phát âm ngắn và bật nhanh.",["book=quyển sách","good=tốt","put=đặt","look=nhìn","foot=bàn chân","cook=nấu ăn","full=đầy","woman=phụ nữ","pull=kéo","sugar=đường"]),
    snd("/uː/","u dài, như “u” tiếng Việt kéo dài","Chu môi tròn ra trước, lưỡi lùi về sau, giữ âm lâu.",["food=đồ ăn","blue=màu xanh dương","two=số hai","new=mới","move=di chuyển","cool=mát mẻ","school=trường học","moon=mặt trăng","shoe=chiếc giày","fruit=hoa quả"])],
   mistake:"Đọc “ship” và “sheep” giống hệt nhau. Hai từ này chỉ khác độ dài và độ căng của âm i, đọc sai là người nghe hiểu nhầm nghĩa.",
   pairs:["ship|sheep","sit|seat","live|leave","bit|beat","full|fool","pull|pool"],
   pt:"01 01 01 01 23 23",
   speak:["ship=con tàu","sheep=con cừu","good=tốt","food=đồ ăn","Sit in this seat.=Ngồi vào ghế này đi."]},
 { id:"pen-ea", title:"e, a và â", sub:"/e/ /æ/ /ʌ/ /ɑː/",
   sounds:[
    snd("/e/","như “e” tiếng Việt","Miệng mở vừa phải, lưỡi ở giữa, phát âm ngắn.",["bed=cái giường","red=màu đỏ","pen=bút","egg=quả trứng","ten=số mười","yes=vâng, có","friend=bạn bè","head=cái đầu","many=nhiều","desk=bàn làm việc"]),
    snd("/æ/","nằm giữa “e” và “a”","Mở miệng rộng như khi đọc “a”, đồng thời kéo khóe miệng sang hai bên như khi đọc “e”. Âm này không có trong tiếng Việt.",["cat=con mèo","bad=tệ","man=người đàn ông","bag=cái túi","hat=cái mũ","map=bản đồ","apple=quả táo","black=màu đen","hand=bàn tay","back=phía sau"]),
    snd("/ʌ/","gần “ă” hoặc “â” tiếng Việt","Miệng mở vừa, lưỡi thả lỏng ở giữa, phát âm ngắn và dứt khoát.",["cup=cái cốc","bus=xe buýt","love=yêu","sun=mặt trời","run=chạy","fun=vui","mother=mẹ","money=tiền","much=nhiều","but=nhưng"]),
    snd("/ɑː/","“a” dài, miệng mở to","Hạ hàm và lưỡi xuống thấp, mở miệng rộng và kéo dài âm. Giọng Mỹ thêm “r” cong lưỡi ở các từ có chữ r.",["car=xe hơi","father=bố","start=bắt đầu","arm=cánh tay","park=công viên","dark=tối","heart=trái tim","farm=nông trại","glass=cốc thủy tinh","bath=bồn tắm"])],
   mistake:"Đọc /æ/ thành “a” hoặc “e” tiếng Việt, khiến “bad” và “bed” nghe như nhau.",
   pairs:["bed|bad","men|man","cup|cap","hut|hat","head|had","cut|cat","cut|cart","hat|heart"],
   pt:"01 01 12 12 01 12 23 13",
   speak:["bad=tệ","cup=cái cốc","car=xe hơi","man=người đàn ông","My cat is black.=Con mèo của tôi màu đen."]},
 { id:"pen-o", title:"o, ơ và âm nhẹ ə", sub:"/ɒ/ /ɔː/ /ɜː/ /ə/",
   sounds:[
    snd("/ɒ/","“o” ngắn, miệng tròn","Mở miệng tròn, phát âm ngắn. Giọng Mỹ thường đọc âm này gần giống “a” dài /ɑː/.",["hot=nóng","stop=dừng","job=công việc","box=cái hộp","shop=cửa hàng","clock=đồng hồ","dog=con chó","lot=nhiều","not=không","coffee=cà phê"]),
    snd("/ɔː/","“o” dài, như “o” tiếng Việt kéo dài","Tròn môi, lưỡi lùi về sau và giữ âm lâu.",["law=luật","walk=đi bộ","door=cửa","ball=quả bóng","call=gọi","four=số bốn","talk=nói chuyện","small=nhỏ","morning=buổi sáng","water=nước"]),
    snd("/ɜː/","“ơ” dài","Miệng hé, môi không tròn, lưỡi nằm giữa và kéo dài âm. Giọng Mỹ cong đầu lưỡi lên như có thêm “r”.",["bird=con chim","work=làm việc","learn=học","girl=cô gái","first=đầu tiên","shirt=áo sơ mi","nurse=y tá","word=từ","turn=rẽ","early=sớm"]),
    snd("/ə/","“ơ” rất nhẹ và ngắn","Âm lướt, thả lỏng hoàn toàn, chỉ xuất hiện ở âm tiết không nhấn. Đây là âm gặp nhiều nhất trong tiếng Anh.",["about=về","banana=quả chuối","teacher=giáo viên","ago=trước đây","away=đi xa","sofa=ghế sô pha","police=cảnh sát","today=hôm nay","problem=vấn đề","doctor=bác sĩ"])],
   mistake:"Đọc mọi nguyên âm thật rõ như tiếng Việt. Âm tiết không nhấn thường đọc nhẹ thành /ə/: “banana” là bơ-NA-nơ, không phải ba-na-na.",
   pairs:["walk|work","short|shirt","born|burn","not|nut","shot|shut","ward|word"],
   pt:"12 12 12 0 0 12",
   speak:["walk=đi bộ","work=làm việc","bird=con chim","about=về","Learn a new word.=Học một từ mới."]},
 { id:"pen-diph1", title:"Nguyên âm đôi: ây, ai, oi", sub:"/eɪ/ /aɪ/ /ɔɪ/",
   sounds:[
    snd("/eɪ/","như “ây” tiếng Việt","Bắt đầu từ /e/ rồi trượt nhẹ sang /ɪ/. Phải trượt hết, không dừng ở “e”.",["day=ngày","name=tên","rain=mưa","cake=bánh ngọt","game=trò chơi","pay=trả tiền","train=tàu hỏa","table=cái bàn","wait=chờ","eight=số tám"]),
    snd("/aɪ/","như “ai” tiếng Việt","Mở miệng ở “a” rồi trượt lên “i”.",["my=của tôi","time=thời gian","light=ánh sáng","five=số năm","fly=bay","ice=nước đá","night=ban đêm","rice=cơm","buy=mua","nice=đẹp, tốt"]),
    snd("/ɔɪ/","như “oi” tiếng Việt","Tròn môi ở “o” rồi trượt sang “i”.",["boy=cậu bé","coin=đồng xu","enjoy=thích thú","toy=đồ chơi","voice=giọng nói","noise=tiếng ồn","oil=dầu","point=điểm","join=tham gia","choice=sự lựa chọn"])],
   mistake:"Đọc “name” thành “nem”, “late” thành “let”. Thiếu phần trượt sang “i” là thành từ khác.",
   pairs:["wait|wet","late|let","main|men","fine|fin","buy|boy","tile|toil"],
   pt:"0 0 0 1 12 12",
   speak:["day=ngày","time=thời gian","boy=cậu bé","name=tên","My boy likes to play.=Con trai tôi thích chơi."]},
 { id:"pen-diph2", title:"Nguyên âm đôi: ao, âu, ia, eơ, uơ", sub:"/aʊ/ /əʊ/ /ɪə/ /eə/ /ʊə/",
   sounds:[
    snd("/aʊ/","như “ao” tiếng Việt","Mở miệng ở “a” rồi tròn môi trượt sang “u”.",["now=bây giờ","house=ngôi nhà","down=xuống","how=thế nào","mouth=miệng","town=thị trấn","cloud=đám mây","flower=bông hoa","out=ra ngoài","brown=màu nâu"]),
    snd("/əʊ/","như “âu” (giọng Anh) hoặc “ôu” (giọng Mỹ)","Bắt đầu ở “ơ” hoặc “ô” rồi tròn môi trượt sang “u”. Không đọc thành “ô” đơn.",["go=đi","home=nhà","phone=điện thoại","know=biết","cold=lạnh","boat=con thuyền","road=con đường","show=chương trình","slow=chậm","open=mở"]),
    snd("/ɪə/","như “ia” tiếng Việt","Từ “i” trượt sang “ơ”. Giọng Mỹ đọc thành “i” cộng r cong lưỡi.",["near=gần","here=ở đây","idea=ý tưởng","ear=tai","year=năm","beer=bia","clear=rõ ràng","dear=thân mến","cheer=cổ vũ","hear=nghe"]),
    snd("/eə/","như “e-ơ” đọc liền","Từ “e” trượt sang “ơ”. Giọng Mỹ đọc thành “e” cộng r cong lưỡi.",["hair=tóc","where=ở đâu","care=quan tâm","air=không khí","chair=cái ghế","there=ở đó","bear=con gấu","fair=công bằng","share=chia sẻ","pair=một đôi"]),
    snd("/ʊə/","như “u-ơ” đọc liền","Từ “u” trượt sang “ơ”. Âm này ngày càng ít dùng, nhiều người đọc thành /ɔː/.",["tour=chuyến du lịch","poor=nghèo","cure=chữa khỏi","sure=chắc chắn","tourist=khách du lịch","jury=bồi thẩm đoàn","pure=tinh khiết","mature=trưởng thành","euro=đồng euro","during=trong suốt"])],
   mistake:"Đọc “go” thành “gô”, “home” thành “hôm”. Cuối âm phải tròn môi trượt sang “u”.",
   pairs:["now|no","town|tone","loud|load","hair|here","bear|beer","pair|peer"],
   pt:"01 01 01 23 23 23",
   speak:["now=bây giờ","home=nhà","here=ở đây","where=ở đâu","Go down to the house.=Đi xuống ngôi nhà."]},
 { id:"pen-pbtdkg", title:"p b, t d, k g", sub:"/p/ /b/ /t/ /d/ /k/ /g/",
   sounds:[
    snd("/p/","như “p” nhưng bật hơi","Ở đầu từ, mím môi rồi bật mạnh một luồng hơi. Đặt tay trước miệng sẽ thấy hơi phả ra.",["pen=bút","pay=trả tiền","stop=dừng","pink=màu hồng","help=giúp đỡ","cup=cái cốc","park=công viên","apple=quả táo","happy=vui vẻ","shop=cửa hàng"]),
    snd("/b/","như “b” tiếng Việt","Mím môi rồi bật ra, dây thanh rung. Không bật hơi mạnh như /p/.",["big=to","job=công việc","baby=em bé","bike=xe đạp","ball=quả bóng","box=cái hộp","bed=cái giường","bus=xe buýt","table=cái bàn","club=câu lạc bộ"]),
    snd("/t/","gần “th” tiếng Việt ở đầu từ","Đầu lưỡi chạm lợi sau răng trên (không chạm răng), bật hơi. Ở cuối từ vẫn phải chặn lưỡi rõ ràng.",["tea=trà","top=đỉnh","hat=cái mũ","ten=số mười","cat=con mèo","hot=nóng","time=thời gian","water=nước","eat=ăn","ticket=vé"]),
    snd("/d/","gần “đ” nhưng đầu lưỡi đặt cao hơn","Đầu lưỡi chạm lợi trên rồi bật ra, dây thanh rung.",["do=làm","day=ngày","bed=cái giường","dog=con chó","red=màu đỏ","bird=con chim","door=cửa","good=tốt","idea=ý tưởng","doctor=bác sĩ"]),
    snd("/k/","như “k” nhưng bật hơi","Cuống lưỡi chạm vòm mềm rồi bật mạnh luồng hơi.",["key=chìa khóa","cat=con mèo","back=phía sau","cake=bánh ngọt","book=quyển sách","desk=bàn làm việc","kitchen=nhà bếp","school=trường học","milk=sữa","look=nhìn"]),
    snd("/g/","như “g” tiếng Việt, bật gọn","Cuống lưỡi chạm vòm mềm rồi bật ra, dây thanh rung.",["go=đi","bag=cái túi","dog=con chó","game=trò chơi","egg=quả trứng","girl=cô gái","green=màu xanh lá","big=to","leg=cái chân","sugar=đường"])],
   mistake:"Nuốt âm cuối: “bad” đọc thành “ba”, “cat” đọc thành “ca”. Âm cuối quyết định nghĩa của từ, phải đọc rõ.",
   pairs:["pig|big","pea|bee","tie|die","cap|cab","cold|gold","back|bag","ten|den","bat|bad"],
   pt:"01 01 23 01 45 45 23 23",
   speak:["pen=bút","big=to","tea=trà","cat=con mèo","Put the bag on the bed.=Đặt cái túi lên giường."]},
 { id:"pen-fvth", title:"f v và hai âm th", sub:"/f/ /v/ /θ/ /ð/",
   sounds:[
    snd("/f/","như “ph” tiếng Việt","Răng trên chạm nhẹ môi dưới, thổi hơi qua khe.",["fish=con cá","coffee=cà phê","life=cuộc sống","face=khuôn mặt","off=tắt","phone=điện thoại","food=đồ ăn","five=số năm","laugh=cười","family=gia đình"]),
    snd("/v/","như “v” tiếng Việt","Giống /f/ nhưng dây thanh rung. Ở cuối từ vẫn phải đọc rõ.",["very=rất","love=yêu","five=số năm","movie=bộ phim","have=có","visit=thăm","voice=giọng nói","river=con sông","give=cho","video=video"]),
    snd("/θ/","không có trong tiếng Việt","Đặt đầu lưỡi giữa hai hàm răng rồi thổi hơi ra, không rung dây thanh. Không đọc thành “th” hay “t” tiếng Việt.",["think=nghĩ","three=số ba","mouth=miệng","thank=cảm ơn","month=tháng","bath=bồn tắm","thing=đồ vật","both=cả hai","birthday=sinh nhật","tooth=răng"]),
    snd("/ð/","không có trong tiếng Việt","Giống /θ/ (lưỡi giữa hai hàm răng) nhưng dây thanh rung. Nghe hơi giống “đ” kéo nhẹ.",["this=cái này","mother=mẹ","they=họ","weather=thời tiết","with=với","that=cái đó","brother=anh em trai","there=ở đó","father=bố","smooth=mịn"])],
   mistake:"Đọc “think” thành “thinh” hoặc “sink”, “this” thành “đít”. Hãy soi gương: đầu lưỡi phải thò ra giữa hai hàm răng.",
   pairs:["fan|van","few|view","think|sink","three|tree","they|day","thin|tin","though|dough"],
   pt:"01 01 2 2 3 2 3",
   speak:["think=nghĩ","this=cái này","very=rất","mother=mẹ","I think this is fine.=Tôi nghĩ thế này là ổn."]},
 { id:"pen-szsh", title:"s z, sh và zh", sub:"/s/ /z/ /ʃ/ /ʒ/",
   sounds:[
    snd("/s/","như “x” tiếng Việt","Đầu lưỡi gần lợi trên, hơi rít qua khe hẹp.",["see=nhìn thấy","bus=xe buýt","city=thành phố","sun=mặt trời","class=lớp học","six=số sáu","say=nói","ice=nước đá","kiss=hôn","sister=chị em gái"]),
    snd("/z/","như /s/ nhưng có rung","Giữ vị trí như /s/ nhưng dây thanh rung, nghe như tiếng ong “zzz”.",["zoo=sở thú","easy=dễ","is=là","music=âm nhạc","nose=cái mũi","busy=bận","rose=hoa hồng","zero=số không","has=có","size=cỡ"]),
    snd("/ʃ/","như “s” uốn lưỡi, môi chu","Chu môi ra trước, lưỡi lùi nhẹ, thổi hơi như khi ra hiệu “suỵt”.",["she=cô ấy","fish=con cá","nation=quốc gia","shop=cửa hàng","wash=rửa, giặt","shoe=chiếc giày","sugar=đường","push=đẩy","ocean=đại dương","short=ngắn"]),
    snd("/ʒ/","gần “gi” kéo dài","Giống /ʃ/ nhưng dây thanh rung.",["measure=đo lường","usually=thường xuyên","television=tivi","usual=thông thường","decision=quyết định","garage=nhà để xe","vision=tầm nhìn","leisure=giải trí","treasure=kho báu","Asia=châu Á"])],
   mistake:"Bỏ âm /s/ /z/ ở cuối từ: “cats” đọc thành “cat”, “is” đọc thành “i”. Mất âm cuối là mất số nhiều.",
   pairs:["sip|zip","sue|zoo","see|she","sip|ship","sort|short","bus|buzz"],
   pt:"01 01 02 02 02 01",
   speak:["see=nhìn thấy","zoo=sở thú","she=cô ấy","usually=thường xuyên","She sells fish.=Cô ấy bán cá."]},
 { id:"pen-chjh", title:"ch, j và h", sub:"/tʃ/ /dʒ/ /h/",
   sounds:[
    snd("/tʃ/","như “ch” nhưng chu môi","Chu môi, đầu lưỡi chạm lợi trên rồi bật ra với luồng hơi mạnh.",["chair=cái ghế","watch=xem","teacher=giáo viên","lunch=bữa trưa","cheap=rẻ","kitchen=nhà bếp","church=nhà thờ","match=trận đấu","cheese=pho mát","picture=bức tranh"]),
    snd("/dʒ/","gần “gi” bật mạnh","Giống /tʃ/ nhưng dây thanh rung.",["job=công việc","jam=mứt","orange=quả cam","juice=nước ép","June=tháng Sáu","bridge=cây cầu","jacket=áo khoác","page=trang","large=lớn","gym=phòng gym"]),
    snd("/h/","luồng hơi nhẹ","Chỉ thở nhẹ ra, không cọ xát ở cổ họng. Nhẹ hơn “h” tiếng Việt.",["hat=cái mũ","home=nhà","behind=phía sau","hot=nóng","hand=bàn tay","happy=vui vẻ","hello=xin chào","house=ngôi nhà","who=ai","help=giúp đỡ"])],
   mistake:"Đọc /tʃ/ và /ʃ/ như nhau, khiến “chip” và “ship” nghe giống nhau. /tʃ/ có tiếng bật, /ʃ/ chỉ có tiếng xì.",
   pairs:["chip|ship","cheap|jeep","choke|joke","chin|gin","hat|at","heat|eat"],
   pt:"0 01 01 01 2 2",
   speak:["chair=cái ghế","job=công việc","home=nhà","watch=xem","Change the cheap chair.=Đổi cái ghế rẻ tiền đi."]},
 { id:"pen-mnng", title:"m, n và ng", sub:"/m/ /n/ /ŋ/",
   sounds:[
    snd("/m/","như “m” tiếng Việt","Mím môi, hơi đi ra đằng mũi. Ở cuối từ phải giữ môi khép.",["man=người đàn ông","home=nhà","summer=mùa hè","milk=sữa","room=phòng","mother=mẹ","money=tiền","time=thời gian","swim=bơi","mouth=miệng"]),
    snd("/n/","như “n” tiếng Việt","Đầu lưỡi chạm lợi trên, hơi ra đằng mũi.",["no=không","sun=mặt trời","dinner=bữa tối","nine=số chín","name=tên","green=màu xanh lá","night=ban đêm","phone=điện thoại","money=tiền","know=biết"]),
    snd("/ŋ/","như “ng” tiếng Việt","Cuống lưỡi chạm vòm mềm. Ở cuối từ như “sing” không đọc thêm “g”.",["sing=hát","long=dài","morning=buổi sáng","king=nhà vua","young=trẻ","thank=cảm ơn","song=bài hát","ring=chiếc nhẫn","English=tiếng Anh","finger=ngón tay"])],
   mistake:"Đọc lẫn âm cuối /n/ và /ŋ/: “thin” và “thing” nghe như nhau. Ở /n/ đầu lưỡi chạm lợi, ở /ŋ/ đầu lưỡi thả xuống.",
   pairs:["sum|sun","thin|thing","ran|rang","sin|sing","ban|bang","come|cone"],
   pt:"01 12 12 12 12 01",
   speak:["sun=mặt trời","sing=hát","man=người đàn ông","morning=buổi sáng","Sing a song in the morning.=Hát một bài vào buổi sáng."]},
 { id:"pen-lrwy", title:"l, r, w và y", sub:"/l/ /r/ /w/ /j/",
   sounds:[
    snd("/l/","như “l” tiếng Việt ở đầu từ","Đầu lưỡi chạm lợi trên. Ở cuối từ (như “feel”) lưỡi kéo về sau, nghe gần như “ồ” nhẹ.",["light=ánh sáng","hello=xin chào","feel=cảm thấy","leg=cái chân","ball=quả bóng","blue=màu xanh dương","look=nhìn","little=nhỏ","school=trường học","apple=quả táo"]),
    snd("/r/","khác “r” tiếng Việt","Cuộn đầu lưỡi về sau, không chạm vòm miệng và không rung lưỡi. Môi hơi tròn.",["red=màu đỏ","right=đúng","sorry=xin lỗi","rice=cơm","very=rất","green=màu xanh lá","road=con đường","run=chạy","write=viết","tomorrow=ngày mai"]),
    snd("/w/","gần “qu” hoặc “oa”","Chu môi tròn rồi mở ra thật nhanh. Không đọc thành “v”.",["we=chúng tôi","water=nước","window=cửa sổ","wait=chờ","walk=đi bộ","week=tuần","wine=rượu vang","quick=nhanh","one=số một","sweet=ngọt"]),
    snd("/j/","như “y” trong “yêu”","Mặt lưỡi nâng sát vòm cứng rồi lướt sang nguyên âm phía sau.",["yes=vâng","you=bạn","year=năm","yellow=màu vàng","young=trẻ","music=âm nhạc","yogurt=sữa chua","use=dùng","few=ít","yard=cái sân"])],
   mistake:"Đọc “light” và “right” giống nhau, hoặc đọc /w/ thành “v” (“west” thành “vest”).",
   pairs:["light|right","long|wrong","lead|read","glass|grass","vest|west","vine|wine","yet|jet","year|ear"],
   pt:"01 01 01 01 2 2 3 3",
   speak:["right=đúng","light=ánh sáng","water=nước","yes=vâng","Read the red letter.=Đọc lá thư màu đỏ."]}
],
zh: [
 { id:"pzh-tones", title:"Bốn thanh điệu", sub:"Thanh 1, 2, 3, 4 và thanh nhẹ",
   sounds:[
    snd("ā","Thanh 1: cao và đều","Giữ giọng ở mức cao, bằng phẳng và hơi kéo dài, như hát một nốt cao. Cao hơn thanh ngang tiếng Việt.",["妈 mā=mẹ","书 shū=sách","飞 fēi=bay","天 tiān=trời","喝 hē=uống","开 kāi=mở","吃 chī=ăn","说 shuō=nói","花 huā=hoa","鸡 jī=gà"]),
    snd("á","Thanh 2: đi lên, gần dấu sắc","Bắt đầu ở giọng trung bình rồi đi lên cao, như khi hỏi lại “hả?”.",["麻 má=tê","茶 chá=trà","来 lái=đến","人 rén=người","学 xué=học","钱 qián=tiền","鱼 yú=con cá","白 bái=trắng","房 fáng=nhà","玩 wán=chơi"]),
    snd("ǎ","Thanh 3: xuống thấp rồi lên, gần dấu hỏi","Hạ giọng xuống thật thấp rồi nhấc lên. Khi nói nhanh trong câu thường chỉ hạ thấp mà không lên lại.",["马 mǎ=con ngựa","好 hǎo=tốt","我 wǒ=tôi","你 nǐ=bạn","买 mǎi=mua","水 shuǐ=nước","小 xiǎo=nhỏ","走 zǒu=đi","老 lǎo=già","想 xiǎng=muốn"]),
    snd("à","Thanh 4: rơi mạnh và dứt khoát","Bắt đầu từ cao và rơi nhanh xuống thấp, dứt khoát như khi ra lệnh.",["骂 mà=mắng","是 shì=là","去 qù=đi","不 bù=không","大 dà=to","看 kàn=xem","四 sì=bốn","饭 fàn=cơm","叫 jiào=gọi","坐 zuò=ngồi"]),
    snd("a","Thanh nhẹ: ngắn và nhẹ","Đọc thật ngắn, nhẹ, không dấu. Thường là âm tiết thứ hai của từ lặp hoặc trợ từ.",["妈妈 māma=mẹ","谢谢 xièxie=cảm ơn","哥哥 gēge=anh trai","爸爸 bàba=bố","妹妹 mèimei=em gái","东西 dōngxi=đồ vật","桌子 zhuōzi=cái bàn","朋友 péngyou=bạn bè","喜欢 xǐhuan=thích","衣服 yīfu=quần áo"])],
   mistake:"Đọc thanh 4 thành dấu huyền tiếng Việt (thấp và kéo dài). Thanh 4 phải bắt đầu từ cao và rơi xuống thật nhanh.",
   pairs:["妈 mā|马 mǎ","买 mǎi|卖 mài","汤 tāng|糖 táng","书 shū|树 shù","问 wèn|闻 wén","请 qǐng|晴 qíng"],
   pt:"02 23 01 03 13 12",
   speak:["你好 nǐ hǎo=xin chào","谢谢 xièxie=cảm ơn","妈妈 māma=mẹ","再见 zàijiàn=tạm biệt","我是越南人 wǒ shì Yuènán rén=tôi là người Việt Nam"]},
 { id:"pzh-vowels", title:"Vận mẫu đơn: a o e i u ü", sub:"6 nguyên âm cơ bản",
   sounds:[
    snd("a","như “a” tiếng Việt","Mở miệng to, lưỡi hạ thấp.",["八 bā=tám","他 tā=anh ấy","大 dà=to","妈 mā=mẹ","发 fā=gửi","拿 ná=cầm","茶 chá=trà","打 dǎ=đánh","爬 pá=leo, bò","沙发 shāfā=ghế sô pha"]),
    snd("o","gần “ô”, sau b p m f nghe như “ua”","Tròn môi, lưỡi lùi về sau. Khi đi sau b p m f có một chút “u” lướt ở đầu.",["我 wǒ=tôi","波 bō=sóng","佛 fó=Phật","破 pò=rách","摸 mō=sờ","婆婆 pópo=bà","伯伯 bóbo=bác","泼 pō=tạt (nước)","魔 mó=ma thuật","磨 mó=mài"]),
    snd("e","gần “ưa” hoặc “ơ”","Miệng hé, môi không tròn, lưỡi lùi về sau. Không đọc thành “e” tiếng Việt.",["饿 è=đói","喝 hē=uống","哥 gē=anh trai","车 chē=xe","热 rè=nóng","课 kè=bài học","河 hé=con sông","渴 kě=khát","歌 gē=bài hát","乐 lè=vui"]),
    snd("i","như “i” tiếng Việt","Kéo khóe miệng sang hai bên, lưỡi nâng cao.",["一 yī=một","你 nǐ=bạn","米 mǐ=gạo","七 qī=bảy","鸡 jī=gà","西 xī=phía tây","鼻 bí=mũi","习 xí=học tập","笔 bǐ=cây bút","地 dì=đất"]),
    snd("u","như “u” tiếng Việt","Chu môi tròn ra trước, lưỡi lùi về sau.",["五 wǔ=năm","书 shū=sách","路 lù=con đường","不 bù=không","猪 zhū=con lợn","哭 kū=khóc","读 dú=đọc","苦 kǔ=đắng","树 shù=cái cây","母 mǔ=mẹ"]),
    snd("ü","không có trong tiếng Việt","Đặt lưỡi như khi đọc “i” rồi chu môi tròn như “u”. Sau j q x y thì viết là u nhưng vẫn đọc là ü.",["鱼 yú=con cá","女 nǚ=nữ","去 qù=đi","雨 yǔ=mưa","绿 lǜ=màu xanh lá","句 jù=câu","剧 jù=kịch","区 qū=khu vực","许 xǔ=cho phép","居 jū=ở"])],
   mistake:"Đọc ü thành “uy” hoặc “i”. Giữ nguyên lưỡi của “i”, chỉ thay đổi môi, và không trượt âm.",
   pairs:["路 lù|绿 lǜ","怒 nù|女 nǚ","哥 gē|姑 gū","喝 hē|哈 hā","你 nǐ|女 nǚ","波 bō|八 bā"],
   pt:"45 45 24 02 35 01",
   speak:["喝水 hē shuǐ=uống nước","女儿 nǚ'ér=con gái","绿色 lǜsè=màu xanh lá","我饿了 wǒ è le=tôi đói rồi","他是我哥哥 tā shì wǒ gēge=anh ấy là anh trai tôi"]},
 { id:"pzh-bpmf", title:"Thanh mẫu b p m f", sub:"Âm môi",
   sounds:[
    snd("b","gần “p” tiếng Việt, không bật hơi","Mím môi rồi bật ra nhẹ, không có luồng hơi. Không rung như “b” tiếng Việt.",["爸 bà=bố","包 bāo=túi","白 bái=trắng","不 bù=không","北 běi=phía bắc","半 bàn=một nửa","杯 bēi=cái cốc","笔 bǐ=cây bút","病 bìng=bệnh","冰 bīng=băng"]),
    snd("p","như b nhưng bật hơi mạnh","Mím môi rồi bật mạnh một luồng hơi. Đặt tờ giấy trước miệng sẽ thấy giấy rung.",["怕 pà=sợ","跑 pǎo=chạy","皮 pí=da","朋友 péngyou=bạn bè","盘 pán=cái đĩa","票 piào=vé","爬 pá=leo","胖 pàng=béo","平 píng=phẳng","苹果 píngguǒ=quả táo"]),
    snd("m","như “m” tiếng Việt","Mím môi, hơi ra đằng mũi.",["妈 mā=mẹ","买 mǎi=mua","米 mǐ=gạo","没 méi=không có","门 mén=cửa","面 miàn=mì","猫 māo=con mèo","美 měi=đẹp","名 míng=tên","慢 màn=chậm"]),
    snd("f","như “ph” tiếng Việt","Răng trên chạm nhẹ môi dưới, thổi hơi qua khe.",["饭 fàn=cơm","飞 fēi=bay","风 fēng=gió","放 fàng=đặt","房 fáng=nhà","分 fēn=phút","发 fā=gửi","父 fù=cha","非常 fēicháng=rất","方 fāng=vuông"])],
   mistake:"Đọc b thành “b” tiếng Việt (có rung) và p thành “p” không bật hơi. Trong tiếng Trung, b và p khác nhau ở luồng hơi, không phải ở độ rung.",
   pairs:["爸 bà|怕 pà","包 bāo|抛 pāo","饱 bǎo|跑 pǎo","白 bái|牌 pái","飞 fēi|杯 bēi","米 mǐ|比 bǐ"],
   pt:"01 01 01 01 03 02",
   speak:["爸爸 bàba=bố","朋友 péngyou=bạn bè","妈妈 māma=mẹ","吃饭 chīfàn=ăn cơm","我不怕 wǒ bú pà=tôi không sợ"]},
 { id:"pzh-dtnl", title:"Thanh mẫu d t n l", sub:"Âm đầu lưỡi",
   sounds:[
    snd("d","gần “t” tiếng Việt, không bật hơi","Đầu lưỡi chạm lợi trên rồi bật ra nhẹ. Không đọc thành “đ”.",["大 dà=to","多 duō=nhiều","弟 dì=em trai","点 diǎn=giờ, điểm","电 diàn=điện","东 dōng=phía đông","等 děng=đợi","对 duì=đúng","地 dì=đất","读 dú=đọc"]),
    snd("t","gần “th” tiếng Việt, bật hơi","Như d nhưng bật mạnh một luồng hơi.",["他 tā=anh ấy","听 tīng=nghe","太 tài=quá","天 tiān=trời","疼 téng=đau","头 tóu=đầu","糖 táng=đường","跳 tiào=nhảy","图 tú=bức tranh","同 tóng=cùng"]),
    snd("n","như “n” tiếng Việt","Đầu lưỡi chạm lợi trên, hơi ra đằng mũi.",["你 nǐ=bạn","男 nán=nam","牛 niú=bò","女 nǚ=nữ","那 nà=kia","年 nián=năm","难 nán=khó","能 néng=có thể","你们 nǐmen=các bạn","南 nán=phía nam"]),
    snd("l","như “l” tiếng Việt","Đầu lưỡi chạm lợi trên, hơi đi ra hai bên lưỡi.",["来 lái=đến","老 lǎo=già","六 liù=sáu","冷 lěng=lạnh","蓝 lán=màu xanh lam","路 lù=đường","两 liǎng=hai","绿 lǜ=màu xanh lá","楼 lóu=tòa nhà, tầng","累 lèi=mệt"])],
   mistake:"Đọc d thành “đ” tiếng Việt. Âm d của tiếng Trung gần với “t” tiếng Việt hơn, còn t thì gần với “th”.",
   pairs:["到 dào|套 tào","读 dú|图 tú","弟 dì|替 tì","男 nán|蓝 lán","你 nǐ|里 lǐ","脑 nǎo|老 lǎo"],
   pt:"01 01 01 23 23 23",
   speak:["弟弟 dìdi=em trai","太好了 tài hǎo le=tốt quá","你来了 nǐ lái le=bạn đến rồi","老师 lǎoshī=thầy cô","南方 nánfāng=miền Nam"]},
 { id:"pzh-gkh", title:"Thanh mẫu g k h", sub:"Âm cuống lưỡi",
   sounds:[
    snd("g","gần “c” tiếng Việt, không bật hơi","Cuống lưỡi chạm vòm mềm rồi bật ra nhẹ.",["哥 gē=anh trai","高 gāo=cao","狗 gǒu=con chó","给 gěi=cho","贵 guì=đắt","国 guó=nước","工 gōng=công việc","关 guān=đóng","刚 gāng=vừa mới","跟 gēn=với"]),
    snd("k","như g nhưng bật hơi mạnh","Cuống lưỡi chạm vòm mềm rồi bật mạnh luồng hơi.",["看 kàn=xem","可 kě=có thể","口 kǒu=miệng","快 kuài=nhanh","开 kāi=mở","哭 kū=khóc","客 kè=khách","空 kōng=trống","课 kè=bài học","苦 kǔ=đắng"]),
    snd("h","gần “kh” tiếng Việt","Cuống lưỡi nâng gần vòm mềm, hơi cọ xát đi ra. Mạnh hơn “h” tiếng Việt.",["好 hǎo=tốt","喝 hē=uống","火 huǒ=lửa","红 hóng=đỏ","黑 hēi=đen","花 huā=hoa","河 hé=con sông","后 hòu=sau","还 hái=còn","画 huà=vẽ"])],
   mistake:"Đọc h nhẹ như “h” tiếng Việt. Âm h tiếng Trung có tiếng cọ xát ở cuống lưỡi, gần với “kh”.",
   pairs:["哥 gē|科 kē","怪 guài|快 kuài","歌 gē|喝 hē","裤 kù|户 hù","狗 gǒu|口 kǒu","瓜 guā|花 huā"],
   pt:"01 01 02 12 01 02",
   speak:["哥哥 gēge=anh trai","可以 kěyǐ=được","很好 hěn hǎo=rất tốt","喝咖啡 hē kāfēi=uống cà phê","好看 hǎokàn=đẹp"]},
 { id:"pzh-jqx", title:"Thanh mẫu j q x", sub:"Âm mặt lưỡi",
   sounds:[
    snd("j","gần “ch” tiếng Việt, không bật hơi","Mặt lưỡi áp vào vòm cứng, đầu lưỡi tì sau răng dưới, bật ra nhẹ.",["鸡 jī=gà","家 jiā=nhà","九 jiǔ=chín","几 jǐ=mấy","今天 jīntiān=hôm nay","见 jiàn=gặp","姐 jiě=chị gái","近 jìn=gần","酒 jiǔ=rượu","机 jī=máy"]),
    snd("q","như j nhưng bật hơi mạnh","Giữ vị trí như j rồi bật mạnh luồng hơi.",["去 qù=đi","钱 qián=tiền","七 qī=bảy","请 qǐng=mời","去年 qùnián=năm ngoái","骑 qí=cưỡi, đạp xe","起 qǐ=dậy","千 qiān=nghìn","汽车 qìchē=ô tô","球 qiú=quả bóng"]),
    snd("x","gần “x” tiếng Việt, khóe miệng kéo ra","Mặt lưỡi áp gần vòm cứng, kéo khóe miệng sang hai bên như cười, thổi hơi.",["谢 xiè=cảm ơn","小 xiǎo=nhỏ","西 xī=phía tây","学 xué=học","写 xiě=viết","想 xiǎng=muốn","休息 xiūxi=nghỉ ngơi","新 xīn=mới","洗 xǐ=rửa","笑 xiào=cười"])],
   mistake:"Sau j q x, chữ u thật ra là ü: 去 qù đọc với môi chu tròn như ü, không phải “khu”.",
   pairs:["鸡 jī|七 qī","见 jiàn|欠 qiàn","急 jí|席 xí","前 qián|闲 xián","西 xī|七 qī","机 jī|西 xī"],
   pt:"01 01 02 12 12 02",
   speak:["谢谢 xièxie=cảm ơn","喜欢 xǐhuan=thích","去哪儿 qù nǎr=đi đâu","加油 jiāyóu=cố lên","多少钱 duōshao qián=bao nhiêu tiền"]},
 { id:"pzh-zhchshr", title:"Thanh mẫu zh ch sh r", sub:"Âm uốn lưỡi",
   sounds:[
    snd("zh","gần “tr” tiếng Việt, không bật hơi","Cong đầu lưỡi lên chạm vòm cứng phía trước rồi bật ra nhẹ.",["中 zhōng=giữa","这 zhè=này","找 zhǎo=tìm","中国 Zhōngguó=Trung Quốc","住 zhù=ở","知道 zhīdào=biết","站 zhàn=đứng, nhà ga","纸 zhǐ=giấy","桌子 zhuōzi=cái bàn","猪 zhū=con lợn"]),
    snd("ch","như zh nhưng bật hơi","Cong đầu lưỡi như zh rồi bật mạnh luồng hơi.",["吃 chī=ăn","茶 chá=trà","车 chē=xe","出 chū=ra","穿 chuān=mặc","长 cháng=dài","唱 chàng=hát","床 chuáng=cái giường","城 chéng=thành phố","超市 chāoshì=siêu thị"]),
    snd("sh","gần “s” uốn lưỡi của tiếng Việt","Cong đầu lưỡi gần vòm cứng nhưng không chạm, thổi hơi qua khe.",["是 shì=là","书 shū=sách","水 shuǐ=nước","说 shuō=nói","手 shǒu=tay","山 shān=núi","时 shí=giờ, lúc","上 shàng=trên","少 shǎo=ít","身体 shēntǐ=cơ thể"]),
    snd("r","gần “r” uốn lưỡi nhẹ","Cong lưỡi như sh nhưng dây thanh rung, không rung đầu lưỡi.",["人 rén=người","热 rè=nóng","日 rì=ngày","肉 ròu=thịt","认识 rènshi=quen biết","让 ràng=để, khiến","容易 róngyì=dễ","如果 rúguǒ=nếu","然后 ránhòu=sau đó","入 rù=vào"])],
   mistake:"Không cong lưỡi, khiến zh ch sh nghe thành z c s. Hãy để đầu lưỡi cong lên chạm phần vòm phía sau lợi.",
   pairs:["知 zhī|吃 chī","找 zhǎo|吵 chǎo","是 shì|日 rì","山 shān|三 sān","中 zhōng|宗 zōng","是 shì|四 sì"],
   pt:"01 01 23 2 0 2",
   speak:["中国 Zhōngguó=Trung Quốc","吃饭 chīfàn=ăn cơm","老师 lǎoshī=thầy cô","日本人 Rìběn rén=người Nhật","这是什么 zhè shì shénme=đây là gì"]},
 { id:"pzh-zcs", title:"Thanh mẫu z c s", sub:"Âm đầu lưỡi trước",
   sounds:[
    snd("z","gần “ch” nhẹ, không bật hơi","Đầu lưỡi tì sau răng cửa trên rồi bật ra nhẹ, nghe như “tz”.",["在 zài=ở","走 zǒu=đi","字 zì=chữ","做 zuò=làm","最 zuì=nhất","早 zǎo=sớm","再 zài=lại","嘴 zuǐ=miệng","坐 zuò=ngồi","昨天 zuótiān=hôm qua"]),
    snd("c","như z nhưng bật hơi mạnh","Giữ vị trí như z rồi bật mạnh luồng hơi, nghe như “tx”.",["菜 cài=món ăn","次 cì=lần","草 cǎo=cỏ","错 cuò=sai","从 cóng=từ","才 cái=mới","擦 cā=lau","层 céng=tầng","存 cún=gửi (tiền)","词 cí=từ"]),
    snd("s","như “x” tiếng Việt","Đầu lưỡi gần sau răng trên, thổi hơi qua khe.",["四 sì=bốn","三 sān=ba","岁 suì=tuổi","送 sòng=tặng","酸 suān=chua","色 sè=màu","伞 sǎn=cái ô","散步 sànbù=đi dạo","算 suàn=tính","思 sī=nghĩ"])],
   mistake:"Trong zi ci si, chữ i không đọc là “i” mà gần như “ư”: 四 sì đọc gần “xư”.",
   pairs:["在 zài|菜 cài","字 zì|次 cì","早 zǎo|草 cǎo","四 sì|是 shì","三 sān|山 shān","租 zū|粗 cū"],
   pt:"01 01 01 2 2 01",
   speak:["再见 zàijiàn=tạm biệt","早上好 zǎoshang hǎo=chào buổi sáng","菜单 càidān=thực đơn","名字 míngzi=tên","四川 Sìchuān=Tứ Xuyên"]},
 { id:"pzh-diph", title:"Vận mẫu kép: ai ei ao ou", sub:"4 vần ghép hai nguyên âm",
   sounds:[
    snd("ai","như “ai” tiếng Việt","Mở miệng ở “a” rồi trượt sang “i”.",["爱 ài=yêu","来 lái=đến","买 mǎi=mua","开 kāi=mở","白 bái=trắng","太 tài=quá","菜 cài=món ăn","在 zài=ở","海 hǎi=biển","带 dài=mang"]),
    snd("ei","như “ây” tiếng Việt","Bắt đầu ở “ê” rồi trượt sang “i”.",["给 gěi=cho","黑 hēi=đen","杯 bēi=cốc","美 měi=đẹp","北 běi=phía bắc","累 lèi=mệt","飞 fēi=bay","没 méi=không có","内 nèi=bên trong","被 bèi=bị"]),
    snd("ao","như “ao” tiếng Việt","Mở miệng ở “a” rồi tròn môi trượt sang “o”.",["好 hǎo=tốt","猫 māo=mèo","高 gāo=cao","到 dào=đến","跑 pǎo=chạy","早 zǎo=sớm","包 bāo=cái túi","少 shǎo=ít","老 lǎo=già","草 cǎo=cỏ"]),
    snd("ou","như “âu” tiếng Việt","Bắt đầu ở “ô” rồi tròn môi trượt sang “u”.",["狗 gǒu=chó","走 zǒu=đi","肉 ròu=thịt","手 shǒu=tay","头 tóu=đầu","口 kǒu=miệng","楼 lóu=tòa nhà","后 hòu=sau","周 zhōu=tuần","收 shōu=nhận"])],
   mistake:"Đọc ou thành “ô” hoặc “u”. Phải có cả hai phần và trượt từ phần đầu sang phần sau.",
   pairs:["卖 mài|妹 mèi","高 gāo|沟 gōu","来 lái|雷 léi","包 bāo|杯 bēi","早 zǎo|走 zǒu","该 gāi|高 gāo"],
   pt:"01 23 01 12 23 02",
   speak:["我爱你 wǒ ài nǐ=anh yêu em","给我 gěi wǒ=đưa cho tôi","小猫 xiǎomāo=mèo con","走路 zǒulù=đi bộ","很高兴 hěn gāoxìng=rất vui"]},
 { id:"pzh-nasal", title:"Vận mẫu mũi: an en ang eng ong", sub:"Phân biệt -n và -ng",
   sounds:[
    snd("an","như “an” tiếng Việt","Đọc “a” rồi đầu lưỡi chạm lợi trên để kết thúc bằng “n”.",["三 sān=ba","看 kàn=xem","饭 fàn=cơm","半 bàn=một nửa","难 nán=khó","蓝 lán=màu xanh lam","山 shān=núi","慢 màn=chậm","站 zhàn=nhà ga","安 ān=yên"]),
    snd("en","như “ân” tiếng Việt","Đọc “ơ” ngắn rồi kết thúc bằng “n”.",["人 rén=người","门 mén=cửa","很 hěn=rất","分 fēn=phút","本 běn=quyển","真 zhēn=thật","跟 gēn=với","认 rèn=nhận","身 shēn=thân","笨 bèn=ngốc"]),
    snd("ang","như “ang” tiếng Việt","Mở miệng rộng ở “a”, cuống lưỡi nâng lên kết thúc bằng “ng”.",["忙 máng=bận","上 shàng=lên","汤 tāng=canh","长 cháng=dài","房 fáng=nhà","旁边 pángbiān=bên cạnh","帮 bāng=giúp","唱 chàng=hát","胖 pàng=béo","糖 táng=đường"]),
    snd("eng","như “âng” tiếng Việt","Đọc “ơ” rồi kết thúc bằng “ng”, đầu lưỡi thả xuống.",["冷 lěng=lạnh","灯 dēng=đèn","风 fēng=gió","等 děng=đợi","朋友 péngyou=bạn bè","生 shēng=sinh","能 néng=có thể","城 chéng=thành phố","疼 téng=đau","梦 mèng=giấc mơ"]),
    snd("ong","như “ung” tiếng Việt","Tròn môi, cuống lưỡi nâng lên, kết thúc bằng “ng”.",["中 zhōng=giữa","东 dōng=phía đông","红 hóng=đỏ","同 tóng=cùng","空 kòng=rảnh","懂 dǒng=hiểu","送 sòng=tặng","工 gōng=công việc","龙 lóng=con rồng","冬 dōng=mùa đông"])],
   mistake:"Đọc lẫn -n và -ng: 山 shān (núi) thành 伤 shāng (bị thương). Ở -n đầu lưỡi chạm lợi, ở -ng đầu lưỡi thả xuống và cuống lưỡi nâng lên.",
   pairs:["山 shān|伤 shāng","盆 pén|朋 péng","饭 fàn|放 fàng","陈 chén|城 chéng","冬 dōng|灯 dēng","门 mén|忙 máng"],
   pt:"02 13 02 13 34 12",
   speak:["晚上 wǎnshang=buổi tối","门口 ménkǒu=cửa ra vào","很忙 hěn máng=rất bận","朋友 péngyou=bạn bè","东西 dōngxi=đồ đạc"]},
 { id:"pzh-i", title:"Vần bắt đầu bằng i", sub:"ia ie iao iu ian in iang ing iong",
   sounds:[
    snd("ia","như “ia” đọc liền","Lướt nhanh từ “i” sang “a”.",["家 jiā=nhà","下 xià=xuống","假 jià=kỳ nghỉ","夏 xià=mùa hè","牙 yá=răng","鸭 yā=con vịt","加 jiā=cộng","虾 xiā=con tôm","价 jià=giá","俩 liǎ=hai người"]),
    snd("ie","như “iê” tiếng Việt","Lướt từ “i” sang “ê”.",["谢 xiè=cảm ơn","姐 jiě=chị gái","写 xiě=viết","也 yě=cũng","爷爷 yéye=ông nội","鞋 xié=giày","街 jiē=phố","节 jié=ngày lễ","别 bié=đừng","铁 tiě=sắt"]),
    snd("iao","như “i-ao” đọc liền","Lướt từ “i” sang “ao”.",["小 xiǎo=nhỏ","叫 jiào=gọi","桥 qiáo=cây cầu","票 piào=vé","要 yào=muốn","笑 xiào=cười","鸟 niǎo=con chim","条 tiáo=cái, con (lượng từ)","教 jiāo=dạy","表 biǎo=đồng hồ đeo tay"]),
    snd("iu","như “iêu” tiếng Việt","Viết tắt của iou: lướt từ “i” qua “ô” sang “u”.",["六 liù=sáu","有 yǒu=có","九 jiǔ=chín","牛 niú=bò","球 qiú=quả bóng","留 liú=ở lại","酒 jiǔ=rượu","秋 qiū=mùa thu","修 xiū=sửa","牛奶 niúnǎi=sữa bò"]),
    snd("ian","như “iên” tiếng Việt","Không đọc là “ian”: chữ a ở đây đọc gần “ê”.",["见 jiàn=gặp","钱 qián=tiền","天 tiān=trời","点 diǎn=giờ","面 miàn=mì","边 biān=bên","年 nián=năm","先 xiān=trước","便宜 piányi=rẻ","电视 diànshì=tivi"]),
    snd("in","như “in” tiếng Việt","Đọc “i” rồi kết thúc bằng “n”.",["您 nín=ngài","心 xīn=tim","今 jīn=nay","新 xīn=mới","近 jìn=gần","音乐 yīnyuè=âm nhạc","金 jīn=vàng","林 lín=rừng","信 xìn=lá thư","进 jìn=vào"]),
    snd("iang","như “i-ang” đọc liền","Lướt từ “i” sang “ang”.",["想 xiǎng=nhớ","两 liǎng=hai","讲 jiǎng=giảng","样 yàng=kiểu","墙 qiáng=bức tường","香 xiāng=thơm","江 jiāng=con sông","量 liàng=lượng","亮 liàng=sáng","箱 xiāng=cái hộp"]),
    snd("ing","như “inh” tiếng Việt","Đọc “i” rồi kết thúc bằng “ng”.",["听 tīng=nghe","名 míng=tên","请 qǐng=mời","冰 bīng=băng","英语 Yīngyǔ=tiếng Anh","姓 xìng=họ","星 xīng=ngôi sao","停 tíng=dừng","明天 míngtiān=ngày mai","零 líng=số không"]),
    snd("iong","như “i-ung” đọc liền","Lướt từ “i” sang “ung”.",["用 yòng=dùng","熊 xióng=gấu","穷 qióng=nghèo","兄弟 xiōngdì=anh em","运动 yùndòng=thể thao","游泳 yóuyǒng=bơi","胸 xiōng=ngực","雄 xióng=hùng mạnh","拥抱 yōngbào=ôm","永远 yǒngyuǎn=mãi mãi"])],
   mistake:"Đọc ian thành “ian” hoặc “an”. Trong vần này a đọc gần “ê”: 钱 qián nghe gần như “chiên”.",
   pairs:["心 xīn|星 xīng","林 lín|零 líng","先 xiān|香 xiāng","小 xiǎo|写 xiě","年 nián|娘 niáng","家 jiā|街 jiē"],
   pt:"57 57 46 12 46 01",
   speak:["姐姐 jiějie=chị gái","想你 xiǎng nǐ=nhớ bạn","听音乐 tīng yīnyuè=nghe nhạc","有名 yǒumíng=nổi tiếng","前面 qiánmiàn=phía trước"]},
 { id:"pzh-uv", title:"Vần bắt đầu bằng u và ü", sub:"ua uo uai ui uan un uang üe üan ün",
   sounds:[
    snd("ua","như “oa” tiếng Việt","Tròn môi ở “u” rồi mở ra “a”.",["花 huā=hoa","话 huà=lời nói","瓜 guā=dưa","夸 kuā=khen","画 huà=bức tranh","刷 shuā=chải","挂 guà=treo","抓 zhuā=bắt","耍 shuǎ=chơi đùa","娃娃 wáwa=búp bê"]),
    snd("uo","như “ua” hoặc “uô”","Tròn môi ở “u” rồi chuyển sang “o”.",["多 duō=nhiều","国 guó=nước","我 wǒ=tôi","做 zuò=làm","坐 zuò=ngồi","说 shuō=nói","火 huǒ=lửa","错 cuò=sai","过 guò=qua","果 guǒ=quả"]),
    snd("uai","như “oai” tiếng Việt","Lướt từ “u” qua “a” sang “i”.",["快 kuài=nhanh","外 wài=ngoài","块 kuài=đồng (tiền)","帅 shuài=đẹp trai","怪 guài=lạ","筷子 kuàizi=đôi đũa","坏 huài=hỏng","摔 shuāi=ngã","歪 wāi=lệch","乖 guāi=ngoan"]),
    snd("ui","như “uây” tiếng Việt","Viết tắt của uei: lướt từ “u” qua “ê” sang “i”.",["对 duì=đúng","水 shuǐ=nước","贵 guì=đắt","会 huì=biết","对不起 duìbuqǐ=xin lỗi","岁 suì=tuổi","回 huí=về","腿 tuǐ=cái chân","嘴 zuǐ=miệng","位 wèi=vị (lượng từ)"]),
    snd("uan","như “oan” tiếng Việt","Tròn môi ở “u” rồi mở sang “an”.",["晚 wǎn=muộn","换 huàn=đổi","短 duǎn=ngắn","饭馆 fànguǎn=quán ăn","玩 wán=chơi","酸 suān=chua","关 guān=đóng","船 chuán=con thuyền","软 ruǎn=mềm","算 suàn=tính"]),
    snd("un","như “uân” tiếng Việt","Viết tắt của uen.",["春 chūn=mùa xuân","问 wèn=hỏi","文 wén=chữ, văn","困 kùn=buồn ngủ","准 zhǔn=chuẩn","顺 shùn=thuận","村 cūn=làng","孙子 sūnzi=cháu trai","轮 lún=bánh xe","论 lùn=bàn luận"]),
    snd("uang","như “oang” tiếng Việt","Tròn môi ở “u” rồi mở sang “ang”.",["黄 huáng=vàng","床 chuáng=giường","光 guāng=ánh sáng","王 wáng=vua","网 wǎng=mạng","双 shuāng=đôi","窗 chuāng=cửa sổ","广 guǎng=rộng","忘 wàng=quên","黄瓜 huángguā=dưa chuột"]),
    snd("üe","như “uê” nhưng môi chu tròn","Bắt đầu bằng ü rồi chuyển sang “ê”. Sau j q x y viết là ue.",["学 xué=học","月 yuè=tháng","雪 xuě=tuyết","觉得 juéde=cảm thấy","缺 quē=thiếu","音乐 yīnyuè=âm nhạc","约 yuē=hẹn","越 yuè=càng","确 què=chắc chắn","略 lüè=sơ lược"]),
    snd("üan","như “uyên” tiếng Việt","Bắt đầu bằng ü rồi chuyển sang “an” đọc gần “en”.",["远 yuǎn=xa","选 xuǎn=chọn","元 yuán=đồng (tiền)","圆 yuán=tròn","全 quán=toàn bộ","愿意 yuànyì=sẵn lòng","劝 quàn=khuyên","院 yuàn=viện","卷 juǎn=cuộn","原因 yuányīn=nguyên nhân"]),
    snd("ün","như “uyn” đọc liền","Bắt đầu bằng ü rồi kết thúc bằng “n”.",["云 yún=mây","裙 qún=váy","运动 yùndòng=thể thao","军 jūn=quân đội","裙子 qúnzi=váy","晕 yūn=chóng mặt","群 qún=nhóm","训练 xùnliàn=huấn luyện","均 jūn=đều","寻 xún=tìm"])],
   mistake:"Đọc 学 xué với môi không tròn. Nhớ rằng u sau x là ü: môi phải chu tròn ngay từ đầu.",
   pairs:["说 shuō|书 shū","换 huàn|黄 huáng","晚 wǎn|网 wǎng","学 xué|鞋 xié","远 yuǎn|眼 yǎn","花 huā|哈 hā"],
   pt:"1 46 46 7 8 0",
   speak:["说话 shuōhuà=nói chuyện","快乐 kuàilè=vui vẻ","喝水 hē shuǐ=uống nước","学习 xuéxí=học tập","很远 hěn yuǎn=rất xa"]}
]};
function pItem(str, lang){
  const eq = str.indexOf("=");
  const left = eq < 0 ? str : str.slice(0, eq), v = eq < 0 ? "" : str.slice(eq+1);
  if(lang === "zh"){ const sp = left.indexOf(" "); return {t:left.slice(0, sp), p:left.slice(sp+1), v}; }
  return {t:left, v};
}
/* Mỗi âm là một bài riêng. pt ghi cặp dễ nhầm nào luyện cho âm nào (số thứ tự âm trong nhóm). */
const PRON_GROUPS = {}, PRON = {};
for(const lang of ["en","zh"]){
  PRON_GROUPS[lang] = PRON_RAW[lang];
  PRON[lang] = [];
  PRON_RAW[lang].forEach(g => {
    const pairs = g.pairs.map(p => p.split("|").map(x => pItem(x, lang)));
    const tags = (g.pt || "").split(" ");
    const gspeak = g.speak.map(x => pItem(x, lang));
    g.sounds.forEach((snd0, k) => {
      const ex = snd0.ex.map(e => pItem(e, lang));
      let mine = pairs.filter((_, n) => (tags[n] || "").includes(String(k)));
      if(mine.length < 3) mine = mine.concat(pairs.filter(p => !mine.includes(p))).slice(0, 4);
      PRON[lang].push({
        id: `${g.id}-${k}`, group: g.id, groupTitle: g.title,
        title: snd0.s, sub: snd0.vn, hz: lang === "zh" ? ex[0] : null,
        sounds: [Object.assign({}, snd0, {ex})],
        mistake: g.mistake, pairs: mine,
        speak: lang === "en" ? ex.concat(gspeak.filter(x => x.t.includes(" "))) : gspeak
      });
    });
  });
}
const PSTEP_NAMES = ["Nghe âm","Khẩu hình","Phân biệt","Nói thử"];
