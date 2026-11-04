(function ({ test, assert, Library }) {
  const { Money, fakeClock } = Library;

  test('ten plus twenty satang is exactly thirty', () => {
    assert.equal(Money.satang(10).plus(Money.satang(20)).value, 30);
  });

  test('money is formatted only for display', () => {
    assert.equal(Money.satang(1650).format(), '16.50 THB');
  });

  test('invalid money is rejected', () => {
    for (const value of [-1, 0.3, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1]) {
      assert.throws(() => Money.satang(value), RangeError);
    }
  });

  test('unsafe arithmetic is rejected', () => {
    assert.throws(() => Money.satang(Number.MAX_SAFE_INTEGER).times(2), RangeError);
    assert.throws(() => Money.satang(Number.MAX_SAFE_INTEGER).plus(Money.satang(1)), RangeError);
    assert.throws(() => Money.satang(10).plus(20), TypeError);
  });

  test('money values cannot be changed', () => {
    assert.equal(Object.isFrozen(Money.satang(550)), true);
  });

  test('fake clocks return fresh dates at the same instant', () => {
    const clock = fakeClock('2026-11-04T03:00:00.000Z');
    clock.now().setUTCFullYear(2000);
    assert.equal(clock.now().toISOString(), '2026-11-04T03:00:00.000Z');
    assert.throws(() => fakeClock('not-a-date'), RangeError);
  });
})(typeof module === 'object' && module.exports ? require('./harness.cjs') : window.TestKit);
