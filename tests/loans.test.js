(function ({ test, assert, Library }) {
  const { calculateLateFee, buildFeeReceipt, canRenew, countChargeableDays, fakeClock } = Library;

  test('no late days means no fee', () => {
    assert.equal(calculateLateFee(0).value, 0);
  });

  test('three late days cost sixteen baht fifty', () => {
    assert.equal(calculateLateFee(3).value, 1650);
  });

  test('negative and fractional late days are rejected', () => {
    for (const days of [-1, 0.5, NaN, Infinity, '3']) {
      assert.throws(() => calculateLateFee(days), RangeError);
    }
  });

  test('the receipt reads the supplied clock', () => {
    assert.deepEqual(buildFeeReceipt(3, fakeClock('2026-11-04T03:00:00.000Z')),
      { totalSatang: 1650, createdAt: '2026-11-04T03:00:00.000Z' });
  });

  test('an unrenewed unreserved book can be renewed', () => {
    assert.equal(canRenew(0, false), true);
  });

  test('a reservation blocks renewal', () => {
    assert.equal(canRenew(0, true), false);
  });

  test('three previous renewals block another', () => {
    assert.equal(canRenew(3, false), false);
  });

  test('invalid renewal counts are rejected', () => {
    assert.throws(() => canRenew(-1, false), RangeError);
    assert.throws(() => canRenew(0, 'no'), TypeError);
  });

  test('two weekday days are chargeable', () => {
    assert.equal(countChargeableDays('2026-11-02', '2026-11-04'), 2);
  });

  test('early returns have no chargeable days', () => {
    assert.equal(countChargeableDays('2026-11-04', '2026-11-02'), 0);
  });

  test('invalid calendar dates are rejected', () => {
    assert.throws(() => countChargeableDays('2026-02-30', '2026-03-02'), RangeError);
  });
})(typeof module === 'object' && module.exports ? require('./harness.cjs') : window.TestKit);
