const calculator = require('./calculator');

const x = 3;
const y = 2;
// Unused const
const z = 23;

test (`Add numners using add method`, () => {
    expect(calculator.add(x,y)).toBe(5)
});

test('Subtract numbers using the subtract method', () => {
    expect(calculator.subtract(x, y)).toBe(1)
});

test('Multiply numbers using the multiply method', () => {
    expect(calculator.multiply(x, y)).toBe(6)
});

test('Divide numbers using the divide method', () => {
    expect(calculator.divide(x, y)).toBe(1.5)
});

test('Find the remainder of dividing numbers using the modulo method', () => {
    expect(calculator.modulo(x, y)).toBe(1)
});

test('Find x squared y using the squared method', () => {
    expect(calculator.squared(x, y)).toBe(9)
});