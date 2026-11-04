const daysInput = document.getElementById('days');
const checkout = document.getElementById('checkout');
const receipt = document.getElementById('receipt');
function validDays() {
  return daysInput.value !== '' && daysInput.checkValidity();
}
daysInput.oninput = () => {
  const valid = validDays();
  checkout.disabled = !valid;
  document.getElementById('error').textContent = valid ? '' : 'กรอกจำนวนเต็ม 0–365 วัน';
  document.getElementById('total').textContent = valid
    ? Library.calculateLateFee(daysInput.valueAsNumber).format() : '—';
  receipt.textContent = 'จำนวนวันเปลี่ยนแล้ว ออกใบเสร็จใหม่ได้เลย';
};
checkout.onclick = () => {
  if (!validDays()) {
    daysInput.reportValidity();
    return;
  }
  receipt.textContent = JSON.stringify(Library.buildFeeReceipt(daysInput.valueAsNumber), null, 2);
};
