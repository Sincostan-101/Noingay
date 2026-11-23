# Study for yourself (SFY): ghi chú dự án

Web học **giao tiếp** ngoại ngữ cho người Việt. Bắt đầu với **Luyện nói** (tiếng Anh + tiếng Trung), sau đó mở rộng sang các phần khác.

- Web chạy tại: https://sincostan-101.github.io/Noingay/ (GitHub Pages, nhánh `gh-pages`, thư mục gốc)
- Toàn bộ web nằm trong một file `index.html` (HTML + CSS + JS, không cần máy chủ).
- Mỗi lần sửa xong: commit lên nhánh `gh-pages` là web tự cập nhật sau khoảng 1 phút.

## Định hướng sản phẩm
- Học **giao tiếp trước**, ngữ pháp và kiến thức học thuật **sau** (phần "Vì sao nói vậy?" chỉ mở khi đã đóng vai xong).
- Ngôn ngữ đầu tiên: **tiếng Anh** và **tiếng Trung**. Làm tốt rồi mới thêm ngôn ngữ khác.
- Đối tượng: người muốn **nói được ngoại ngữ** trong tình huống thật.
- Đối thủ đã phân tích: Baolingo (truyện tiếng Trung có tranh tĩnh, nặng HSK), Corodomo (học qua video thật, khó với người mới). Hướng của mình: truyện tình huống đời thường theo dạng phim dài kỳ, nhân vật cố định, có đóng vai; cùng một bộ truyện dịch ra nhiều ngôn ngữ.

## Đã làm (tính đến 14/11/2026)
- 10 bài Luyện nói (5 Anh, 5 Trung): làm quen, gọi món, hỏi đường/mặc cả, mua sắm, khách sạn.
- Mỗi bài có 4 bước: Nghe hội thoại → Câu then chốt (micro chấm điểm) → Đóng vai → Vì sao nói vậy?
- Đọc to bằng giọng của trình duyệt, có ô **chọn giọng đọc**. Nhận giọng nói bằng Web Speech API. Ai không dùng được micro thì gõ câu trả lời (tiếng Trung gõ chữ Hán hoặc bính âm không dấu).
- Lưu tiến độ, lựa chọn giọng đọc và chế độ sáng/tối trong localStorage.
- Giao diện:
  - Tên web **Study for yourself**, logo tạm là ô chữ **SFY** (logo thật sẽ thiết kế sau, dựa trên 3 chữ SFY).
  - Màu: nền **trắng ngả vàng** (#faf1d9), các ô và nút **xanh lá nhạt**. Có nút **Ban đêm** (nền tối xanh rêu). Đã chặn trình duyệt tự ép chế độ tối.
  - Thanh trên cùng: logo bên trái, tên phần học ("Luyện nói") ở giữa, chọn ngôn ngữ và nút Ban đêm bên phải.
  - **Mục lục** (› MỤC LỤC) nằm dưới logo, bấm vào thì mở **theo hàng ngang** với hiệu ứng sóng. Mục lục không đẩy và không đè lên nội dung. Gồm: Luyện nói, Học qua truyện, Luyện nghe, Từ vựng, Ngữ pháp (các mục sau đang "Sắp có").
  - Nội dung (tiêu đề, giới thiệu, lưới bài học 2 cột) căn giữa màn hình.

## Đợt 2 (23/11/2026)
- Thêm 20 bài giao tiếp trình độ A2–B1 mỗi thứ tiếng (tiếng Trung khoảng HSK 3–4), xếp thành chặng 7–11 (phần 2 · Tiền trung cấp). Tổng cộng 40 bài giao tiếp cơ bản mỗi thứ tiếng.
- Chủ đề: rủ rê/từ chối, xin lỗi vì muộn, khen/chúc mừng, an ủi; kể chuyến du lịch, ngày xui xẻo, nói về phim, so sánh khi mua; đặt bàn, phàn nàn món ăn, báo hỏng đồ, gửi bưu kiện; làm thủ tục sân bay, chuyến bay hoãn, đặt tour, thuê xe; hiệu thuốc, cắt tóc, đến nhà bạn ăn cơm, nhờ hàng xóm.
- Mỗi bài 16 từ vựng có nhãn cấp độ (Oxford 3000/5000 CEFR, HSK 3.0). IPA mới lấy từ CMUdict, đổi sang kiểu IPA Anh của web.
- Sửa lỗi tách bính âm: âm tiết giữa từ không được bắt đầu bằng nguyên âm (trước đây "niúròu" bị tách thành "niúr òu", "kěnéng" thành "kěn éng"…). Sửa được 105 chỗ hiển thị sai trong bài cũ.

## Video khẩu hình (23/11/2026)
- Bước “Khẩu hình” của mỗi bài phát âm (104 bài) có video hình vẽ SFY tự làm bằng SVG (mvRenderCard, mvPlay, MV_SHAPES, mvSeq): bên trái là môi nhìn thẳng kiểu ký họa đen trắng (mvLipsInk: nét mực, tô xám, chỉ có môi, răng, lưỡi và bóng dưới môi; vẫn giữ mvLipsReal là bản môi màu), bên phải là ô tròn nhìn vào trong miệng (mvSideLens, mvSideLine), tham khảo cách vẽ của Sounds American, có mũi, không có nếp cằm: màu và bố cục gần giống Sounds American: mô xám #eee viền #4c4c4c, khoang hơi trắng, lưỡi trắng viền đỏ #ce4c4c, chấm xám mờ là đường hơi đi (qua miệng hoặc qua mũi), vòng tròn ở cổ là dây thanh, có hai vạch đỏ rung khi âm có rung. Dưới ô tròn có nhãn phần đang hoạt động như “đầu lưỡi uốn lên” (lnFocus). Chấm xanh là luồng hơi, gợn sóng ở cổ là dây thanh rung. Tiếng phát cùng lúc với hình. Tiếng Anh có nút chọn “Âm gốc (bản thu)” (bản thu Wikimedia, giọng cố định, không đổi theo ô Giọng đọc) hoặc “Giọng đọc đã chọn” (giọng máy đọc từ ví dụ đầu tiên, vì giọng máy không đọc được âm đứng riêng); lưu ở store.prefs.mvSrc. Tiếng Trung luôn dùng giọng đã chọn. Bài thanh điệu tiếng Trung hiện đường cao độ ở bên phải. Bật “Đọc chậm” để xem chậm. Đã thử và bỏ kiểu nhân vật hoạt hình (người dùng thấy không khả thi).

## Việc tiếp theo (chọn khi làm tiếp)
0. Hệ thống tài khoản người dùng + máy chủ cho web, rồi mới làm bảng xếp hạng chung và đồng bộ tiến độ giữa các máy.
1. **Giao diện điện thoại riêng**: người dùng muốn kiểu khác với bản máy tính, sẽ mô tả sau.
2. Thêm bài Luyện nói (mục tiêu khoảng 10 bài mỗi ngôn ngữ: phỏng vấn, gọi điện, khám bệnh, taxi…).
3. Phần **Học qua truyện**: truyện tranh động theo tình huống, tô sáng từng chữ, chạm để tra từ, nói theo, đóng vai nhân vật.
4. Giọng đọc đồng đều: chuyển sang file âm thanh thu sẵn.
5. Thiết kế logo SFY.

## Lưu ý kỹ thuật
- Nội dung bài học nằm trong biến `LESSONS` (cấu trúc: `lines`, `phrases`, `notes`; tiếng Trung có thêm `p` là bính âm).
- Hàm chấm điểm `evaluate()` so khớp theo từ (tiếng Anh) hoặc theo chữ (tiếng Trung), có hỗ trợ đáp án thay thế qua `alt`.
- Có một bản sao để xem trong Claude (artifact "Study for yourself"). Bản đó dùng tính năng đọc chính tả của Claude thay cho micro.

## Giữ chỗ khi tải lại trang
- Trang đang mở được ghi lên địa chỉ dạng #phần/bài/bước (ví dụ #pron/pen-iu-3/1, #speak/zh-delay/2). Tải lại (F5) thì mở lại đúng trang đó (đối tượng Route, gọi Route.save() đầu hàm render, Route.restore() trước lần render đầu). Mỗi lần chuyển trang thêm một mục lịch sử (pushState), nên nút Back/Forward của trình duyệt đi lùi/tới trong web (sự kiện popstate) thay vì thoát ra.
- Phần Phát âm: mỗi âm có 10 từ ví dụ (cả tiếng Anh và tiếng Trung), hiện đủ ở bước Nghe âm và bước Khẩu hình. IPA của từ mới lấy từ CMUdict; bính âm đã kiểm tra khớp từng chữ.
- Từ ví dụ trong phần Phát âm đọc chậm hơn bình thường (tốc độ 0.5, bật “Đọc chậm” thì 0.25; giọng Microsoft trên Windows nén thang tốc độ nên phải đặt thấp mới nghe rõ chậm), các phần khác vẫn 0.95 / 0.7.

## Từ vựng theo chủ đề và bảng xếp hạng (23/11/2026)
- Mục Từ vựng (section "vocab") đã mở: 20 chủ đề, mỗi chủ đề ~47–48 từ cơ bản + 12 từ nâng cao, cho tiếng Anh và tiếng Trung (~1.200 từ mỗi thứ tiếng). Chủ đề theo English Vocabulary in Use và giáo trình chuẩn HSK/Hán ngữ; nhãn cấp độ theo Oxford 3000/5000 và HSK 3.0; bính âm tự lấy từ dữ liệu pypinyin và chỉnh tay thanh nhẹ, đa âm.
- Dữ liệu: VT_RAW (sinh từ vt_en.txt, vt_zh.txt khi build), VT_TOPICS. Code: renderVT, renderVTTopic, renderVTRank, vtAct. Học bằng Danh sách / Thẻ ghi nhớ / Kiểm tra (10 câu, 4 lựa chọn). Từ vựng theo bài học cũ vẫn xem được qua link "Từ vựng theo bài học".
- Điểm: thẻ ghi nhớ +2 XP mỗi từ mới nhớ, kiểm tra +10 XP mỗi câu đúng. Lưu trong store.vocab (known, xp, days, badges, name, uid). Có cấp độ, chuỗi ngày, 8 huy hiệu, bảng các tuần, lưới 28 ngày.
- Bảng xếp hạng chung: HOÃN LẠI theo quyết định của chủ dự án (23/11/2026). Sẽ làm sau khi có hệ thống tài khoản người dùng và máy chủ riêng cho web; khi đó nối Board vào máy chủ đó thay vì Supabase. Code khung hiện có: đối tượng Board, dùng Supabase REST. Chưa bật: điền BOARD_CFG = {url:"https://xxx.supabase.co", key:"anon key"}. Bảng cần tạo:
  create table sfy_board (uid text primary key, name text, xp int, week text, week_xp int, updated_at timestamptz default now());
  alter table sfy_board enable row level security;
  create policy "read" on sfy_board for select using (true);
  create policy "write" on sfy_board for insert with check (true);
  create policy "update" on sfy_board for update using (true);
- Địa chỉ trang: #vocab, #vocab/<chủ đề>, #vocab/rank.

## Thành tựu (23/11/2026)
- Mục "Thành tựu" (section "achieve", có trong Mục lục). Mỗi phần học (Phát âm, Giao tiếp cơ bản, Giao tiếp công việc, Từ vựng) × mỗi thứ tiếng có: bài đầu tiên, 30%, 60% (thành tựu nhỏ: huy chương đồng/bạc) và 100% (thành tựu lớn: cúp vàng, tia sáng xoay, nguyệt quế, lấp lánh). Thêm 3 thành tựu huyền thoại: Bậc thầy tiếng Anh, Bậc thầy tiếng Trung, Song ngữ toàn năng.
- Code: ACH_SECS (cách tính tiến độ từng phần), ACH_LIST, achCheck() (gọi sau mỗi lần render, có trễ 120ms), achShowNext() (thành tựu lớn hiện hộp chúc mừng có pháo giấy, thành tựu nhỏ hiện thông báo góc dưới), achBigIcon/achSmallIcon (SVG), renderAchieve(). Lưu ở store.ach; lần đầu chạy chỉ ghi nhận im lặng (store.achInit).
- Bài phát âm tính là xong khi đủ 4 bước; bài giao tiếp tính là xong khi đủ 3 bước nghe, câu then chốt, đóng vai. Khi làm Luyện nghe / Học qua truyện thì thêm vào ACH_SECS.

## Chọn ngôn ngữ ở trang chủ (23/11/2026)
- Bộ chọn ngôn ngữ đã chuyển từ thanh đầu trang xuống trang chủ, thay cho dòng giới thiệu dưới lời chào: các thẻ ngôn ngữ theo danh sách LANGS (id, tên, tên gốc, ký hiệu, màu, ready). Đã có tiếng Anh, tiếng Trung; tiếng Nhật, tiếng Hàn đang hiện "Sắp có". Thêm ngôn ngữ mới: thêm vào LANGS và làm dữ liệu bài học cho id đó.
- Chỗ cũ trên thanh đầu trang giờ là nút "Thành tựu" (cúp + số thành tựu đã đạt), mở mục Thành tựu.

## Hồ sơ (24/11/2026)
- Mục "Hồ sơ" (section "profile") thay cho mục "Thành tựu" trong Mục lục và thay nút Thành tựu trên thanh đầu trang (nút Hồ sơ: ô chữ cái đầu của tên + số thành tựu đã đạt).
- Đầu trang Hồ sơ: ảnh đại diện chữ cái, tên hiển thị (sửa ngay tại đây, lưu ở store.vocab.name), 4 số: thành tựu, XP · cấp, chuỗi ngày, huy hiệu. Dưới là 2 thẻ: Thành tựu (renderAchieve) và Bảng xếp hạng (renderVTRank). Code: renderProfile(), profInitial(), ui.prof = "ach" | "rank", action "proftab".
- Các nút "Bảng xếp hạng" trong mục Từ vựng đổi thành "👤 Hồ sơ" (action vtrank, mở Hồ sơ ở thẻ Bảng xếp hạng).
- Địa chỉ: #profile, #profile/rank. Link cũ #achieve và #vocab/rank tự chuyển sang Hồ sơ.

## Cài đặt và ngôn ngữ giao diện (24/11/2026)
- Nút ⚙️ Cài đặt ở góc phải thanh đầu trang (setgHtml, SETG_ITEMS, action setgopen/setg/uilang): ngôn ngữ giao diện, hiệu ứng lá, ban đêm, đọc chậm, nghĩa tiếng Việt, IPA, bính âm. Ô hiệu ứng lá cuối trang chủ đã bỏ. Mục lục không còn Lịch và Hồ sơ (đã có nút trên thanh đầu trang).
- Ngôn ngữ giao diện: Tiếng Việt (mặc định), English, 中文, lưu ở store.prefs.ui. Code viết giao diện bằng tiếng Việt; khi chọn ngôn ngữ khác, I18N (MutationObserver trên body) thay chữ trên màn hình theo I18N_DICT (khớp nguyên đoạn chữ) và I18N_RX (đoạn có số/tên). Thêm chữ giao diện mới thì thêm vào I18N_DICT: "tiếng Việt": ["English", "中文"].
- Chưa dịch: nội dung bài học (tên bài, tình huống, nghĩa câu/từ, mô tả âm, giải thích).
- Nút quay lại (.pback) và thanh tùy chọn (.prail) của bài học: placeBack() đặt nút dưới logo và xếp tùy chọn thành cột dọc bên trái khi đủ chỗ; không đủ thì chia trang 2 cột (.has-rail); điện thoại giữ hàng ngang.

## Sổ từ vựng và tra từ (24/11/2026)
- Sổ từ vựng: mục Từ vựng → ô "📒 Sổ từ vựng của bạn" (địa chỉ #vocab/notebook, renderNotebook, nbAct, NB). Gõ từ → tự tra (chờ 0,7 giây hoặc Enter) → "Lưu vào sổ". Lưu ở store.notebook: t, p, ipa, v, alts, defs, lv, audio, at, known. Lọc Tất cả / Đang học / Đã thuộc.
- Tra từ (Dict.lookup): dữ liệu có sẵn trong web trước (nghĩa, bính âm, cấp độ) + IPA từ CMUdict; trên mạng: Google Dịch bản miễn phí (translate.googleapis.com client=gtx: nghĩa, từ loại, bính âm), dự phòng MyMemory; tiếng Anh thêm Free Dictionary API (dictionaryapi.dev: định nghĩa, ví dụ, file phát âm). Google Dịch bản miễn phí không chính thức, có thể bị chặn bất cứ lúc nào; khi đó cân nhắc API có khóa.
- Bảng tra nhanh (WordPop): bấm một từ tiếng Anh trong câu (nút .w) hoặc một chữ Hán (.rb-c), hoặc bôi đen chữ trong phần nội dung → 🔍 Tra từ · 🌐 Dịch · ＋ Lưu vào sổ. Bôi đen tiếng Việt thì chỉ có Dịch (sang ngôn ngữ đang học).
- Chủ đề tự đặt trong sổ (24/11/2026): store.nbTopics [{id, name, lang}], mỗi từ có topics [id]. Tạo/đổi tên/xoá chủ đề ngay trong trang sổ (xoá chủ đề không xoá từ). Tích ô vuông để chọn từ → thanh "Đã chọn n từ": thêm vào chủ đề, bỏ khỏi chủ đề, kiểm tra/ôn các từ đã chọn.
- Ôn và kiểm tra chỉ dùng từ trong sổ (nbStart, renderNbStudy): 🎲 kiểm tra ngẫu nhiên (5/10/20/tất cả câu, lấy theo chủ đề và bộ lọc đang xem) hoặc kiểm tra các từ đã chọn; thẻ ghi nhớ. Câu hỏi xen kẽ hỏi nghĩa của từ và hỏi từ theo nghĩa; phương án sai lấy từ các từ khác trong sổ, thiếu thì lấy thêm từ có sẵn trong web. Đúng +10 XP, thẻ "Đã nhớ" +2 XP. Mỗi từ ghi số lần đúng/sai (ok, bad). Có nút kiểm tra lại các từ sai.
- Nút "Lưu vào sổ ▾" (ở ô tra từ trong sổ và bảng tra nhanh) mở bảng chọn nơi lưu (saveMenu, nbSaveTo): Sổ từ vựng (chưa xếp chủ đề), từng chủ đề đã tạo, hoặc gõ tên để tạo chủ đề mới và lưu luôn. Từ đã có trong sổ thì nút thành "📁 Thêm vào chủ đề ▾".

## Đọc báo (24/11/2026)
- Mục "Đọc báo" (section "news", #news, #news/<id>, #news/paste): renderNews, renderNewsArticle, renderNewsPaste, newsAct. Dữ liệu NEWS: 6 bài tiếng Anh (A2–B2) và 6 bài tiếng Trung (HSK 2–5) do SFY tự viết theo phong cách tin tức (ghi rõ không phải tin thật).
- Người học có thể dán bài báo tự tìm (lưu store.news.mine, tối đa 30 bài). store.news.read ghi bài đã đọc.
- Trong bài: mỗi từ là span.rw (data-act="rword"), bấm → WordPop (tra từ, dịch, lưu vào sổ); tiếng Trung tách từ bằng Intl.Segmenter. Bôi đen câu → Dịch. Đã bỏ nút đọc/dịch từng đoạn (24/11), chỉ còn ghi chú ngắn; cột trái: "Song ngữ" chia đôi màn hình, bên trái bản gốc, bên phải bản dịch, xếp thẳng hàng theo từng đoạn (news-row). Đã bỏ "Đọc cả bài", Đọc chậm và Giọng đọc: Đọc báo chỉ để luyện đọc; phần nghe sẽ làm riêng kiểu podcast.

## Thanh đầu trang (24/11/2026)
- Chỉ ở trang chủ, trên máy tính (rộng hơn 860px): nút Lịch đứng ngay cạnh logo, nút Mục lục nằm ngay dưới logo (.is-home .brand .side position:absolute; menuClear() đẩy nội dung xuống nếu bị đè). Các trang khác và điện thoại giữ như cũ: logo, Mục lục, Lịch xếp một hàng.

## Lịch sử học (24/11/2026)
- Cài đặt: đã bỏ "Đọc chậm" và "Chế độ ban đêm" (ban đêm vẫn có nút riêng trên thanh đầu trang; đọc chậm vẫn bật được trong cột tùy chọn của bài). Thêm mục "Lịch sử học" → trang #history (section "history", không hiện trong Mục lục và ô trang chủ).
- Hist.add ghi: mở bài phát âm/giao tiếp, mở chủ đề từ vựng, làm xong kiểm tra từ vựng / kiểm tra sổ, mở bài báo, lưu từ vào sổ, đạt thành tựu. Lưu store.hist (tối đa 300; cùng bài mở lại trong ngày thì chỉ cập nhật giờ). Trang lịch sử: số ngày có học, số hoạt động, cột 7 ngày, lọc theo loại, bấm để học tiếp, xoá lịch sử (bấm 2 lần).
