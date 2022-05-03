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
const calculator = require('./calculator');

test('hello to be olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
})

test('no word to be empty', () => {
  expect(reverseString('')).toBe('');
})

test('diferent characters to return it reversed', () => {
  expect(reverseString('18/9^(dW&')).toBe('&Wd(^9/81');
})

const calculator1 = require('./calculator');

describe('add', () => {
  
  test('1+2 to be 3', () => {
    expect(new calculator1().add(1, 2)).toBe(3);
  });

  test('0+0 to be 0', () => {
    expect(new calculator1().add(0, 0)).toBe(0);
  });

  test('5489+203 to be 5692', () => {
    expect(new calculator1().add(5489, 203)).toBe(5692);
  });

  test('0.5+ 0.6 to be 1.1', () => {
    expect(new calculator1().add(0.5, 0.6)).toBe(1.1);
  });
});

describe('substract', () => {
  
  test('4-3 to be 1', () => {
    expect(new calculator1().subtract(4, 3)).toBe(1);
  });

  test('0-0 to be 0', () => {
    expect(new calculator1().subtract(0, 0)).toBe(0);
  });

  test('4-30 to be -26', () => {
    expect(new calculator1().subtract(4, 30)).toBe(-26);
  });
})

describe('divide', () => {
  
  test('4/4 to be 1', () => {
    expect(new calculator1().divide(4, 4)).toBe(1);
  });

  test('0/15 to be 0', () => {
    expect(new calculator1().divide(0, 15)).toBe(0);
  });

  test('40/-4 to be -26', () => {
    expect(new calculator1().divide(40, -4)).toBe(-10);
  });

  test('40/0.1 to be 400', () => {
    expect(new calculator1().divide(40, 0.1)).toBe(400);
  });
})

describe ('multiply', () => {
  test('4*4 to be 16', () => {
    expect(new calculator1().multiply(4, 4)).toBe(16);
  });

  test('0*0to be 0', () => {
    expect(new calculator1().multiply(0, 0)).toBe(0);
  });

  test('10*-5 to be -50', () => {
    expect(new calculator1().multiply(10, -5)).toBe(-50);
  });

  test('-5*10 to be -50', () => {
    expect(new calculator1().multiply(-5, 10)).toBe(-50);
  });
})

  
