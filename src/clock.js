(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else Object.assign(root.Library = root.Library || {}, api);
})(this, function () {
  const systemClock = Object.freeze({ now: () => new Date() });

  function fakeClock(iso) {
    const instant = Date.parse(iso);
    if (!Number.isFinite(instant)) throw new RangeError('fakeClock needs a valid ISO date');
    return Object.freeze({ now: () => new Date(instant) });
  }

  return { systemClock, fakeClock };
});
