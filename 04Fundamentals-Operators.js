// Operadores en JavaScript.

let x = 1;
let y = 2;
let z = -3;
let s = "Hello";
let t = "Daniel";
let apples = "2";
let oranges = "3";
let operation = 2 + 3 * 5;
let a, b, c;

a = b = c = "4";

console.log(x + y); // 1 + 2 = 3

x = -x;

console.log(x); // -1
console.log(s + " " + t); // Hello Daniel
console.log('1' + 2); // 12

console.log(+z); // -3

console.log(+true); // 1
console.log(+""); // 0

console.log(+apples + +oranges); // 2 + 3 = 5

console.log(operation); // 2+(3*5) = 17

console.log(a + ", " + b + ", " + c); // 4, 4, 4

// Remainder %
console.log(5 % 2); // 1

// Exponentiation **
console.log(2 ** 4); // 2 * 2 * 2 * 2 = 16

//Increment/decrement
let j = 1;
j++;
console.log(j); // 2
j--;
console.log(j); // 1
