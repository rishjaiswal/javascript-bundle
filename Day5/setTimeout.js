console.log("Fifth Java Script Program of Execution");

function x(){
    var i=1;
    // Function has a closure which has a reference to i. It recalls the scope of i.
    // setTimeout (through JS Engine) stores the callback function in a different location and attach Timer and start next execution.
    setTimeout(function(){
        console.log(i);
    },1000);

    console.log("Hello JavaScript");
}

// Once timeout expires it again goes in callstack.
x();


// It will print first and then above code first.
for(var k=1; k<=5;k++){
    setTimeout(console.log(k),1000);
}

// ‘Let’ has a loop scope. So, in every iteration, ‘i’ appears as a new variable. 
// Every time the function is called, setTimeout function has a new copy of ‘i’.
function x1() {
    for (let i1 =6; i1<=10; i1++) {
        setTimeout(function(){
            console.log(i1);
        },i1*1000);
    }
}

x1();