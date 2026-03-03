// calculator.tests.js
// Unit tests for calculator functions using Jest

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator.functions');

describe('Calculator Basic Operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('division by zero throws error', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('addition with negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('subtraction resulting in negative', () => {
    expect(subtract(3, 5)).toBe(-2);
  });

  test('multiplication by zero', () => {
    expect(multiply(7, 0)).toBe(0);
  });

  test('division resulting in decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  // Extended operations
  test('modulo: 5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo by zero throws error', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero');
  });

  test('power: 2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power: negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('square root: sqrt(16) = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of zero', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of negative throws error', () => {
    expect(() => squareRoot(-9)).toThrow('Square root of negative number');
  });
});
