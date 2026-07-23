---
title: "Bài Lab · Buổi 3"
description: Thực hành pipeline dữ liệu Excel với Copilot — từ dữ liệu thô đến làm sạch, phát hiện lỗi, KPI, biểu đồ và Python.
---

<span class="item-kind">🧪 BÀI LAB · ⏱️ ~15 phút</span>

**Mục tiêu:** đi trọn một **pipeline dữ liệu** với Copilot: dữ liệu thô → làm sạch → phát hiện lỗi → tạo cột KPI → biểu đồ/PivotTable → (nâng cao) Python.

:::note[🎬 Video guide sẽ cập nhật]
Video hướng dẫn Lab từng bước sẽ được chèn ở đây.
:::

:::caution[Trước khi bắt đầu — kiểm tra điều kiện tiên quyết]
Nếu Copilot **không phân tích được** (nút mờ, báo lỗi), kiểm tra lại: (1) dữ liệu đã là **Table** (`Ctrl+T`)? (2) file đã ở **OneDrive/SharePoint**? (3) **AutoSave** đã bật? Xem lại [Unit 0 · Điều kiện tiên quyết](/khoa-hoc/buoi-3/01-dieu-kien/).
:::

Dùng một file bán hàng thật của bạn, hoặc tự tạo bảng mẫu ~30–50 dòng gồm các cột: `Ngày đặt`, `Khu vực`, `Nhân viên`, `Sản phẩm`, `Số lượng`, `Đơn giá`.

## Bước 1 — Chuẩn bị Table

1. Đặt con trỏ vào vùng dữ liệu, bấm **`Ctrl + T`**, tick **"My table has headers"**.
2. Lưu file lên **OneDrive/SharePoint** và bật **AutoSave**.
3. Mở **Copilot** trong Excel (nút Copilot trên thanh Home).

## Bước 2 — Làm sạch dữ liệu

1. Nhập prompt:
   ```text
   Chuẩn hóa cột "Khu vực" về viết hoa chữ cái đầu, xóa khoảng trắng thừa.
   Chuyển cột "Ngày đặt" về định dạng dd/mm/yyyy.
   ```
2. Kiểm tra trùng lặp:
   ```text
   Tìm và tô màu các dòng trùng lặp dựa trên toàn bộ các cột.
   ```
3. Duyệt kết quả trên vài dòng trước khi áp dụng.

## Bước 3 — Phát hiện lỗi

1. Nhập:
   ```text
   Kiểm tra cột "Số lượng" và "Đơn giá" xem có ô nào không phải số,
   âm, hoặc trống. Liệt kê vị trí.
   ```
2. Chạy insights tổng quan:
   ```text
   Show insights: nêu những điểm bất thường đáng chú ý nhất trong bảng.
   ```

## Bước 4 — Tạo cột KPI

1. Nhập:
   ```text
   Thêm cột "Thành tiền" bằng "Số lượng" nhân "Đơn giá".
   ```
2. Thêm phân loại:
   ```text
   Thêm cột "Xếp loại đơn": "Thành tiền" >= 10 triệu ghi "Lớn",
   còn lại ghi "Thường".
   ```
3. Kiểm chứng công thức trên 2–3 dòng bạn tự tính được.

## Bước 5 — Biểu đồ và PivotTable

1. Tạo biểu đồ:
   ```text
   Tạo biểu đồ cột tổng "Thành tiền" theo "Khu vực".
   ```
2. Tạo PivotTable:
   ```text
   Tạo PivotTable tổng "Thành tiền" theo "Nhân viên" (dòng)
   và "Khu vực" (cột), sắp xếp giảm dần.
   ```

## Bước 6 (nâng cao) — Python in Excel

1. Nếu tài khoản có Python in Excel, thử:
   ```text
   Dùng Python in Excel để tính tương quan giữa "Số lượng" và "Thành tiền",
   vẽ biểu đồ phân tán và giải thích kết quả bằng tiếng Việt.
   ```
2. Kiểm chứng: con số có hợp lý với biểu đồ không?

:::tip
Ghi lại: ở bước nào Copilot cần bạn **tinh chỉnh lại prompt** nhiều nhất? Đó là kỹ năng bạn nên luyện thêm.
:::

