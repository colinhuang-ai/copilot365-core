---
title: "Core components của Copilot"
description: Các thành phần lõi và luồng xử lý một prompt trong Copilot for M365, cùng ranh giới bảo mật.
---

<span class="item-kind">📖 LÝ THUYẾT · UNIT 4 · ⏱️ ~6 phút</span>

:::note[🎬 Video sẽ cập nhật]
Video mô tả kiến trúc & luồng xử lý sẽ được chèn ở đây.
:::

## Các thành phần lõi

- **LLM** — mô hình ngôn ngữ lớn tạo câu trả lời.
- **Microsoft Graph** — kho dữ liệu & quan hệ trong tổ chức (email, file, người, lịch…).
- **Semantic Index** — "bản đồ ý nghĩa" giúp tìm đúng nội dung liên quan trong Graph.
- **Orchestration layer** — nhạc trưởng: nhận prompt, lấy ngữ cảnh, gọi LLM, hậu xử lý.
- **Các app M365** — nơi Copilot xuất hiện (Word, Excel, Teams…).
- **Responsible AI** — lớp bảo vệ: an toàn nội dung, quyền riêng tư, tuân thủ.

## Luồng xử lý một prompt

1. Bạn nhập **prompt** trong một app.
2. **Orchestration** diễn giải và truy vấn **Microsoft Graph** qua **Semantic Index** để lấy ngữ cảnh bạn *được phép xem* (**grounding**).
3. Prompt + ngữ cảnh được gửi tới **LLM**.
4. Kết quả được **hậu xử lý** (kiểm tra an toàn, gắn **trích dẫn**) rồi trả về app.

## Ranh giới bảo mật

- Copilot **chỉ truy cập dữ liệu bạn đã có quyền xem** — thừa hưởng đúng phân quyền hiện có.
- **Dữ liệu tổ chức không dùng để huấn luyện** mô hình nền tảng.
- Nội dung được xử lý trong ranh giới tuân thủ của Microsoft 365.

:::caution
Vì Copilot thấy mọi thứ *bạn được phép thấy*, việc **chia sẻ quá tay (oversharing)** có thể khiến nó trích dẫn cả tài liệu nhạy cảm — xem sâu ở [Buổi 5](/khoa-hoc/buoi-5/06-governance/).
:::

## Ghi nhớ

- Lõi: **LLM + Graph + Semantic Index + Orchestration + Responsible AI**.
- Luồng: **prompt → grounding → LLM → hậu xử lý → trích dẫn**.

