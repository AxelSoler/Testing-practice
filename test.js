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
});

test('no word to be empty', () => {
  expect(reverseString('')).toBe('');
});

test('diferent characters to return it reversed', () => {
  expect(reverseString('18/9^(dW&')).toBe('&Wd(^9/81');
});

const calculator = require('./calculator');

describe('add', () => {
  
  test('1+2 to be 3', () => {
    expect(new calculator().add(1, 2)).toBe(3);
  });

  test('0+0 to be 0', () => {
    expect(new calculator().add(0, 0)).toBe(0);
  });

  test('5489+203 to be 5692', () => {
    expect(new calculator().add(5489, 203)).toBe(5692);
  });

  test('0.5+ 0.6 to be 1.1', () => {
    expect(new calculator().add(0.5, 0.6)).toBe(1.1);
  });
});

describe('substract', () => {
  
  test('4-3 to be 1', () => {
    expect(new calculator().subtract(4, 3)).toBe(1);
  });

  test('0-0 to be 0', () => {
    expect(new calculator().subtract(0, 0)).toBe(0);
  });

  test('4-30 to be -26', () => {
    expect(new calculator().subtract(4, 30)).toBe(-26);
  });
})

describe('divide', () => {
  
  test('4/4 to be 1', () => {
    expect(new calculator().divide(4, 4)).toBe(1);
  });

  test('0/15 to be 0', () => {
    expect(new calculator().divide(0, 15)).toBe(0);
  });

  test('40/-4 to be -26', () => {
    expect(new calculator().divide(40, -4)).toBe(-10);
  });

  test('40/0.1 to be 400', () => {
    expect(new calculator().divide(40, 0.1)).toBe(400);
  });
})

describe ('multiply', () => {
  test('4*4 to be 16', () => {
    expect(new calculator().multiply(4, 4)).toBe(16);
  });

  test('0*0to be 0', () => {
    expect(new calculator().multiply(0, 0)).toBe(0);
  });

  test('10*-5 to be -50', () => {
    expect(new calculator().multiply(10, -5)).toBe(-50);
  });

  test('-5*10 to be -50', () => {
    expect(new calculator().multiply(-5, 10)).toBe(-50);
  });
})

const capitalize = require('./capitalize');

describe('capitalize', () => {
  test('hello to be Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  
  test('no word to be empty', () => {
    expect(capitalize('')).toBe('');
  });
  
  
  test('microverse to be Microverse', () => {
    expect(capitalize('microverse')).toBe('Microverse');
  });
  
  test('Axel to be Axel', () => {
    expect(capitalize('Axel')).toBe('Axel');
  });

  test('45 to be 45', () => {
    expect(capitalize('45')).toBe('45');
  });
});