console.log("Sixth Java Script Program of Execution");

a(); // Difference is Hoisting
// b(); // It is not a function at the time of initialistion
console.log(b);

// 1.Function Statement aka Declaration
function a() {
    console.log("Calling a!!");
}
a();


// 2. Function Expression
// We can assign a function to a variable. Function acts like a value.

var b = function () {
    console.log("Caling b!!");
}
b();

// 3.Function Declaration is same as Function Statement


// 4.Anonymous Function (without a function name) (does not have own identity)
// It is used as where we can used a value.
var c = function () {
    console.log("Calling c !!")
}
c();


// 5. Named Function Expression 
var d = function xyz() {
    console.log("Calling xyz !!")
    console.log(xyz);
    
}
d();
// xyz(); // Uncaught ReferenceError: xyz is not defined
// Since it has a local scope.


// Difference between parameters and arguments
// Arguments - Passing value to function
// Parameters - Defined in the Method Declaration


// 6.First class functions - Abitily to use function as a value
// Function can pass as a arguments as a value

var x = function(param) {
    console.log(param);
}

function anshu(){
    console.log("Anhsu Jaiswal");
}

x(anshu);

// Return value as a function
var x = function (){
    return function xyz() {

    }
}
console.log(x);

// 7.First Class Citizens aka First Class Functions




