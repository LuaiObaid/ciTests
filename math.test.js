const { add, subtract, multiply, divide } = require('./math') // Replace with the correct path to your math functions file.

describe('Mathematical Operations', () => {
  test('Addition', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, 1)).toBe(0);
  });

  test('Subtraction', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(1, 1)).toBe(0);
  });

  test('Multiplication', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(-2, 4)).toBe(-8);
  });

  test('Division', () => {
    expect(divide(10, 2)).toBe(5);
    expect(() => divide(5, 0)).toThrow('Division by zero is not allowed.');
  });
});
