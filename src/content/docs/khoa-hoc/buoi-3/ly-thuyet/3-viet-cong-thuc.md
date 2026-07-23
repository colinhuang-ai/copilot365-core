---
title: "Viết hộ công thức"
description: Tạo formula column bằng ngôn ngữ tự nhiên, giải thích công thức có sẵn, và tối ưu công thức với Copilot.
---

<span class="item-kind">📖 LÝ THUYẾT · UNIT 3 · ⏱️ ~8 phút</span>

:::note[🎬 Video sẽ cập nhật]
Video minh họa nhờ Copilot viết công thức sẽ được chèn ở đây.
:::

Đây là "siêu năng lực" khiến nhiều người thích Copilot nhất: bạn **không cần nhớ hàm**. Chỉ cần mô tả kết quả mong muốn, Copilot viết công thức và giải thích.

## Tạo cột công thức bằng ngôn ngữ tự nhiên

Copilot có thể tạo một **formula column** mới cho cả Table chỉ từ một câu mô tả.

```text
Thêm cột "Thành tiền" bằng "Số lượng" nhân "Đơn giá".
```

```text
Thêm cột "Xếp loại": nếu "Doanh thu" >= 100 triệu ghi "Cao",
từ 50 đến dưới 100 triệu ghi "Trung bình", còn lại ghi "Thấp".
```

```text
Thêm cột "Số ngày giao" bằng khoảng cách giữa "Ngày giao" và "Ngày đặt".
```

Copilot sẽ đề xuất công thức (ví dụ dùng `IF`, `SWITCH`, `DATEDIF`…) và bạn chỉ cần **duyệt để chèn**.

## Giải thích công thức có sẵn

Gặp một công thức dài khó hiểu do người khác để lại? Nhờ Copilot dịch sang tiếng Việt.

```text
Giải thích công thức trong ô này làm gì, từng phần một, bằng tiếng Việt dễ hiểu:
=IFERROR(VLOOKUP(A2,'DS'!$A:$D,4,FALSE),"Không tìm thấy")
```

## Sửa và tối ưu công thức

```text
Công thức ở cột "Hoa hồng" đang trả về lỗi #VALUE!.
Tìm nguyên nhân và đề xuất cách sửa.
```

```text
Công thức này lồng nhiều IF quá dài. Viết lại gọn hơn, dễ đọc hơn
mà vẫn cho kết quả giống hệt.
```

:::caution
Luôn **kiểm chứng công thức trên vài dòng** bạn tự tính được kết quả. Copilot có thể hiểu sai ý bạn (ví dụ nhầm cột, nhầm điều kiện biên >= và >).
:::

:::tip
Nếu kết quả chưa đúng, đừng viết lại từ đầu — hãy **mô tả sai ở đâu**: "cột này phải tính cả thuế 8%", "mốc phải là lớn hơn hoặc bằng". Copilot tinh chỉnh dần.
:::

## Ghi nhớ

- Mô tả kết quả → Copilot **tạo cột công thức**, không cần nhớ hàm.
- Copilot **giải thích** và **tối ưu** công thức có sẵn.
- **Kiểm chứng** trên vài dòng trước khi tin toàn bộ.

👉 Tiếp theo: [4 · Phân tích & trực quan hóa →](/khoa-hoc/buoi-3/ly-thuyet/4-truc-quan-hoa/)
