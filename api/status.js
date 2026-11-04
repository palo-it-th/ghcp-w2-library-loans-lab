(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else Object.assign(root.Library = root.Library || {}, api);
})(this, function () {
  function getStatus() {
    return { status: 'ready' };
  }

  return { getStatus };
});
