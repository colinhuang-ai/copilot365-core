---
title: "SharePoint Agents 1-click (không cần code)"
description: Tạo agent hỏi đáp ngay trên thư viện tài liệu SharePoint chỉ bằng vài cú click và chia sẻ qua Teams.
---

<span class="item-kind">📖 LÝ THUYẾT · UNIT 2 · ⏱️ ~7 phút</span>

:::note[🎬 Video sẽ cập nhật]
Video minh họa cách tạo SharePoint Agent sẽ được chèn ở đây.
:::

## SharePoint Agent là gì?

**SharePoint Agent** là một trợ lý AI **gắn với một tập tài liệu cụ thể** (một site hoặc một thư viện). Thay vì hỏi đáp trên toàn bộ kho, agent chỉ trả lời dựa trên **đúng nguồn bạn chỉ định** — rất hợp để tạo "chuyên gia" cho một chủ đề: kit bán hàng, sổ tay quy trình, tài liệu onboarding…

Điểm mạnh nhất: **tạo bằng 1-click, không cần code**. Bạn không cần Copilot Studio hay kỹ năng lập trình cho trường hợp cơ bản này.

## Tạo agent từ thư viện tài liệu

Quy trình chung (không cần code):

1. Mở **site SharePoint** hoặc **thư viện tài liệu** chứa nội dung nguồn.
2. Bấm nút **Copilot** ở góc trên, chọn **Create an agent** (Tạo agent).
3. SharePoint tự tạo một agent lấy **cả thư viện hiện tại làm nguồn**.
4. (Tùy chọn) Mở **Edit** để **đặt tên**, viết mô tả, và **giới hạn nguồn** vào đúng vài thư mục/file mong muốn.
5. **Save** — agent sẵn sàng dùng.

### Ví dụ: "Sales Kit Assistant"

Giả sử thư viện `Sales Kit` chứa: catalogue, bảng giá, case study, kịch bản demo, mẫu proposal. Tạo agent tên **"Sales Kit Assistant"** trỏ vào đúng thư viện này. Giờ cả team sales có thể hỏi:

```text
Điểm khác biệt chính giữa gói Standard và gói Premium là gì?
```

```text
Cho tôi mẫu proposal mới nhất cho khách hàng ngành giáo dục.
```

Agent chỉ trả lời dựa trên tài liệu trong `Sales Kit`, nên câu trả lời **tập trung và ít nhiễu** hơn hỏi đáp toàn kho.

## Chia sẻ agent qua Teams

Sau khi tạo, bạn có thể **chia sẻ agent như chia sẻ một file**:

1. Mở agent, bấm **Share**.
2. Sao chép link, hoặc chọn **thêm vào Teams**.
3. Dán vào **Teams chat** (kênh nhóm hoặc chat 1-1) — thành viên bấm vào là dùng được ngay trong Teams, không cần rời ứng dụng.

:::tip[Đưa trợ lý đến nơi mọi người làm việc]
Chia sẻ agent vào đúng **kênh Teams của nhóm sales** giúp trợ lý trở thành một phần của luồng công việc hằng ngày, thay vì một công cụ ai đó phải nhớ mở.
:::

:::caution[Người dùng vẫn chịu ràng buộc phân quyền]
Khi người khác dùng agent, họ **chỉ thấy nội dung họ đã có quyền xem**. Nhưng nếu quyền trên thư viện bị cấp quá rộng, agent có thể vô tình phơi bày tài liệu nhạy cảm — chủ đề sẽ bàn kỹ ở Unit 4.
:::

## Ghi nhớ

- SharePoint Agent = trợ lý gắn với **một thư viện/site cụ thể**, tạo **1-click, không code**.
- Đặt tên, mô tả, **giới hạn nguồn** để agent tập trung (ví dụ "Sales Kit Assistant").
- **Chia sẻ qua Teams** để đưa agent vào luồng làm việc của cả nhóm.

👉 Tiếp theo: [3 · Tạo & rewrite trang SharePoint →](/khoa-hoc/buoi-5/ly-thuyet/3-tao-trang/)
