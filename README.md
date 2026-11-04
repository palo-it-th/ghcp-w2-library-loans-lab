# Library Loans · Workshop 2

คุณเพิ่งเข้าทีมที่ดูแล **ระบบยืมคืนหนังสือของห้องสมุดสมมติ**
งานวันนี้ไม่ใช่เขียนระบบใหม่ แต่เลิกพิมพ์คำขอและกติกาทีมซ้ำทุกครั้ง

**ยืมหนังสือได้ แต่ไม่ต้องยืม prompt เพื่อนทุกครั้งครับ**

## เริ่มใน 2 นาที

1. เปิด repo ที่ trainer ให้ แล้วเปิด **โฟลเดอร์ lab นี้โดยตรง** ใน VS Code
   อย่าเปิด course แม่เป็น workspace เพราะ instructions ของ course อาจปนเข้ามา
2. เปิด `index.html` ด้วย browser: คืนช้า 3 วัน ต้องได้ **16.50 THB**
   เป็นหน้าจอสมมติ ไม่จ่ายเงินจริง ไม่มี server หรือ database ให้ติดตั้ง
3. เปิด `tests.html`: ตอนเริ่มต้องเขียว **18/18**
   มี Node 20+ ใช้ `node --test tests/*.test.js` ได้ด้วย ไม่ต้อง `npm install`
4. Copilot Chat → New Chat → Session Target **Local** → Agent → Auto
   ใช้ harness/model เดิมตลอด lab และ New Chat เมื่อการ์ดบอก
5. เปิด [worksheet](labs/worksheet.md) สำหรับจดผล

ไม่มี Local / ถูก policy ปิด: lab 2.2 สร้างไฟล์แล้วจดว่า **not run**
ไม่ใช่ผ่าน ใช้ Copilot harness ทำ labs 2.3–2.6 ต่อได้
IntelliJ ที่ยังไม่ได้ซ้อม: จับคู่กับคนใช้ VS Code

## เจ็ด lab · 45 นาที

| Lab | นาที | ผลลัพธ์ |
|---|---:|---|
| [2.1 Sort your list](labs/2.1-sort-your-list.md) | 5 | รู้ว่าอะไรควรเป็น prompt / rule / skill |
| [2.2 Save the ask](labs/2.2-save-the-ask.md) | 7 | prompt file เดิมใช้กับสอง input |
| [2.3 Write the repo rules](labs/2.3-repo-rules.md) | 8 | repo instructions สามข้อ พร้อมเหตุผล |
| [2.4 Is it loaded?](labs/2.4-is-it-loaded.md) | 5 | หลักฐาน loaded / not loaded / restored |
| [2.5 Path-scoped](labs/2.5-path-scoped.md) | 7 | test instructions ที่ใช้กับ `tests/**` |
| [2.6 Measure it](labs/2.6-measure-it.md) | 11 | scorecard ของห้างานและการเทียบสองงานเดิม |
| [2.7 Review reads the rules](labs/2.7-review-reads-the-rules.md) | 2 | trainer demo: review ของ PR ที่ใช้เงินผิดรูปแบบ |

ทำตามลำดับ ข้อสุดท้าย trainer ทำให้ดู ติดเกินสองนาทีให้ยกมือ
ไม่ต้อง debug ทั้งห้องสมุดครับ

## แผนที่ repo

| Path | หน้าที่ |
|---|---|
| `src/loans.js` | `calculateLateFee(daysLate)`, `buildFeeReceipt(daysLate, clock)`, `canRenew()`, `countChargeableDays()` |
| `src/money.js` | `Money.satang(550).times(3)` ได้ Money ที่มี `value: 1650`; `.format()` แสดงบาท |
| `src/clock.js` | `systemClock.now()` และ `fakeClock(iso).now()` คืน Date |
| `api/status.js` | readiness function เล็กๆ ไม่ใช่ HTTP server |
| `db/migrations/003_create_loans.sql` | migration สมมติที่ถือว่า apply แล้ว |
| `tests/` | tests เดียวกันรันได้ทั้ง Node และ browser; ชื่อเดิมยังไม่ใช่ given_when_then |
| `docs/team.md` | กติกาทีมสำหรับนำไปเขียน instructions |
| `docs/tickets/` | งานอนาคตสำหรับ W3/W4 ไม่ต้องแก้ใน W2 |
| `labs/` | การ์ด, starter list, sample tasks และ worksheet |

เริ่มต้น **ยังไม่มี** `.github/`, prompt file หรือ instructions file
ผู้เรียนเป็นคนสร้างเอง อย่าให้ agent ทำทุก lab รวดเดียว

Tests เขียวแปลว่า test ที่มีผ่าน ไม่ได้แปลว่าไม่มี bug
สอง ticket เรื่อง weekend และ renewal ตั้งใจเก็บไว้สำหรับสัปดาห์ต่อไป
วันนี้ไม่แก้ implementation ของสองเรื่องนั้น

**→ เริ่ม [Lab 2.1](labs/2.1-sort-your-list.md)**

ไม่มี homework ไม่ต้อง push ไม่ต้องเปิด PR เอง เก็บไฟล์กับ worksheet ไว้ต่อ W3/W4
