## JavaScript Day-3 

- Blocks are area where codes are enclosed in curly {} brackets. 
They are also called compound statements. Its purpose is to group multiple statements at one place where JS engine expects one statement.
- Block Scope means the variables and functions that can be accessed inside a block. It also follows lexical scope.
- let and const are block scoped as they can’t be accessed outside of the block where they are declared.
- In case of variables with same name and data type, when we write a print statement inside/outside the block, the variable present in the block shadows(and modifies) its global counterpart and prints the value present in block. This concept is called shadowing. This occurs because variable ‘a’ is present in the global scope not in the block scope.

    var b=100;     // global scope
    const c = 120;  // separate memory (script)
    {
    var a = 10;
    let b =20;       // global scope
    const c = 30; 
    console.log(b); 
    console.log(c); 
    } 
    console.log(b);
    console.log(c);

NOTE : As soon as the control goes out of the block scope, its memory allocation in call stack is destroyed and the values either in global scope / script space shadow the values in block scope. This concept is still valid in case of functions.

