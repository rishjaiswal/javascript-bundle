## JavaScript Day-1 a)

- Everything in a JS happens inside an execution context.
- Execution context: like a big box or container where whole the whole JS code is executed.
- It has 2 components; memory component- Variable
Environment (variables and functions are stored in key-value pairs) and Code
component -Thread of execution (where the codes are executed line by line)

So, JS is a synchronous and single-threaded language.
Codes are executed sequentially and JS’s compiler will move to the next line one by one once the current line has been executed


## JavaScript Day-1 b)

When you run a program in JS, an execution context is created.
Steps during execution of a JS program;
Step 1 – Memory Allocation Phase
Step 2 – Code Execution Phase


Ex. Of a JS code

    var n=2;
    function square(num){
    var ans = num*num;
    return ans;
    }
    var square2 = square(n);
    var square4 = square(4);


In case of many functions within a function, JS does it very beautifully. It does it by a call stack
which holds GEC (Global Execution Context) at the bottom of it. Once the work of E1 is over,
it is popped out of the stack and the control moves to the GEC.
Call stack is created for managing (creation and deletion) the execution context. The call stack
gets empty, once the entire execution is done. So, Call stack maintains the order of execution
of the execution contexts.

## JavaScript Day-1 c)


Hoisting is a concept in JS where you can access the values of variables and functions even before initialising them. There’ll be no error in this case.

If the value of a variable is not given at all, during the execution JS will throw a reference Error.
A function behaves as a variable in the following examples and initially;

    var getName = () => {
    }

    var gerName2 = function ()


## JavaScript Day-1 d)

Function Invocation and variable environment in JS

    var x = 1;
    a();
    b();
    Console.log(x);
    Function a() {
    var x = 10;
    console.log(x);
    }
    Function b() {
    var x =100;
    console.log(x);
    }

Output: 10 100 1 [ follow the context of execution ]


## JavaScript Day-1 e)

Shortest JS program  empty file

this  global object(window) [ this ===window; output: true]
Window is a global object which is created along with the Global Execution context along with ‘this’. 


All JS engines create the window object. In case of browser, it is known as window.

Global Space  variable not inside any function [By default, JS compiler looks for variables in
global space first]

So, variables and functions in global space are objects of window.

    var a = 10;
    function b() {
    var x = 10;
    }
    Console.log(window.a);
    Console.log(a);
    Console.log(this.a);


output: 
10
10
10