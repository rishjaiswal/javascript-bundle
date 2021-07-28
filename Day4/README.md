## JavaScript Day-4

- Function with its lexical environment or function bundled with its lexical scope.
- In JS, you can pass a function as argument to another function. You can also return a function out of another function
- When you return a function, closure is returned i.e. function with its lexical scope is returned.

    function k() {
        var b = 9;
        function x() 
        {
            var a =7;
            function y() 
            {
                console.log(a,b);
            }
            y();
        }
        return x;
    }
    var z = k();
    console.log(z);
    // It remembers lexical scope due to closure concept 
    z();                            // print value of a,b



### Uses of closure:
1. Module Design Pattern
2. Currying
3. Function like once
4. Memoize
5. Maintaining state in async world
6. setTimeouts
7. Iterators
