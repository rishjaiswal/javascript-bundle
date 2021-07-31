# Higher Order Functions

- A function that takes another function as an argument or returns a
function from it is called a higher order function.

    function x() {
    console.log(“Namaste”);
    }
    function y(x) {
    x();
    }

- y : higher-order function, x : callback function
- Advantages of functional programming; 
1) Reusability
2) Modularity
3) Passing a function into another function as an argument


NOTE: 
setTimeout() function does not always print the result exactly after the expiration of the timer . 
There may be a case where there are a million lines of code and the GEC is still running. 
Even though the callback has already been passed into the callback queue but it will not be pushed to the call stack by the Event Loop as the call stack is not empty because GEC is still running. 
So, in this case, it may take more time than that of the timer to print. This is also called as the concurrency model of JS.