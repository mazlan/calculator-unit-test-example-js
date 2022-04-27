function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function squared(a, b) {
    return a ** b;
}

//Commented out function
//function add_then_sub(a, b) {
//    return a + b - a + b;
//}

function bad_code(a, b) {
    const c = 99;
    if (true) {
        return a + b;
    }
    return a - b;
}

module.exports.add = add;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.modulo = modulo;
module.exports.bad_code = bad_code;