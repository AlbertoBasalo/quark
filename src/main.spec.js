import { sayHello, sum } from './main';

test('sayHello function exists', () => {
  expect(sayHello).toBeDefined();
});

describe('GIVEN the sum function', () => {
  const sut = sum;
  it('THEN should sums numbers', () => {
    const actual = sut(1, 2);
    const expected = 3;
    expect(actual).toBe(expected);
  });
});
