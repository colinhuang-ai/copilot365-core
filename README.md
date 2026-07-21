# Ebook/LMS: Copilot for M365 · Chuẩn bị QA Kits

Khóa học **5 module cơ bản** về sử dụng AI Chat (Microsoft 365 Copilot) trong việc chuẩn bị QA Kits. Dựng bằng [Astro](https://astro.build) **7** + [Starlight](https://starlight.astro.build) + [starlight-sidebar-topics](https://starlight-sidebar-topics.netlify.app/) (top-menu), xuất ra **site tĩnh**, deploy lên **Cloudflare Pages** hoặc **Workers**.

## Chạy tại máy

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # build ra ./dist
npm run preview    # xem thử bản build
```

## Cấu trúc

**Top menu (topics):** `Khóa học` · `Bài giải` · `Phụ lục` (cấu hình trong `astro.config.mjs`).

Mỗi **module/buổi** = 7 item:
`Tổng quan` → `Lý thuyết` (video) → `Bài Lab` (step-by-step + video) → `Bài tập` (không lời giải) → `Quiz` (tự chấm) → `Role play với thầy giáo AI` → `Chia sẻ & Feedback` (dot.).

```
src/
├─ assets/hero.svg
├─ components/
│  ├─ VideoEmbed.astro       # nhúng video / placeholder (thay src="" khi có video)
│  └─ Quiz.astro             # quiz tự chấm điểm client-side
├─ styles/custom.css         # brand + style cho video/quiz
├─ content.config.ts
└─ content/docs/
   ├─ index.mdx              # TRANG CHỦ: giới thiệu + chuẩn bị (preparation)
   ├─ khoa-hoc/buoi-1..5/    # 5 module, mỗi module 7 item
   ├─ bai-giai/              # đáp án quiz + giải thích
   └─ phu-luc/               # prompt library, thuật ngữ, tài nguyên
```

### Thêm video
Mở file `.mdx` (ly-thuyet/lab), thêm link vào `src=""` của `<VideoEmbed />`:
```mdx
<VideoEmbed title="..." src="https://www.youtube.com/watch?v=XXXX" duration="6:30" />
```
Hỗ trợ YouTube, Microsoft Stream, Vimeo hoặc URL embed. Bỏ trống `src` để hiện placeholder.

### Feedback bằng dot.
Mỗi module có trang **Chia sẻ & Feedback**. Sau khi deploy, tạo **dot. review link** cho site rồi dán vào chỗ đánh dấu trong các trang feedback (hoặc dùng chung 1 link cho cả ebook).

---

## Deploy lên Cloudflare Pages

**Qua CLI:**
```bash
npm run build
npx wrangler pages deploy ./dist
```
**Qua Git:** Connect repo → Framework **Astro**, build `npm run build`, output `dist`.

## Deploy lên Cloudflare Workers (Static Assets)

Đã có `wrangler.jsonc`:
```bash
npm run build
npx wrangler deploy
```

Sau khi deploy, sửa `site:` trong `astro.config.mjs` thành domain thật để sitemap/canonical chính xác.

> ⚠️ **Yêu cầu dung lượng:** cần ~1–2 GB trống cho `node_modules` + cache + `dist`. Nếu ổ đĩa đầy, `npm install`/`build` sẽ báo `ENOSPC`.
