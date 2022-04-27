const calculator = require('./calculator');

const x = 18;
const y = 5;

test (`Add numners using add method`, () => {
    expect(calculator.add(x,y)).toBe(23)
});

test('Subtract numbers using the subtract method', () => {
    expect(calculator.subtract(x, y)).toBe(13)
});

test('Multiply numbers using the multiply method', () => {
    expect(calculator.multiply(x, y)).toBe(90)
});

test('Divide numbers using the divide method', () => {
    expect(calculator.divide(x, y)).toBe(3.6)
});

test('Find the remainder of dividing numbers using the modulo method', () => {
    expect(calculator.modulo(x, y)).toBe(3)
});