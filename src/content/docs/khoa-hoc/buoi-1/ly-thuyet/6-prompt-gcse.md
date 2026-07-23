---
title: "Kỹ năng Prompt: công thức G-C-S-E"
description: Công thức viết prompt hiệu quả Goal – Context – Source – Expectation, kèm ví dụ cải thiện.
---

<span class="item-kind">📖 LÝ THUYẾT · UNIT 6 · ⏱️ ~6 phút</span>

:::note[🎬 Video sẽ cập nhật]
Video hướng dẫn viết prompt G-C-S-E sẽ được chèn ở đây.
:::

## Bốn thành phần: G-C-S-E

| Thành phần | Câu hỏi tự đặt | Ví dụ |
| --- | --- | --- |
| **Goal** (Mục tiêu) | Tôi muốn Copilot làm gì? | "Viết email nhắc khách gia hạn hợp đồng" |
| **Context** (Bối cảnh) | Ai đọc? Tình huống nào? | "Khách ngành giáo dục, hợp đồng hết hạn cuối tháng" |
| **Source** (Nguồn) | Dựa trên dữ liệu nào? | "Dựa trên `Hợp đồng ABC.docx` và email gần nhất" |
| **Expectation** (Kỳ vọng) | Định dạng, độ dài, giọng? | "Giọng thân thiện, dưới 150 từ, có lời chào" |

## Tham chiếu nguồn bằng `/`

Trong nhiều app, gõ **`/`** rồi chọn file để chỉ đúng **Source** cho Copilot — câu trả lời sẽ bám vào tài liệu đó.

## Hội thoại nhiều lượt (multi-turn)

Đừng kỳ vọng hoàn hảo ngay lần đầu. **Tinh chỉnh dần**: "ngắn hơn", "thêm phần rủi ro", "đổi sang giọng trang trọng". Copilot nhớ ngữ cảnh trong cuộc trò chuyện.

## Ví dụ cải thiện

> ❌ **Tệ:** "Viết báo cáo"
>
> ✅ **Tốt:** "Viết bản nháp **báo cáo kết quả bán hàng Quý 2** *(Goal)* cho **ban giám đốc** *(Context)*, dựa trên **`Doanh số Q2.xlsx`** *(Source)*, trình bày **gạch đầu dòng, tối đa 1 trang, giọng trang trọng** *(Expectation)*."

## Ghi nhớ

- Prompt tốt = **Goal + Context + Source + Expectation**.
- Dùng **`/`** để trỏ nguồn; **tinh chỉnh nhiều lượt**.

👉 Tiếp theo: [7 · Prompting best practices →](/khoa-hoc/buoi-1/ly-thuyet/7-prompt-best-practices/)
