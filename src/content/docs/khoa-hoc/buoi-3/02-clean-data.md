---
title: "Làm sạch dữ liệu"
description: Chuẩn hóa định dạng, tách/gộp cột, xử lý trùng lặp và ô trống bằng câu lệnh tiếng Việt trong Copilot.
---

<span class="item-kind">📖 LÝ THUYẾT · UNIT 1 · ⏱️ ~8 phút</span>

:::note[🎬 Video sẽ cập nhật]
Video minh họa làm sạch dữ liệu bằng Copilot sẽ được chèn ở đây.
:::

Dữ liệu thô thường "bẩn": chữ hoa/thường lẫn lộn, ngày ghi mỗi kiểu, tên gộp trong một ô, dòng trùng, ô trống. Thay vì làm thủ công, hãy **mô tả điều bạn muốn** cho Copilot.

## Chuẩn hóa định dạng

Đồng bộ cách viết trong cột để phân tích chính xác.

```text
Chuẩn hóa cột "Tỉnh/Thành" về dạng viết hoa chữ cái đầu mỗi từ,
xóa khoảng trắng thừa ở đầu và cuối.
```

## Tách và gộp cột

Tách một cột thành nhiều, hoặc ngược lại.

```text
Tách cột "Họ và tên" thành hai cột "Họ" và "Tên".
```

```text
Gộp cột "Quận" và "Thành phố" thành cột "Địa chỉ", ngăn cách bằng dấu phẩy.
```

## Xử lý trùng lặp và ô trống

```text
Tìm và tô màu các dòng bị trùng lặp dựa trên cột "Email".
```

```text
Liệt kê những dòng có ô trống ở cột "Số điện thoại" và "Ngày mua".
```

:::tip
Với dữ liệu quan trọng, hãy yêu cầu Copilot **liệt kê/tô màu** trước khi xóa, để bạn kiểm tra rồi mới quyết định — an toàn hơn là "xóa hết trùng lặp" ngay.
:::

## Chuẩn hóa ngày, số và tiền tệ

```text
Chuyển cột "Ngày mua" về định dạng ngày dd/mm/yyyy.
```

```text
Chuẩn hóa cột "Doanh thu" về dạng số, bỏ ký tự "đ" và dấu chấm ngăn cách,
rồi định dạng lại thành tiền tệ VND.
```

:::caution
Copilot đề xuất thay đổi, nhưng **bạn là người duyệt**. Luôn xem lại kết quả trên vài dòng mẫu trước khi áp dụng cho toàn bảng.
:::

## Ghi nhớ

- Mô tả yêu cầu bằng **ngôn ngữ tự nhiên**, không cần nhớ hàm.
- Ưu tiên **liệt kê/tô màu** trước khi xóa để kiểm tra.
- Chuẩn hóa **định dạng, ngày, số, tiền tệ** giúp phân tích chính xác về sau.

