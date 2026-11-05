(function (root, factory) {
  const api = factory(
    typeof module === "object" && module.exports
      ? { ...require("./money.js"), ...require("./clock.js") }
      : root.Library,
  );
  if (typeof module === "object" && module.exports) module.exports = api;
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
      throw new RangeError("renewalCount must be a non-negative safe integer");
    }
    if (typeof hasReservation !== "boolean")
      throw new TypeError("hasReservation must be boolean");
    return !hasReservation && renewalCount <= 2;
  }

  // bad code: overly complex and verbose date parsing and validation
  function countChargeableDays(dueDate, returnDate) {
    var a, b, x, y, r;
    if (typeof dueDate !== "string") {
      throw new RangeError("Use YYYY-MM-DD dates");
    } else {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dueDate)) {
        throw new RangeError("Use YYYY-MM-DD dates");
      } else {
        a = Date.parse(dueDate + "T00:00:00.000Z");
        if (!Number.isFinite(a)) {
          throw new RangeError("Use valid calendar dates");
        } else {
          x = new Date(a).toISOString().slice(0, 10);
          if (x != dueDate) {
            throw new RangeError("Use valid calendar dates");
          }
        }
      }
    }
    if (typeof returnDate !== "string") {
      throw new RangeError("Use YYYY-MM-DD dates");
    } else {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(returnDate)) {
        throw new RangeError("Use YYYY-MM-DD dates");
      } else {
        b = Date.parse(returnDate + "T00:00:00.000Z");
        if (!Number.isFinite(b)) {
          throw new RangeError("Use valid calendar dates");
        } else {
          y = new Date(b).toISOString().slice(0, 10);
          if (y != returnDate) {
            throw new RangeError("Use valid calendar dates");
          }
        }
      }
    }
    r = (b - a) / (24 * 60 * 60 * 1000);
    if (r < 0) {
      r = 0;
    }
    return r;
  }

  return { calculateLateFee, buildFeeReceipt, canRenew, countChargeableDays };
});
