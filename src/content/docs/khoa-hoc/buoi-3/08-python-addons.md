---
title: "Python in Excel & add-ons"
description: Phân tích nâng cao (tương quan, dự báo, phân cụm) với Python in Excel mà không cần biết code, và giới thiệu Office Scripts.
---

<span class="item-kind">📖 LÝ THUYẾT · UNIT 5 · ⏱️ ~9 phút</span>

:::note[🎬 Video sẽ cập nhật]
Video minh họa phân tích nâng cao với Python in Excel sẽ được chèn ở đây.
:::

Khi bài toán vượt quá công thức và PivotTable thông thường — cần **thống kê nâng cao, dự báo, phân cụm** — Copilot có thể viết hộ **Python in Excel**. Bạn mô tả mục tiêu, Copilot sinh code chạy ngay trong bảng tính.

## Python in Excel là gì?

Python in Excel cho phép chạy code Python **ngay trong ô** (qua hàm `=PY(...)`), dùng các thư viện phân tích mạnh (pandas, matplotlib…). Điểm hay: **bạn không cần biết viết Python** — Copilot lo phần code.

## Những phân tích nâng cao Copilot làm được

### Phân tích tương quan

```text
Dùng Python in Excel để tính mức độ tương quan giữa "Chi phí quảng cáo"
và "Doanh thu", và vẽ biểu đồ phân tán minh họa.
```

### Dự báo (forecast)

```text
Dùng Python in Excel để dự báo doanh thu 3 tháng tới
dựa trên dữ liệu 12 tháng gần nhất, kèm biểu đồ xu hướng.
```

### Phân cụm (clustering)

```text
Dùng Python in Excel để phân nhóm khách hàng thành các cụm
dựa trên "Tần suất mua" và "Giá trị đơn trung bình", và mô tả từng nhóm.
```

:::tip
Hãy yêu cầu Copilot **giải thích kết quả bằng tiếng Việt**, không chỉ đưa số: "cho tôi biết con số tương quan này nói lên điều gì cho việc kinh doanh".
:::

## Office Scripts và macro

Khi bạn cần **tự động hóa lặp lại** (mỗi tuần làm cùng một chuỗi thao tác), Copilot có thể viết hộ **Office Scripts** — đoạn script tự động chạy trên Excel web/desktop.

```text
Viết một Office Script làm sạch cột "Ngày", xóa dòng trống,
rồi tạo PivotTable doanh thu theo khu vực — để tôi chạy lại mỗi tuần.
```

Office Scripts là bản kế nhiệm hiện đại của **macro VBA**, dễ chia sẻ và chạy trên đám mây hơn.

:::caution
Code nâng cao càng cần **kiểm chứng**: chạy thử trên dữ liệu mẫu, đối chiếu vài kết quả bạn tự tính được. Dự báo là **ước lượng**, không phải chắc chắn — đừng ra quyết định lớn chỉ dựa vào một con số.
:::

## Ghi nhớ

- **Python in Excel**: phân tích nâng cao (tương quan, dự báo, phân cụm) mà **không cần biết code**.
- **Office Scripts** (kế nhiệm macro VBA): tự động hóa các chuỗi thao tác lặp lại.
- Kết quả nâng cao vẫn phải **kiểm chứng**; dự báo chỉ là ước lượng.

