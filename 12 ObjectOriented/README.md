# JavaScript Object Oriented & Function Context 

-  JavaScript uses functions as classes to create objects using the new keyword

    function Person(firstName, lastName) {
        // construct the object using the arguments
        this.firstName = firstName;
        this.lastName = lastName;

        // a method which returns the full name
        this.fullName = function() {
            return this.firstName + " " + this.lastName;
        }
    }

    var myPerson = new Person("John", "Smith");
    console.log(myPerson.fullName());            // outputs "John Smith"

- Creating an object using the new keyword is the same as writing the following code:

    var myPerson = {
        firstName : "John",
        lastName : "Smith",
        fullName : function()
        {
            return this.firstName + " " + this.lastName;
        }
    }

- The difference between the two methods of creating objects is that the first method uses a class to define the object and then the new keyword to instantiate it, and the second method immediately creates an instance of the object.

- Functions in JavaScript run in a specific context, and using the this variable we have access to it.
- Binding a method to an object : To bind a function to an object and make it an object method, we can use the bind function
- Calling a function with a different context : We can use the call and apply functions to call a function as if it was bound to an object
- The call function receives the this argument first, and afterwards the arguments of the function
- The apply function receives the this argument first, and an array of arguments to pass on to the function as a second argument to the function.