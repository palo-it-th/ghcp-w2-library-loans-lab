module.exports = {
  test: require("node:test"),
  describe: require("node:test").describe,
  assert: require("node:assert/strict"),
  Library: {
    ...require("../src/money.js"),
    ...require("../src/clock.js"),
    ...require("../src/loans.js"),
    ...require("../api/status.js"),
  },
};
