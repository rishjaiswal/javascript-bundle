console.log("Operator Tutorials !!");

// The + (addition) operator is used for both addition and concatenation of strings.

var a = 1;
var b = 2;
var c = a + b;     // c is now equal to 3
console.log(c);

// The addition operator is used for concatenating strings to strings, 
// strings to numbers, and numbers to strings


var name = "John";
console.log("Hello " + name + "!");
console.log("The meaning of life is " + 42);
console.log(42 + " is the meaning of life");

// JavaScript behaves differently when you are trying to combine two operands of different type
// The default primitive value is a string, so when you try to add a number to a string, JavaScript 
// will transform the number to a string before the concatenation.

console.log(1 + "1");   // outputs "11"



console.log(3 - 5);     // outputs -2
console.log(3 * 5);     // outputs 15
console.log(3 / 5);     // outputs 0.6


console.log(5 % 3);     // outputs 2

var myNumber = 6;
console.log(myNumber);
console.log(myNumber /= 2);
console.log(myNumber);