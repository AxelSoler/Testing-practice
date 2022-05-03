const stringhLength = require('./stringLength');

test('hola to be 4', () => {
  expect(stringhLength('hola')).toEqual(4);
});