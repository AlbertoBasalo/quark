import { sayHello, sum } from "./main";

describe("hello", () => {
  it("sayHello function exists", () => {
    expect(sayHello).toBeDefined();
  });
});

describe("the sum function", () => {
  const sut = sum;
  it("should sum numbers", () => {
    const actual = sut(1, 2);
    const expected = 3;
    expect(actual).toBe(expected);
  });
  it("should return the second number if the first is 0", () => {
    const actual = sut(0, 2);
    const expected = 2;
    expect(actual).toBe(expected);
  });
});
