// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// Sinh nhanh danh sách item (7 phần học) cho một module/buổi.
const moduleItems = (n) => [
  { label: '📋 Tổng quan module', slug: `khoa-hoc/buoi-${n}` },
  { label: '📖 Lý thuyết', slug: `khoa-hoc/buoi-${n}/ly-thuyet` },
  { label: '🧪 Bài Lab (thực hành)', slug: `khoa-hoc/buoi-${n}/lab` },
  { label: '✍️ Bài tập', slug: `khoa-hoc/buoi-${n}/bai-tap` },
  { label: '❓ Quiz', slug: `khoa-hoc/buoi-${n}/quiz` },
  { label: '🎭 Role play với thầy giáo AI', slug: `khoa-hoc/buoi-${n}/role-play` },
  { label: '💬 Chia sẻ & Feedback', slug: `khoa-hoc/buoi-${n}/feedback` },
];

const moduleTitles = {
  1: 'Buổi 1 · Tổng quan & Prompt',
  2: 'Buổi 2 · Word & PowerPoint',
  3: 'Buổi 3 · Excel',
  4: 'Buổi 4 · Outlook & Teams',
  5: 'Buổi 5 · SharePoint & Enterprise',
};

// https://astro.build/config
export default defineConfig({
  // Cập nhật thành domain thật sau khi deploy (dùng cho sitemap, canonical URL).
  site: 'https://copilot-m365-qakits.pages.dev',
  integrations: [
    starlight({
      title: 'Copilot for M365 · QA Kits',
      description:
        'Ebook/LMS lộ trình 5 module: Sử dụng AI Chat (Copilot for Microsoft 365) trong việc chuẩn bị QA Kits.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Tiếng Việt', lang: 'vi' },
      },
      social: [
        { icon: 'email', label: 'Liên hệ', href: 'mailto:phan@marioeducation.com' },
      ],
      lastUpdated: true,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      customCss: ['./src/styles/custom.css'],
      plugins: [
        // Top-menu (topics): tách "Khóa học", "Bài giải", "Phụ lục" thành 3 khu vực riêng.
        starlightSidebarTopics(
          [
            {
              label: 'Khóa học',
              link: '/khoa-hoc/buoi-1/',
              icon: 'open-book',
              items: [1, 2, 3, 4, 5].map((n) => ({
                label: moduleTitles[n],
                collapsed: n !== 1,
                items: moduleItems(n),
              })),
            },
            {
              label: 'Bài giải',
              link: '/bai-giai/',
              icon: 'puzzle',
              items: [
                { label: 'Về phần Bài giải', slug: 'bai-giai' },
                {
                  label: 'Đáp án Quiz theo buổi',
                  items: [1, 2, 3, 4, 5].map((n) => ({
                    label: `Đáp án Quiz · ${moduleTitles[n]}`,
                    slug: `bai-giai/buoi-${n}`,
                  })),
                },
              ],
            },
            {
              label: 'Phụ lục',
              link: '/phu-luc/',
              icon: 'list-format',
              items: [
                { label: 'Giới thiệu phụ lục', slug: 'phu-luc' },
                { label: 'Thư viện Prompt', slug: 'phu-luc/prompt-library' },
                { label: 'Thuật ngữ', slug: 'phu-luc/thuat-ngu' },
                { label: 'Tài nguyên & liên kết', slug: 'phu-luc/tai-nguyen' },
              ],
            },
          ],
          {
            // Trang chủ (splash) không thuộc topic nào.
            exclude: ['/'],
          }
        ),
      ],
    }),
  ],
});
