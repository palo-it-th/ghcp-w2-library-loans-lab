(function (root, factory) {
  const logger = factory();
  if (typeof module === 'object' && module.exports) module.exports = logger;
  else (root.Library = root.Library || {}).logger = logger;
})(this, function () {
  return Object.freeze({
    info: (...values) => console.info(...values),
  });
});