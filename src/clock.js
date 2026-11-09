(function (root, factory) {
  const logger = typeof module === 'object' && module.exports
    ? require('./logger.js')
    : root.Library.logger;
  const api = factory(logger);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else Object.assign(root.Library = root.Library || {}, api);
})(this, function (logger) {
  const systemClock = Object.freeze({ now: () => new Date() });

  function fakeClock(iso) {
    const instant = Date.parse(iso);
    if (!Number.isFinite(instant)) throw new RangeError('fakeClock needs a valid ISO date');
    return Object.freeze({ now: () => new Date(instant) });
  }

  logger.info(systemClock);
  return { systemClock, fakeClock };
});
