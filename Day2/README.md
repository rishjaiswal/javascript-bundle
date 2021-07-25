## JavaScript Day-2 a)

- JS is a loosely-typed language. A variable has flexibility of storing values of different data-type
- It’s not advisable to assign “Undefined” to any variable


## JavaScript Day-2 b)

- Whenever an Execution context is created, a lexical environment is also created.
Lexical Environment = local memory + lexical environment of its parent
- Lexical means in hierarchy, in a sequence. In the above code, function c() is lexically present
within function a() and a() is lexically present in the global scope.
- Scope Chain: The way of finding variable in previous lexical environments is called scope chain. 

## JavaScript Day-2 c)

- Let and const. declarations are hoisted but their way of hoisting is very different than of the
declaration of var.
- Unlike in var, let and const. are assigned memory by the compiler initially (they are now storing ‘undefined’) but they are not global objects. They are not stored in the scope of GEC but their scope (called script) is different. So, they cannot be accessed before initialisation.
- Temporal dead zone is the period of time between hoisting a variable with let data type and assigning
value to it. Refer to Eg.1, when the control goes from line 2 to line 3, the variable ‘a’ loses its temporal
dead zone. The variable with data type const. also goes through temporal deadzone.
- Whenever we try to access a variable in temporal dead zone, it gives Reference Error. This type of
error also occurs in the case when the we try to access a variable nowhere defined in the program
- Any variable in the global scope (with data type var) can be accessed through this command : 
    window.object 
or 
    this.b. 
Assigning value to an already initialised variable gives syntax error. 
- const variable should be assigned a value during the time of declaration, otherwise the compiler will
throw a Syntax Error.  If a const. variable is reassigned the value(case duplicate declaration even with
variable having let datatype), then the compiler throws a Type Error. Accessing variables even before
their declaration(in case of let data type) , JS engine throws a Reference Error. 
This error also occurs
in the case when the variable is nowhere declared in the program.
- Use const. whenever you want to assign value to a variable which will not change its value. Const.
data type is the most-strict of other data types used in JS. Then the preferred data type is Let.
- To avoid unnecessary errors, it is advisable to put initialisation and declaration at the top of the
program. So, it helps in shrinking of the temporal dead zone.

    Level of strictness: var < let< const

Data Type Re-declare (in same scope) Re-initialise Temporal Deadzone Memory
- var  : Yes Yes No Global
- let  : No(Syntax Err.) Yes Yes Separate(Ref. Error)
- const : No(Syntax Err.) No(Type Error) Yes Separate (Ref. Error)