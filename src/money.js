(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else Object.assign(root.Library = root.Library || {}, api);
})(this, function () {
  class Money {
    constructor(value) {
      if (!Number.isSafeInteger(value) || value < 0) {
        throw new RangeError('Money must be a non-negative safe integer in satang');
      }
      this.value = value;
      Object.freeze(this);
    }

    static satang(value) { return new Money(value); }

    times(count) {
      if (!Number.isSafeInteger(count) || count < 0) {
        throw new RangeError('Money multiplier must be a non-negative safe integer');
      }
      return Money.satang(this.value * count);
    }

    plus(other) {
      if (!(other instanceof Money)) throw new TypeError('Money.plus needs another Money');
      return Money.satang(this.value + other.value);
    }

    format() { return (this.value / 100).toFixed(2) + ' THB'; }
  }

  return { Money };
});
