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

## Việc tiếp theo (chọn khi làm tiếp)
1. **Giao diện điện thoại riêng**: người dùng muốn kiểu khác với bản máy tính, sẽ mô tả sau.
2. Thêm bài Luyện nói (mục tiêu khoảng 10 bài mỗi ngôn ngữ: phỏng vấn, gọi điện, khám bệnh, taxi…).
3. Phần **Học qua truyện**: truyện tranh động theo tình huống, tô sáng từng chữ, chạm để tra từ, nói theo, đóng vai nhân vật.
4. Giọng đọc đồng đều: chuyển sang file âm thanh thu sẵn.
5. Thiết kế logo SFY.

## Lưu ý kỹ thuật
- Nội dung bài học nằm trong biến `LESSONS` (cấu trúc: `lines`, `phrases`, `notes`; tiếng Trung có thêm `p` là bính âm).
- Hàm chấm điểm `evaluate()` so khớp theo từ (tiếng Anh) hoặc theo chữ (tiếng Trung), có hỗ trợ đáp án thay thế qua `alt`.
- Có một bản sao để xem trong Claude (artifact "Study for yourself"). Bản đó dùng tính năng đọc chính tả của Claude thay cho micro.
