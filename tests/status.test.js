(function ({ test, assert, Library }) {
  test('the library is ready', () => {
    assert.deepEqual(Library.getStatus(), { status: 'ready' });
  });
})(typeof module === 'object' && module.exports ? require('./harness.cjs') : window.TestKit);
