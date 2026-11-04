(function (root, factory) {
  const api = factory(typeof module === 'object' && module.exports
    ? { ...require('./money.js'), ...require('./clock.js') }
    : root.Library);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else Object.assign(root.Library, api);
})(this, function ({ Money, systemClock }) {
  function calculateLateFee(daysLate) {
    return Money.satang(550).times(daysLate);
  }

  function buildFeeReceipt(daysLate, clock = systemClock) {
    return {
      totalSatang: calculateLateFee(daysLate).value,
      createdAt: clock.now().toISOString(),
    };
  }

  function canRenew(renewalCount, hasReservation) {
    if (!Number.isSafeInteger(renewalCount) || renewalCount < 0) {
      throw new RangeError('renewalCount must be a non-negative safe integer');
    }
    if (typeof hasReservation !== 'boolean') throw new TypeError('hasReservation must be boolean');
    return !hasReservation && renewalCount <= 2;
  }

  function countChargeableDays(dueDate, returnDate) {
    function parseDay(value) {
      if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        throw new RangeError('Use YYYY-MM-DD dates');
      }
      const instant = Date.parse(value + 'T00:00:00.000Z');
      if (!Number.isFinite(instant) || new Date(instant).toISOString().slice(0, 10) !== value) {
        throw new RangeError('Use valid calendar dates');
      }
      return instant;
    }
    return Math.max(0, (parseDay(returnDate) - parseDay(dueDate)) / 86400000);
  }

  return { calculateLateFee, buildFeeReceipt, canRenew, countChargeableDays };
});
