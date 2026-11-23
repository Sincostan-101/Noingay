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
