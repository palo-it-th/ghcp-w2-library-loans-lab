# Library Loans · กติกาทีม

## ทั้ง repo

1. **เงิน:** คิดและเก็บเป็นสตางค์จำนวนเต็มผ่าน `Money` ใน `src/money.js`
   เช่น `Money.satang(550).times(3).value` = `1650` สตางค์
   แปลงเป็นบาทเฉพาะตอนแสดงผลด้วย `.format()`
2. **เวลาปัจจุบัน:** อ่านผ่าน `clock.now()` ที่ส่งเข้ามาใน function
   ดู `buildFeeReceipt()` ใน `src/loans.js`
   `clock.now()` คืน Date; `clock.now().toISOString()` ใช้ได้
   ไม่อ่านเวลาจริงด้วย `new Date()` / `Date.now()` ใน business code
   `systemClock` ใน `src/clock.js` เป็น adapter ที่ยกเว้น
   การแปลงวันที่ที่ระบุไว้ด้วย `new Date(value)` ไม่ใช่การอ่านเวลาปัจจุบัน
3. **Migration:** ไฟล์ที่มีอยู่ถือว่า apply แล้ว ห้ามแก้หรือทับ
   ถ้าต้องเปลี่ยน schema ให้เพิ่ม migration หมายเลขถัดไป
   เหตุผล: เครื่องเก่ากับเครื่องใหม่ต้องได้ schema สอดคล้องกัน
   Workshop นี้ดู SQL เป็นข้อความ ไม่มี database ให้รัน

## เฉพาะ tests

- test ใหม่ใช้ชื่อ `given_..._when_..._then_...`
- test ที่เกี่ยวกับเวลาใช้ `fakeClock()` จาก `src/clock.js` ไม่มี sleep หรือเวลาจริง
- ไม่ต้อง rename test เดิมทั้ง repo ให้ดูผลกับ test ใหม่ที่เราขอ

## กติกาค่าปรับและการต่ออายุ

- วันคิดค่าปรับวันละ 5.50 บาท; `calculateLateFee()` รับจำนวนวันที่คิดมาแล้ว
- กติกาวันหยุดและเพดานต่ออายุยังมี ticket เปิดอยู่ใน `docs/tickets/`
  อย่าแก้สองเรื่องนั้นระหว่าง W2

กติกาเหล่านี้เป็นข้อกำหนดของแอปสมมติ ไม่ใช่ข้อจำกัดของ GitHub Copilot
