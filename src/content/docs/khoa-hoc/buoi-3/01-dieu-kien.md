---
title: "Điều kiện tiên quyết"
description: Ba điều kiện để Copilot phân tích được file Excel — dữ liệu dạng Table, file trên OneDrive/SharePoint, và bật AutoSave.
---

<span class="item-kind">📖 LÝ THUYẾT · UNIT 0 · ⏱️ ~5 phút</span>

:::note[🎬 Video sẽ cập nhật]
Video hướng dẫn kiểm tra điều kiện tiên quyết sẽ được chèn ở đây.
:::

Trước khi Copilot có thể "hiểu" và phân tích dữ liệu của bạn, file Excel cần thỏa **ba điều kiện**. Thiếu một trong ba, nút Copilot thường bị mờ hoặc trả lời "không phân tích được".

## 1. Dữ liệu phải ở dạng Table

Copilot làm việc tốt nhất khi vùng dữ liệu được chuyển thành **Table** chính thức của Excel, không chỉ là các ô có viền.

- Đặt con trỏ vào vùng dữ liệu.
- Bấm **`Ctrl + T`** (hoặc **Insert → Table**).
- Đảm bảo tick **"My table has headers"** để dòng đầu là tiêu đề cột.

Table giúp Copilot nhận diện đúng cột, kiểu dữ liệu và phạm vi để phân tích.

## 2. File phải nằm trên OneDrive hoặc SharePoint

Copilot cần file được lưu trên **đám mây** (OneDrive for Business hoặc SharePoint), không phải chỉ trên ổ đĩa máy tính.

- File lưu cục bộ (ổ C/D) → Copilot thường **không truy cập được**.
- Lưu lên OneDrive/SharePoint để đồng bộ và cho phép Copilot đọc.

## 3. Bật AutoSave

**AutoSave** (Tự động lưu) phải **bật** (công tắc góc trên bên trái cửa sổ Excel).

- AutoSave chỉ bật được khi file đã ở trên OneDrive/SharePoint (liên quan điều kiện 2).
- Nó đảm bảo Copilot làm việc trên phiên bản mới nhất của dữ liệu.

:::caution[Nếu nút Copilot bị mờ hoặc báo lỗi]
Kiểm tra lần lượt: (1) dữ liệu đã là **Table** (`Ctrl+T`) chưa? (2) file đã ở **OneDrive/SharePoint** chưa? (3) **AutoSave** đã bật chưa? Đủ ba điều kiện thì Copilot mới phân tích được.
:::

## Ghi nhớ

- Ba điều kiện: **Table** + **OneDrive/SharePoint** + **AutoSave**.
- Phím tắt tạo Table nhanh: **`Ctrl + T`**.
- Thiếu điều kiện → nút Copilot mờ hoặc không phân tích được.

