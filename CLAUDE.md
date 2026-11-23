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
- Bước “Khẩu hình” của mỗi bài phát âm (104 bài) có video hình vẽ SFY tự làm bằng SVG (mvRenderCard, mvPlay, MV_SHAPES, mvSeq): bên trái là môi nhìn thẳng kiểu ký họa đen trắng (mvLipsInk: nét mực, tô xám, chỉ có môi, răng, lưỡi và bóng dưới môi; vẫn giữ mvLipsReal là bản môi màu), bên phải là ô tròn nhìn vào trong miệng (mvSideLens, mvSideLine), tham khảo cách vẽ của Sounds American, có mũi, không có nếp cằm: vẽ kiểu ký họa đen trắng giống bên trái: nét mực đen, mô xám nhạt, khoang hơi trắng, lưỡi tô xám đậm viền đen, chấm là đường hơi đi (qua miệng hoặc qua mũi), vòng tròn ở cổ là dây thanh, có hai vạch rung khi âm có rung. Dưới ô tròn có nhãn phần đang hoạt động như “đầu lưỡi uốn lên” (lnFocus). Chấm xanh là luồng hơi, gợn sóng ở cổ là dây thanh rung. Tiếng phát cùng lúc với hình (tiếng Anh dùng bản thu Wikimedia, tiếng Trung dùng giọng trình duyệt). Bài thanh điệu tiếng Trung hiện đường cao độ ở bên phải. Bật “Đọc chậm” để xem chậm. Đã thử và bỏ kiểu nhân vật hoạt hình (người dùng thấy không khả thi).

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
