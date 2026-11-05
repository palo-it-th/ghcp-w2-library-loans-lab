# W2 · Worksheet

จดสั้นๆ ก็พอ นี่ไม่ใช่รายงานประชุมคณะกรรมการห้องสมุด

## Setup

- VS Code / Copilot version:
- Harness:
- Model (ใช้ Auto ให้จด Auto; model จริงถ้าเห็น):
- เริ่มต้น tests: ___ ผ่าน / ___ ทั้งหมด

## 2.1 · Sort your list

| ประโยค | chat / prompt / repo rule / scoped rule / W3 skill / W4 agent |
|---|---|
| | |
| | |
| | |
| | |
| | |

## 2.2 · Save the ask

- prompt file:
- input 1 / ผล:
- input 2 / ผล:
- run จริง / not run (เหตุผล):

## 2.3 · Repo rules

- กฎเงิน / เหตุผล / path:
- กฎเวลา / เหตุผล / path:
- กฎ migration / เหตุผล / path:
- กฎตรวจหลังแก้โค้ด / เหตุผล / คำสั่ง test ที่เกี่ยวข้อง:

## 2.4 · ได้รับกฎแล้ว ทำตามด้วยหรือไม่

Refactor `countChargeableDays` ครั้งเดียว โดยเปิดกฎไว้ตลอด
เมื่อจบให้ Undo เฉพาะ refactor ของข้อนี้ โดยไม่ลบงานเดิม
ไม่เห็นใน References อย่างเดียว ยังไม่สรุปว่าไม่ได้รับกฎ

- หลักฐานการแนบกฎจาก References / System prompt / ตรวจไม่ได้:
- ไฟล์ที่ Copilot เปิดอ่านระหว่างทำงาน:
- คำสั่ง test และผลจริง / เหตุผลที่ไม่ได้รัน:
- diff คงพฤติกรรมเดิมและไม่แก้ test หรือ function อื่นหรือไม่:

- เมื่อขอใช้ `new Date()` Copilot ทำอย่างไร:
- [ ] ไม่เหลือการแก้โค้ดจากการทดลองนี้

ถ้า Copilot รัน test แต่ไม่มีหลักฐานการแนบกฎ ให้บันทึกทั้งสองอย่างแยกกัน ไม่สรุปว่าได้รับกฎแน่นอน

## 2.5 · Path-scoped

| Edit | repo instructions included? | test instructions included? | ผลใน diff |
|---|---|---|---|
| `tests/loans.test.js` | | | |
| `api/status.js` | | | |

tests หลังเพิ่มหนึ่ง test: ___ ผ่าน / ___ ทั้งหมด

## 2.6 · Scorecard

1 = ผ่าน, 0 = ไม่ผ่าน, ? = หลักฐานไม่พอ ห้ามเปลี่ยน ? เป็นผ่านเอง

| Task | ON | OFF (เฉพาะ 1–2) | หลักฐานจาก diff |
|---|---|---|---|
| 1 Reminder fee / Money | | | |
| 2 Audit / clock | | | |
| 3 Replacement fee / Money | | ไม่รัน | |
| 4 New migration | | ไม่รัน | |
| 5 Health / clock | | ไม่รัน | |

- ON ทั้งห้างาน: ___/5 (มี ? ให้จดว่ายังไม่ครบ)
- เทียบเฉพาะ tasks 1–2: ON ___/2, OFF ___/2
- ON เห็น repo instructions ใน References หรือไม่:
- model/harness/source เหมือนเดิมหรือไม่:
- context ต่างกันที่จำนวนงาน; confound อื่นที่ยังควบคุมไม่ได้:
- คืนชื่อ **ทั้งสอง** ไฟล์แล้ว: [ ]
- ไม่มี source edit จากการวัดค้าง: [ ]

## 2.7 · เทียบกฎกับผล review

- โค้ด `count * 19.9` ขัดกับกฎเรื่องเงินอย่างไร:
- ผลจริง: ทักเรื่อง Money/สตางค์ / ไม่ทักเรื่องนี้ / ยังไม่ได้สาธิต Copilot review:
- ถ้ามี review ให้จดว่า comment พูดว่าอะไร และดูจาก PR หรือภาพผลจริง:

การไม่มีผล review ให้ดูไม่ใช่ผลว่า “Copilot ไม่ทัก”

## คุยสรุป

- กฎข้อไหนควรมี test หรือเครื่องมือช่วยตรวจเพิ่ม:
- ต่อไปไม่ต้องพิมพ์อะไรซ้ำ:
- ขั้นตอนทำงานที่เก็บไว้ทำ skill ใน W3:
