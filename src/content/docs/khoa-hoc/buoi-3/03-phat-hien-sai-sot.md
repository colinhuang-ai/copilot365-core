---
title: "Phát hiện sai sót"
description: Dùng Copilot tìm outlier, giá trị bất thường, sai kiểu dữ liệu và công thức lỗi trong bảng tính.
---

<span class="item-kind">📖 LÝ THUYẾT · UNIT 2 · ⏱️ ~7 phút</span>

:::note[🎬 Video sẽ cập nhật]
Video minh họa phát hiện sai sót bằng Copilot sẽ được chèn ở đây.
:::

Dữ liệu sạch về định dạng chưa chắc đã **đúng**. Copilot giúp bạn soi ra những chỗ bất thường mà mắt thường dễ bỏ qua.

## Outlier và giá trị bất thường

Outlier là giá trị lệch hẳn khỏi phần còn lại — có thể là lỗi nhập liệu hoặc điểm đáng chú ý.

```text
Tìm các giá trị bất thường (outlier) trong cột "Doanh thu"
và giải thích vì sao chúng bất thường.
```

```text
Có giá trị nào trong cột "Tuổi" âm hoặc lớn hơn 120 không?
```

## Sai kiểu dữ liệu

Một cột "Số lượng" mà lẫn chữ, hoặc "Ngày" mà có ô là text, sẽ làm sai mọi phép tính.

```text
Kiểm tra cột "Số lượng" xem có ô nào không phải là số không,
liệt kê vị trí các ô đó.
```

```text
Cột "Ngày giao" có ô nào không đúng định dạng ngày tháng không?
```

## Công thức lỗi

```text
Liệt kê các ô đang báo lỗi công thức (#DIV/0!, #N/A, #VALUE!)
và giải thích nguyên nhân từng lỗi.
```

## Dùng "show insights" để soi tổng quan

Tính năng **insights** của Copilot tự động quét bảng và nêu những điểm đáng chú ý — xu hướng, giá trị lệch, phân bố.

```text
Show insights: phân tích bảng này và cho tôi biết
những điểm bất thường hoặc đáng chú ý nhất.
```

:::tip
"Show insights" là điểm khởi đầu tốt khi bạn **chưa biết dữ liệu có vấn đề gì**. Nó gợi ý hướng, sau đó bạn hỏi sâu vào từng điểm.
:::

:::caution
Copilot **phát hiện nghi vấn**, không tự khẳng định đúng/sai. Outlier chưa chắc là lỗi — hãy kiểm tra nguồn gốc trước khi sửa hay xóa.
:::

## Ghi nhớ

- Ba nhóm lỗi thường gặp: **outlier**, **sai kiểu dữ liệu**, **công thức lỗi**.
- **"Show insights"** giúp soi tổng quan khi chưa biết bắt đầu từ đâu.
- Copilot nêu nghi vấn — **bạn xác minh** rồi mới sửa.

