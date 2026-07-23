---
title: "Hỏi đáp trên SharePoint & OneDrive"
description: Dùng Copilot Chat (Work tab) hỏi đáp trên kho tài liệu nội bộ và thu hẹp phạm vi bằng tham chiếu site/file.
---

<span class="item-kind">📖 LÝ THUYẾT · UNIT 1 · ⏱️ ~7 phút</span>

:::note[🎬 Video sẽ cập nhật]
Video minh họa cách hỏi đáp trên SharePoint/OneDrive sẽ được chèn ở đây.
:::

## Kho tri thức nội bộ là "bộ não thứ hai"

SharePoint và OneDrive là nơi tổ chức lưu phần lớn tài liệu: case study, bảng giá, hợp đồng mẫu, quy trình, tài liệu đào tạo… Với **Copilot Chat (Work tab)**, bạn không còn phải nhớ "file đó nằm ở đâu" — chỉ cần **hỏi bằng ngôn ngữ tự nhiên**, Copilot tìm và tổng hợp giúp bạn, kèm **trích dẫn** về đúng tài liệu gốc.

Điều kiện quan trọng: bạn phải ở tab **Work** (dùng dữ liệu tổ chức), và Copilot **chỉ thấy những gì bạn đã có quyền xem**.

## Hỏi đáp không thu hẹp phạm vi

Bắt đầu với câu hỏi rộng, để Copilot tự tìm khắp kho tài liệu bạn có quyền truy cập:

```text
Tìm cho tôi các case study trong ngành giáo dục mà công ty đã triển khai,
liệt kê tên khách hàng, kết quả nổi bật và link tài liệu gốc.
```

```text
Bảng giá mới nhất của dòng sản phẩm học liệu số là bao nhiêu?
Trích dẫn file và ngày cập nhật.
```

Copilot sẽ trả về câu trả lời tổng hợp kèm **danh sách nguồn**. Luôn bấm vào trích dẫn để xác nhận đúng tài liệu và đúng phiên bản.

## Thu hẹp phạm vi (scope) bằng tham chiếu `/`

Khi câu hỏi quá rộng hoặc kết quả lẫn nhiều tài liệu không liên quan, hãy **thu hẹp phạm vi**. Trong Copilot Chat, gõ dấu **`/`** để mở trình chọn — bạn có thể tham chiếu trực tiếp đến **một file**, **một site SharePoint**, hoặc **một thư viện** cụ thể.

```text
/ (chọn site "Sales - Education") 
Tổng hợp 3 case study ngành giáo dục thuyết phục nhất để đưa vào proposal.
```

```text
/ (chọn file "Bảng giá 2026.xlsx")
Mức chiết khấu tối đa cho đơn hàng trên 500 license là bao nhiêu?
```

:::tip[Rộng rồi hẹp]
Bắt đầu **rộng** để xem kho có gì; khi đã biết tài liệu/site đúng, **hẹp lại** bằng `/` để câu trả lời chính xác và nhanh hơn — đồng thời giảm nguy cơ Copilot lấy nhầm tài liệu cũ.
:::

:::caution[Kiểm chứng qua trích dẫn]
Câu trả lời tổng hợp có thể trộn thông tin từ nhiều phiên bản file. **Luôn mở trích dẫn** để chắc chắn dùng đúng bảng giá / đúng case study mới nhất.
:::

## Ghi nhớ

- Copilot Chat (Work tab) hỏi đáp trên **SharePoint/OneDrive**, kèm **trích dẫn**.
- Copilot **chỉ thấy dữ liệu bạn đã có quyền xem**.
- Gõ **`/`** để **thu hẹp phạm vi** về đúng site/file — chính xác hơn, nhanh hơn.

