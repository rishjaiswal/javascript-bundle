console.log("Fourth Java Script Program of Execution");

// Function along with its lexical scope bundle together forms a  Closure
// Simple Example of closure

function x1() {
    var a = 9;
    function y1() {
        console.log(a);
    }
    y1();
}
x1();
// Uncaught ReferenceError: a is not defined
// console.log(a);



// Variable assignement as a function

function x2() {
    var a1 = function y2() {
        console.log(a1);
    }
    console.log(a1);
}
x2();



/* Function as a parameter

x1(function y3() {
    console.log(a);
});

*/



// Function as a return value (along with lexical scope)

function x() {
    var a = 9;
    // We can directly return as well e.g- return function y() { }
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
// It remembers lexical scope due to closure concept 
z();                            // print value of a i.e. 9 




function m() {
    var k = 9;
    // We can directly return as well e.g- return function y() { }
    function l() {
        console.log(k);
    }
    k = 100;
    return l;
}
var z = m();
console.log(z);
// It remembers lexical scope due to closure concept 
z();                            // print value of a i.e. 9 


