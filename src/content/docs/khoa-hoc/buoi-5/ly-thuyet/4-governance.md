---
title: "Governance: Oversharing & Restricted SharePoint Search"
description: Vì sao Copilot/agent trả lời được cả file "không nên thấy", Restricted SharePoint Search là gì và vì sao quản trị quyền mới là gốc.
---

<span class="item-kind">📖 LÝ THUYẾT · UNIT 4 · ⏱️ ~7 phút</span>

:::note[🎬 Video sẽ cập nhật]
Video giải thích oversharing và cách quản trị sẽ được chèn ở đây.
:::

## Copilot làm lộ ra vấn đề quyền có sẵn

Bạn đã biết: Copilot **chỉ thấy dữ liệu bạn đã có quyền xem**. Nghe thì an toàn — nhưng có một sự thật khó chịu: ở nhiều tổ chức, **quyền đã bị cấp quá rộng từ lâu** mà không ai để ý. Đây gọi là **oversharing**.

Ví dụ điển hình: một thư viện được chia sẻ "cho toàn công ty xem" từ vài năm trước, trong đó lẫn cả file lương, hợp đồng, hay chiến lược chưa công bố. Trước đây không ai tình cờ mở ra, nên vấn đề "ngủ yên". Nhưng khi có Copilot, chỉ một câu hỏi tự nhiên là những file đó **nổi lên trong câu trả lời**.

:::danger[Vì sao agent trả lời được cả file "không nên thấy"?]
Copilot và SharePoint Agent **không phá vỡ phân quyền** — chúng tuân thủ đúng quyền hiện có. Vấn đề là **quyền hiện có vốn đã sai (quá rộng)**. Agent chỉ **làm lộ ra** thứ đáng lẽ đã bị giới hạn từ đầu.

Nói cách khác: Copilot không tạo ra lỗ hổng, nó **chiếu đèn** vào lỗ hổng oversharing đã tồn tại sẵn. Đừng chia sẻ một agent ra diện rộng trước khi rà soát quyền trên nguồn của nó.
:::

## Restricted SharePoint Search — giải pháp *tạm thời*

Trong lúc chưa dọn xong phân quyền, Microsoft cung cấp **Restricted SharePoint Search (RSS)**. Cơ chế:

- Quản trị viên lập một **danh sách site được phép** (allowed list) cho tìm kiếm/Copilot.
- Copilot **chỉ truy vấn các site trong danh sách**; những site còn lại tạm thời bị loại khỏi kết quả.

RSS mua thời gian: chặn nhanh việc lộ dữ liệu diện rộng trong khi đội IT rà soát và sửa quyền.

:::caution[RSS chỉ là "van khóa tạm thời"]
Restricted SharePoint Search **không sửa gốc rễ**. Nó giới hạn phạm vi Copilot chứ không sửa việc quyền bị cấp sai. Nếu chỉ dựa vào RSS, bạn cũng vô tình **chặn cả những nội dung hữu ích** đáng lẽ nên tìm được. Đây là biện pháp cầu nối, không phải đích đến.
:::

## Giải pháp gốc: quản trị quyền

Cách bền vững là **dọn dẹp và quản trị phân quyền**:

- **Rà soát** các chia sẻ diện rộng ("Everyone", "toàn công ty"); thu hẹp về đúng nhóm cần.
- **Gắn nhãn nhạy cảm** (sensitivity labels) cho tài liệu mật; áp chính sách bảo vệ.
- **Định kỳ kiểm tra** quyền truy cập, gỡ chia sẻ thừa.
- Chỉ **mở rộng lại phạm vi Copilot** (bỏ RSS) sau khi quyền đã sạch.

Vai trò của bạn — người dùng nghiệp vụ: **trước khi tạo và chia sẻ một agent**, hãy kiểm tra nguồn của nó có lẫn tài liệu nhạy cảm không, và phối hợp với IT khi thấy dấu hiệu oversharing.

## Ghi nhớ

- **Oversharing**: quyền bị cấp quá rộng sẵn có; Copilot chỉ **làm lộ ra**, không phá quyền.
- **Restricted SharePoint Search** giới hạn Copilot vào danh sách site — **giải pháp tạm thời**.
- Giải pháp gốc là **quản trị quyền**: rà soát chia sẻ, gắn nhãn nhạy cảm, kiểm tra định kỳ.

👉 Tiếp theo: [🧪 Bài Lab →](/khoa-hoc/buoi-5/lab/)
