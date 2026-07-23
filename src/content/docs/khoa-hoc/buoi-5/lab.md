---
title: "Bài Lab · Buổi 5"
description: Tạo một SharePoint Agent ("Sales Kit Assistant") và kiểm thử bằng 5 câu hỏi thực tế.
---

<span class="item-kind">🧪 BÀI LAB · ⏱️ ~15 phút</span>

**Mục tiêu:** tạo một **SharePoint Agent** không cần code trên một thư viện tài liệu, rồi **kiểm thử bằng 5 câu hỏi** để đánh giá chất lượng và độ an toàn.

:::note[🎬 Video guide sẽ cập nhật]
Video hướng dẫn Lab từng bước sẽ được chèn ở đây.
:::

:::caution[Trước khi bắt đầu]
Chọn một **thư viện tài liệu SharePoint** bạn có quyền và **không chứa dữ liệu nhạy cảm** (hoặc dùng thư viện mẫu). Đây là môi trường thực hành — hãy tránh nguồn có file mật.
:::

## Bước 1 — Chọn nguồn

1. Mở site SharePoint chứa tài liệu bán hàng (catalogue, bảng giá, case study, mẫu proposal).
2. Xác định **một thư viện** làm nguồn, ví dụ thư viện `Sales Kit`.

## Bước 2 — Tạo agent 1-click

1. Trong thư viện, bấm nút **Copilot** ở góc trên.
2. Chọn **Create an agent** — SharePoint tạo agent lấy cả thư viện làm nguồn.

## Bước 3 — Đặt tên & giới hạn nguồn

1. Bấm **Edit** để chỉnh agent.
2. Đặt tên **"Sales Kit Assistant"**, viết mô tả ngắn về mục đích.
3. Nếu cần, **giới hạn nguồn** vào đúng vài thư mục/file liên quan.
4. Bấm **Save**.

## Bước 4 — Kiểm thử 5 câu hỏi

Mở agent và lần lượt hỏi 5 câu sau, ghi lại câu trả lời và **kiểm tra trích dẫn**:

```text
1. Điểm khác biệt chính giữa gói Standard và gói Premium là gì?
2. Cho tôi case study ngành giáo dục thuyết phục nhất trong kho.
3. Bảng giá mới nhất của dòng học liệu số là bao nhiêu?
4. Mẫu proposal gần nhất dành cho khách hàng doanh nghiệp nằm ở đâu?
5. Mức chiết khấu tối đa cho đơn trên 500 license là bao nhiêu?
```

Với mỗi câu, tự chấm: **(a)** có kèm trích dẫn không? **(b)** nguồn có đúng và mới nhất không? **(c)** agent có trả lời ngoài phạm vi Sales Kit không?

## Bước 5 — Rà soát oversharing rồi mới chia sẻ

1. Xem lại danh sách nguồn agent truy cập được — có lẫn file nào **không nên công khai** không?
2. Nếu an toàn, bấm **Share** và dán agent vào **Teams chat** của nhóm.

:::caution[Kiểm tra oversharing TRƯỚC khi chia sẻ]
Trước khi chia sẻ agent ra nhóm, hãy chắc chắn nguồn của nó **không lẫn tài liệu nhạy cảm**. Chia sẻ agent = mở cửa nguồn cho mọi người trong phạm vi bạn chọn (giới hạn bởi quyền của từng người). Nghi ngờ oversharing → dừng lại và báo IT.
:::

:::tip
Thói quen quan trọng nhất khi làm với agent: **rà nguồn trước, chia sẻ sau**.
:::

👉 Tiếp theo: [✍️ Bài tập →](/khoa-hoc/buoi-5/bai-tap/)
