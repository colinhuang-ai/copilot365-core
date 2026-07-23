---
title: "GenAI là gì?"
description: Hiểu nền tảng AI tạo sinh (Generative AI) — LLM, token, prompt và vì sao AI đôi khi "bịa".
---

<span class="item-kind">📖 LÝ THUYẾT · UNIT 1 · ⏱️ ~5 phút</span>

:::note[🎬 Video sẽ cập nhật]
Video giải thích trực quan về GenAI sẽ được chèn ở đây.
:::

## AI tạo sinh (Generative AI)

**GenAI** là loại AI có thể **tạo ra nội dung mới** — văn bản, bảng biểu, hình ảnh, code — thay vì chỉ phân loại hay dự đoán con số. Copilot, ChatGPT, Gemini… đều thuộc nhóm này.

Trái tim của GenAI văn bản là **LLM (Large Language Model)** — mô hình được huấn luyện trên lượng văn bản khổng lồ.

## Mô hình "đoán từ tiếp theo"

Về bản chất, LLM làm một việc đơn giản đến bất ngờ: **dự đoán từ (token) tiếp theo** hợp lý nhất, dựa trên những gì đã có.

- **Token**: đơn vị nhỏ của văn bản (một từ hoặc một phần của từ).
- **Prompt → Completion**: bạn đưa vào *prompt*, mô hình sinh ra *completion* từng token một.
- **Context window**: "bộ nhớ làm việc" — lượng thông tin mô hình có thể xét cùng lúc. Vượt quá, nó sẽ "quên" phần đầu.

## Vì sao AI đôi khi "bịa"? (Hallucination)

Vì chỉ *đoán từ hợp lý*, mô hình có thể tạo ra câu **nghe rất thuyết phục nhưng sai sự thật** — gọi là **hallucination** (ảo giác).

:::caution[Nguyên tắc vàng]
**Luôn kiểm chứng** kết quả AI với nguồn đáng tin. Với Copilot, hãy bấm vào **trích dẫn** mà nó cung cấp — đây là điểm khác biệt lớn bạn sẽ thấy ở unit sau.
:::

## Ghi nhớ

- GenAI **tạo nội dung mới**; lõi là **LLM**.
- LLM **đoán token tiếp theo**, giới hạn bởi **context window**.
- Kết quả có thể **sai** → luôn kiểm chứng.

👉 Tiếp theo: [2 · Copilot khác gì các GenAI khác? →](/khoa-hoc/buoi-1/ly-thuyet/2-copilot-vs-genai/)
