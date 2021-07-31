console.log("Seventh Java Script Program of Execution");

// 1.What is callback function in javascript

setTimeout(function () {
    console.log("timer");
},5000);

// y(); // Uncaught ReferenceError: y is not defined
x(function() { }); // Print x only 
x(function y() {   // Print x and y as well
    console.log("y");
});

function x(y){
    console.log("x");
    y();
}

// 2. Javasript is synchronous and single-threaded language

/*
Since JS is synchronous and single threaded language which will execute the
set of instructions/code sequentially until previous sequence code is not executed
With the Help of callback we can do asynchronous operations
*/

// 3. Blocking the main thread

/*
Any operation blocking the call stack is known as blocking the main thread.
*/

// 4. Power of Call backs ?

/*
Using callback functions, asynchronous operations can be achieved.
*/

// 5. Deep about Event Listneres

document.getElementById("clickMe").
addEventListener("click",function xyz()  // Here xyz callback function put in callstack
{
    console.log("Clicked Button");
});

// 6.Closures Demo with Event Listeneres

function closureEvent() {
console.log("Closure Function");
let count =0;
document.getElementById("clickMe").
addEventListener("click",function xyz() 
{
    console.log("Clicked Button", ++ count);
});
}
closureEvent();
// console.log(count);  // ReferenceError: count is not defined


// 7.Scope Demo with Event Listneres

/*
They have closures  and Global Scope
*/

// 8.Garbage collection and remove Event Lisners

/*
- EventListeners are heavy. They take memory and form closure with the functions even when the call stack is empty
- On removing the EventListeners, all the values/functions held by it will be garbage collected.
*/