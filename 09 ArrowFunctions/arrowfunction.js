console.log("Arrow Function Tutorials !!");

// To define an arrow function, we use the () => {} structure 
const greet = (name) => { return "Hello " + name + "!"; }

console.log(greet("Rishabh"));      // prints out Hello Rishabh!


// In case that the function only receives one argument, we can omit the parenthesis
const greet2 = name => { return "Hello " + name + "!"; }

console.log(greet2("Rishabh Jaiswal"));      // prints out Hello Rishabh Jaiswal!

//in case that we want to do a explicit return of the function and we have only one line of code, 
// we can avoid the return statement and omit brackets too
const greet3 = name => "Hello " + name + "!";

console.log(greet3("RJ"));      // prints out Hello RJ!


// Arrow functions are often used as callbacks of native JS functions like map, filter or sort. 
// The reason of their name is due to the use of => in the syntax.


let numbers = [3, 5, 8, 9, 2];

// Old way
function multiplyByTwo(number){
    return number * 2;
}

let multipliedNumbers = numbers.map(multiplyByTwo);

console.log(multipliedNumbers);              // prints out: 6, 10, 16, 18, 4

// Using ES6 arrow functions
// Using an arrow as a callback compared to a normal function
const multiplyByTwoES6 = number => number * 2;

let multipliedNumbersES6 = numbers.map(multiplyByTwoES6);

console.log(multipliedNumbersES6);              // prints out: 6, 10, 16, 18, 4