// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// Chuỗi item PHẲNG, XEN KẼ (Coursera/MS Learn) cho từng buổi.
// Nhãn kèm loại + thời lượng. Slug khớp file .md trong khoa-hoc/buoi-N/ (không còn folder ly-thuyet).
const s = (n, f) => `khoa-hoc/buoi-${n}/${f}`;

const moduleTitles = {
  1: 'Buổi 1 · Nền tảng & Prompt',
  2: 'Buổi 2 · Word & PowerPoint',
  3: 'Buổi 3 · Excel',
  4: 'Buổi 4 · Outlook & Teams',
  5: 'Buổi 5 · SharePoint & Enterprise',
  6: 'Buổi 6 · Mở rộng (Extend)',
};

const sequences = {
  1: [
    { label: '📋 Tổng quan', slug: 'khoa-hoc/buoi-1' },
    { label: '📖 GenAI là gì? · 5’', slug: s(1, '01-genai') },
    { label: '📖 Copilot khác gì GenAI · 6’', slug: s(1, '02-copilot-vs-genai') },
    { label: '📖 Use case theo vị trí · 5’', slug: s(1, '03-use-case') },
    { label: '❓ Kiểm tra nhanh · 3’', slug: s(1, '04-kiem-tra-nhanh-1') },
    { label: '📖 Core components · 6’', slug: s(1, '05-core-components') },
    { label: '📖 Mở rộng Copilot · 5’', slug: s(1, '06-mo-rong') },
    { label: '🧪 Lab · Copilot Chat · 12’', slug: s(1, '07-lab-chat') },
    { label: '📖 Prompt G-C-S-E · 6’', slug: s(1, '08-prompt-gcse') },
    { label: '📖 Prompting best practices · 5’', slug: s(1, '09-best-practices') },
    { label: '🧪 Lab · Viết & tinh chỉnh prompt · 10’', slug: s(1, '10-lab-prompt') },
    { label: '❓ Kiểm tra nhanh · 3’', slug: s(1, '11-kiem-tra-nhanh-2') },
    { label: '✍️ Bài tập', slug: s(1, '12-bai-tap') },
    { label: '🎓 Dự án (Assignment)', slug: s(1, '13-du-an') },
    { label: '🎭 Role play với thầy giáo AI', slug: s(1, '14-role-play') },
    { label: '❓ Module assessment · 5’', slug: s(1, '15-assessment') },
    { label: '🏁 Tổng kết · 3’', slug: s(1, '16-tong-ket') },
    { label: '💬 Chia sẻ & Feedback', slug: s(1, '17-feedback') },
  ],
  2: [
    { label: '📋 Tổng quan', slug: 'khoa-hoc/buoi-2' },
    { label: '📖 Word: Draft từ prompt · 5’', slug: s(2, '01-word-draft') },
    { label: '📖 Word: Draft tham chiếu file · 5’', slug: s(2, '02-word-draft-file') },
    { label: '📖 Word: Rewrite · 5’', slug: s(2, '03-word-rewrite') },
    { label: '🧪 Lab · Word (draft & rewrite) · 10’', slug: s(2, '04-lab-word') },
    { label: '📖 Word: Summarize & hỏi đáp · 5’', slug: s(2, '05-word-summarize') },
    { label: '❓ Kiểm tra nhanh · 3’', slug: s(2, '06-kiem-tra-nhanh-1') },
    { label: '📖 PPT: Tạo deck · 6’', slug: s(2, '07-ppt-tao-deck') },
    { label: '📖 PPT: Slide, hình, Designer · 5’', slug: s(2, '08-ppt-slide-hinh') },
    { label: '📖 PPT: Organize & tóm tắt · 5’', slug: s(2, '09-ppt-organize') },
    { label: '🧪 Lab · Word → deck 8–10 slide · 12’', slug: s(2, '10-lab-ppt') },
    { label: '✍️ Bài tập', slug: s(2, '11-bai-tap') },
    { label: '🎭 Role play với thầy giáo AI', slug: s(2, '12-role-play') },
    { label: '❓ Module assessment · 4’', slug: s(2, '13-assessment') },
    { label: '🏁 Tổng kết · 3’', slug: s(2, '14-tong-ket') },
    { label: '💬 Chia sẻ & Feedback', slug: s(2, '15-feedback') },
  ],
  3: [
    { label: '📋 Tổng quan', slug: 'khoa-hoc/buoi-3' },
    { label: '📖 Điều kiện tiên quyết · 4’', slug: s(3, '01-dieu-kien') },
    { label: '📖 Clean data · 6’', slug: s(3, '02-clean-data') },
    { label: '📖 Phát hiện sai sót · 5’', slug: s(3, '03-phat-hien-sai-sot') },
    { label: '🧪 Lab · Làm sạch & soi lỗi · 12’', slug: s(3, '04-lab-clean') },
    { label: '📖 Viết hộ công thức · 6’', slug: s(3, '05-viet-cong-thuc') },
    { label: '❓ Kiểm tra nhanh · 3’', slug: s(3, '06-kiem-tra-nhanh-1') },
    { label: '📖 Phân tích & trực quan hóa · 5’', slug: s(3, '07-truc-quan-hoa') },
    { label: '📖 Add-ons & Python in Excel · 6’', slug: s(3, '08-python-addons') },
    { label: '🧪 Lab · Chart, PivotTable, Python · 12’', slug: s(3, '09-lab-phan-tich') },
    { label: '✍️ Bài tập', slug: s(3, '10-bai-tap') },
    { label: '🎭 Role play với thầy giáo AI', slug: s(3, '11-role-play') },
    { label: '❓ Module assessment · 4’', slug: s(3, '12-assessment') },
    { label: '🏁 Tổng kết · 3’', slug: s(3, '13-tong-ket') },
    { label: '💬 Chia sẻ & Feedback', slug: s(3, '14-feedback') },
  ],
  4: [
    { label: '📋 Tổng quan', slug: 'khoa-hoc/buoi-4' },
    { label: '📖 Outlook: Summarize + action items · 5’', slug: s(4, '01-outlook-summarize') },
    { label: '📖 Outlook: Draft & reply · 5’', slug: s(4, '02-outlook-draft-reply') },
    { label: '📖 Outlook: Coaching · 4’', slug: s(4, '03-outlook-coaching') },
    { label: '🧪 Lab · Outlook (tóm tắt & reply) · 10’', slug: s(4, '04-lab-outlook') },
    { label: '📖 Outlook: Chuẩn bị họp · 4’', slug: s(4, '05-outlook-prepare') },
    { label: '❓ Kiểm tra nhanh · 3’', slug: s(4, '06-kiem-tra-nhanh-1') },
    { label: '📖 Teams: Recap real-time · 5’', slug: s(4, '07-teams-recap-realtime') },
    { label: '📖 Teams: Intelligent Recap · 5’', slug: s(4, '08-teams-intelligent-recap') },
    { label: '📖 Teams: Chat & channel · 4’', slug: s(4, '09-teams-chat') },
    { label: '🧪 Lab · Transcript → biên bản · 12’', slug: s(4, '10-lab-teams') },
    { label: '✍️ Bài tập', slug: s(4, '11-bai-tap') },
    { label: '🎭 Role play với thầy giáo AI', slug: s(4, '12-role-play') },
    { label: '❓ Module assessment · 4’', slug: s(4, '13-assessment') },
    { label: '🏁 Tổng kết · 3’', slug: s(4, '14-tong-ket') },
    { label: '💬 Chia sẻ & Feedback', slug: s(4, '15-feedback') },
  ],
  5: [
    { label: '📋 Tổng quan', slug: 'khoa-hoc/buoi-5' },
    { label: '📖 Hỏi đáp trên SharePoint · 5’', slug: s(5, '01-hoi-dap-sharepoint') },
    { label: '📖 SharePoint Agents 1-click · 6’', slug: s(5, '02-sharepoint-agents') },
    { label: '❓ Kiểm tra nhanh · 3’', slug: s(5, '03-kiem-tra-nhanh-1') },
    { label: '🧪 Lab · Tạo & kiểm thử Agent · 12’', slug: s(5, '04-lab-agent') },
    { label: '📖 Tạo & rewrite trang SharePoint · 5’', slug: s(5, '05-tao-trang') },
    { label: '📖 Governance & Oversharing · 5’', slug: s(5, '06-governance') },
    { label: '✍️ Bài tập', slug: s(5, '07-bai-tap') },
    { label: '🎭 Role play với thầy giáo AI', slug: s(5, '08-role-play') },
    { label: '❓ Module assessment · 5’', slug: s(5, '09-assessment') },
    { label: '🏁 Tổng kết · 3’', slug: s(5, '10-tong-ket') },
    { label: '💬 Chia sẻ & Feedback', slug: s(5, '11-feedback') },
  ],
  6: [
    { label: '🎬 Tổng quan & Trailer', slug: 'khoa-hoc/buoi-6' },
    { label: '📖 Copilot trong Loop · 4’', slug: s(6, '01-loop') },
    { label: '📖 Copilot trong Power BI · 4’', slug: s(6, '02-power-bi') },
    { label: '📖 To Do & Planner · 4’', slug: s(6, '03-todo-planner') },
    { label: '📖 OneNote, Whiteboard, Forms… · 4’', slug: s(6, '04-onenote-whiteboard-forms') },
    { label: '📖 Từ Chat → Agent → Copilot Studio · 5’', slug: s(6, '05-chat-to-agent') },
    { label: '🏆 Capstone Showcase', slug: s(6, '06-capstone') },
    { label: '🏁 Tổng kết khóa', slug: s(6, '07-tong-ket') },
    { label: '📣 Bước tiếp theo', slug: s(6, '08-feedback') },
  ],
};

const moduleGroup = (n) => ({
  label: moduleTitles[n],
  collapsed: n !== 1,
  items: sequences[n],
});

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
              items: [1, 2, 3, 4, 5, 6].map(moduleGroup),
            },
            {
              label: 'Giải pháp',
              link: '/giai-phap/',
              icon: 'puzzle',
              items: [
                { label: 'Về phần Giải pháp', slug: 'giai-phap' },
                {
                  label: 'Đáp án Module assessment',
                  items: [1, 2, 3, 4, 5].map((n) => ({
                    label: `Assessment · ${moduleTitles[n]}`,
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
