function add(x, y){
    return (x + y)
}

function subtract(x, y){
    return (x - y)
}

function multiply(x, y){
    return (x * y)
}

function divide(x, y){
    return (x / y)
}

function increment(n){
    return (n +1)
}

function decrement(n){
    return (n -1)
}

function makeInt(n) {
    return parseInt(n, 10);
}

// Example usage:
console.log(makeInt("42"));   // 42
console.log(makeInt("3.14")); // 3
console.log(makeInt("abc"));  // NaN


function preserveDecimal(n) {
    return parseFloat(n);
}

// Example usage:
console.log(preserveDecimal("3.14")); // 3.14
console.log(preserveDecimal("42"));   // 42
console.log(preserveDecimal("abc"));  // NaN
console.log(preserveDecimal("3.14abc")); // 3.14 (parses until the first invalid character)
