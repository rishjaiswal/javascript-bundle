console.log("Callback Tutorials !!");

// Callback is a important feature of asynchronous programming, and it enables the function that receives the 
// callback to call our code when it finishes a long task, while allowing us to continue the execution of the code.

var callback = function() {
    console.log("Done!");
}

setTimeout(callback, 5000);

// also possible to define callbacks as anonymous functions,
setTimeout(function() {
    console.log("Done!");
}, 5000);


function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },1000);
}

x();