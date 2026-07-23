// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// Danh sách unit Lý thuyết cho từng buổi (slug phải khớp file .md trong khoa-hoc/buoi-N/ly-thuyet/).
const theoryUnits = {
  1: [
    { label: '1 · GenAI là gì?', slug: 'khoa-hoc/buoi-1/ly-thuyet/1-genai' },
    { label: '2 · Copilot khác gì GenAI khác?', slug: 'khoa-hoc/buoi-1/ly-thuyet/2-copilot-vs-genai' },
    { label: '3 · Use case theo vị trí', slug: 'khoa-hoc/buoi-1/ly-thuyet/3-use-case' },
    { label: '4 · Core components', slug: 'khoa-hoc/buoi-1/ly-thuyet/4-core-components' },
    { label: '5 · Mở rộng Copilot', slug: 'khoa-hoc/buoi-1/ly-thuyet/5-mo-rong' },
    { label: '6 · Prompt: G-C-S-E', slug: 'khoa-hoc/buoi-1/ly-thuyet/6-prompt-gcse' },
    { label: '7 · Prompting best practices', slug: 'khoa-hoc/buoi-1/ly-thuyet/7-prompt-best-practices' },
  ],
  2: [
    { label: '1 · Word: Draft từ prompt', slug: 'khoa-hoc/buoi-2/ly-thuyet/1-word-draft' },
    { label: '2 · Word: Draft tham chiếu file', slug: 'khoa-hoc/buoi-2/ly-thuyet/2-word-draft-file' },
    { label: '3 · Word: Rewrite', slug: 'khoa-hoc/buoi-2/ly-thuyet/3-word-rewrite' },
    { label: '4 · Word: Summarize & hỏi đáp', slug: 'khoa-hoc/buoi-2/ly-thuyet/4-word-summarize' },
    { label: '5 · PPT: Tạo deck', slug: 'khoa-hoc/buoi-2/ly-thuyet/5-ppt-tao-deck' },
    { label: '6 · PPT: Slide, hình, Designer', slug: 'khoa-hoc/buoi-2/ly-thuyet/6-ppt-slide-hinh' },
    { label: '7 · PPT: Organize & tóm tắt', slug: 'khoa-hoc/buoi-2/ly-thuyet/7-ppt-organize' },
  ],
  3: [
    { label: '0 · Điều kiện tiên quyết', slug: 'khoa-hoc/buoi-3/ly-thuyet/0-dieu-kien' },
    { label: '1 · Clean data', slug: 'khoa-hoc/buoi-3/ly-thuyet/1-clean-data' },
    { label: '2 · Phát hiện sai sót', slug: 'khoa-hoc/buoi-3/ly-thuyet/2-phat-hien-sai-sot' },
    { label: '3 · Viết hộ công thức', slug: 'khoa-hoc/buoi-3/ly-thuyet/3-viet-cong-thuc' },
    { label: '4 · Phân tích & trực quan hóa', slug: 'khoa-hoc/buoi-3/ly-thuyet/4-truc-quan-hoa' },
    { label: '5 · Add-ons & Python in Excel', slug: 'khoa-hoc/buoi-3/ly-thuyet/5-python-addons' },
  ],
  4: [
    { label: '1 · Outlook: Summarize + action items', slug: 'khoa-hoc/buoi-4/ly-thuyet/1-outlook-summarize' },
    { label: '2 · Outlook: Draft & reply', slug: 'khoa-hoc/buoi-4/ly-thuyet/2-outlook-draft-reply' },
    { label: '3 · Outlook: Coaching', slug: 'khoa-hoc/buoi-4/ly-thuyet/3-outlook-coaching' },
    { label: '4 · Outlook: Chuẩn bị họp', slug: 'khoa-hoc/buoi-4/ly-thuyet/4-outlook-prepare' },
    { label: '5 · Teams: Recap real-time', slug: 'khoa-hoc/buoi-4/ly-thuyet/5-teams-recap-realtime' },
    { label: '6 · Teams: Intelligent Recap', slug: 'khoa-hoc/buoi-4/ly-thuyet/6-teams-intelligent-recap' },
    { label: '7 · Teams: Chat & channel', slug: 'khoa-hoc/buoi-4/ly-thuyet/7-teams-chat' },
  ],
  5: [
    { label: '1 · Hỏi đáp trên SharePoint', slug: 'khoa-hoc/buoi-5/ly-thuyet/1-hoi-dap-sharepoint' },
    { label: '2 · SharePoint Agents 1-click', slug: 'khoa-hoc/buoi-5/ly-thuyet/2-sharepoint-agents' },
    { label: '3 · Tạo & rewrite trang SharePoint', slug: 'khoa-hoc/buoi-5/ly-thuyet/3-tao-trang' },
    { label: '4 · Governance & Oversharing', slug: 'khoa-hoc/buoi-5/ly-thuyet/4-governance' },
  ],
  6: [
    { label: '1 · Copilot trong Loop', slug: 'khoa-hoc/buoi-6/ly-thuyet/1-loop' },
    { label: '2 · Copilot trong Power BI', slug: 'khoa-hoc/buoi-6/ly-thuyet/2-power-bi' },
    { label: '3 · To Do & Planner', slug: 'khoa-hoc/buoi-6/ly-thuyet/3-todo-planner' },
    { label: '4 · OneNote, Whiteboard, Forms…', slug: 'khoa-hoc/buoi-6/ly-thuyet/4-onenote-whiteboard-forms' },
    { label: '5 · Từ Chat → Agent → Copilot Studio', slug: 'khoa-hoc/buoi-6/ly-thuyet/5-chat-to-agent' },
  ],
};

const moduleTitles = {
  1: 'Buổi 1 · Nền tảng & Prompt',
  2: 'Buổi 2 · Word & PowerPoint',
  3: 'Buổi 3 · Excel',
  4: 'Buổi 4 · Outlook & Teams',
  5: 'Buổi 5 · SharePoint & Enterprise',
  6: 'Buổi 6 · Mở rộng (Extend)',
};

// Các item thực hành chuẩn cho buổi 1–5 (Module 1 có thêm Dự án).
const practiceItems = (n) => {
  const items = [
    { label: '🧪 Bài Lab', slug: `khoa-hoc/buoi-${n}/lab` },
    { label: '✍️ Bài tập', slug: `khoa-hoc/buoi-${n}/bai-tap` },
  ];
  if (n === 1) items.push({ label: '🎓 Dự án (Assignment)', slug: `khoa-hoc/buoi-${n}/du-an` });
  items.push(
    { label: '❓ Quiz', slug: `khoa-hoc/buoi-${n}/quiz` },
    { label: '🎭 Role play với thầy giáo AI', slug: `khoa-hoc/buoi-${n}/role-play` },
    { label: '💬 Chia sẻ & Feedback', slug: `khoa-hoc/buoi-${n}/feedback` },
  );
  return items;
};

// Nhóm sidebar cho buổi 1–5.
const moduleGroup = (n) => ({
  label: moduleTitles[n],
  collapsed: n !== 1,
  items: [
    { label: '📋 Tổng quan', slug: `khoa-hoc/buoi-${n}` },
    { label: '📖 Lý thuyết', items: theoryUnits[n] },
    ...practiceItems(n),
  ],
});

// Buổi 6 là teaser: không có Lab/Bài tập/Quiz/Role play.
const module6Group = {
  label: moduleTitles[6],
  collapsed: true,
  items: [
    { label: '🎬 Tổng quan & Trailer', slug: 'khoa-hoc/buoi-6' },
    { label: '📖 Điểm qua các app', items: theoryUnits[6] },
    { label: '🏆 Capstone Showcase', slug: 'khoa-hoc/buoi-6/capstone' },
    { label: '📣 Bước tiếp theo', slug: 'khoa-hoc/buoi-6/feedback' },
  ],
};

// https://astro.build/config
export default defineConfig({
  site: 'https://copilot-m365-qakits.pages.dev',
  integrations: [
    starlight({
      title: 'Copilot for M365 · QA Kits',
      description:
        'Ebook/LMS 6 module: Sử dụng AI Chat (Copilot for Microsoft 365) trong việc chuẩn bị QA Kits.',
      defaultLocale: 'root',
      locales: { root: { label: 'Tiếng Việt', lang: 'vi' } },
      social: [
        { icon: 'email', label: 'Liên hệ', href: 'mailto:phan@marioeducation.com' },
      ],
      lastUpdated: true,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      customCss: ['./src/styles/custom.css'],
      plugins: [
        starlightSidebarTopics(
          [
            {
              label: 'Khóa học',
              link: '/khoa-hoc/buoi-1/',
              icon: 'open-book',
              items: [...[1, 2, 3, 4, 5].map(moduleGroup), module6Group],
            },
            {
              label: 'Giải pháp',
              link: '/giai-phap/',
              icon: 'puzzle',
              items: [
                { label: 'Về phần Giải pháp', slug: 'giai-phap' },
                {
                  label: 'Đáp án Quiz theo buổi',
                  items: [1, 2, 3, 4, 5].map((n) => ({
                    label: `Quiz · ${moduleTitles[n]}`,
                    slug: `giai-phap/buoi-${n}`,
                  })),
                },
                {
                  label: 'Video chữa bài Dự án',
                  items: [{ label: 'Dự án · Buổi 1', slug: 'giai-phap/du-an-buoi-1' }],
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
          { exclude: ['/'] }
        ),
      ],
    }),
  ],
});
