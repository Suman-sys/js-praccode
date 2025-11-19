let a = 5, b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);

// Array Destructuring

let c = 5, d = 10;

[c, d] = [d, c];

console.log(c, d);