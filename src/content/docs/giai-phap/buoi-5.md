---
title: "Đáp án Quiz · Buổi 5"
description: Đáp án và giải thích Quiz Buổi 5 — SharePoint Agents, oversharing, Restricted SharePoint Search và scope.
---

Đối chiếu sau khi bạn đã làm [Quiz Buổi 5](/khoa-hoc/buoi-5/quiz/).

1. **Tạo một SharePoint Agent cơ bản cần gì?**
   ✅ **Không cần code — tạo 1-click ngay trên thư viện.** Chỉ cần bấm Copilot → Create an agent trên thư viện tài liệu; Copilot Studio và code chỉ dành cho trường hợp nâng cao.

2. **Vì sao agent trả lời được cả file nhạy cảm "không nên thấy"?**
   ✅ **Vì quyền vốn đã bị cấp quá rộng (oversharing); agent chỉ làm lộ ra.** Copilot và agent **tuân thủ đúng phân quyền hiện có** — chúng không phá quyền. Vấn đề là quyền hiện có đã sai từ trước, và agent chiếu đèn vào lỗ hổng đó.

3. **Restricted SharePoint Search (RSS) đóng vai trò gì?**
   ✅ **Giải pháp tạm thời — giới hạn Copilot vào danh sách site được phép.** RSS mua thời gian trong lúc IT rà soát và sửa quyền; nó không sửa gốc rễ và có thể chặn cả nội dung hữu ích.

4. **Cách nhanh nhất đưa agent đến cả nhóm sales?**
   ✅ **Chia sẻ agent vào một Teams chat/kênh của nhóm.** Agent chia sẻ như một file; đưa vào Teams giúp cả nhóm dùng ngay trong luồng làm việc.

5. **Câu hỏi quá rộng, lẫn nhiều tài liệu không liên quan — nên làm gì?**
   ✅ **Gõ `/` để thu hẹp phạm vi về đúng site/file.** Scope giúp câu trả lời chính xác, nhanh và ít lấy nhầm tài liệu cũ.

6. **Giải pháp gốc rễ cho oversharing là gì?**
   ✅ **Quản trị quyền: rà soát chia sẻ, gắn nhãn nhạy cảm, kiểm tra định kỳ.** RSS chỉ là van khóa tạm thời; dọn dẹp và quản trị phân quyền mới là cách bền vững, sau đó mới mở rộng lại phạm vi Copilot.
