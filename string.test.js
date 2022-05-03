const stringhLength = require('./stringLength');

test('hello to be 5', () => {
  expect(stringhLength('hello')).toEqual(5);
});

test('A to be 1', () => {
  expect(stringhLength('A')).toEqual(1);
});

test('Microverse to be 10', () => {
  expect(stringhLength('Microverse')).toEqual(10);
});

test('no word to throw an error', () => {
  expect(() => stringhLength('').toThrow(Error));
});

test('Microverses to throw an error', () => {
  expect(() => stringhLength('Microverses').toThrow(Error));
});

const reverseString = require('./reverseString');

test('hello to be olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
})

test('no word to be empty', () => {
  expect(reverseString('')).toBe('');
})

test('diferent characters to return it reversed', () => {
  expect(reverseString('18/9^(dW&')).toBe('&Wd(^9/81');
})