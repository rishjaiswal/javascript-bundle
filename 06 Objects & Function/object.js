console.log("Object Tutorials !!");



var emptyObject = {};
var personObject = {
    firstName : "John",
    lastName : "Smith"
}

// Members of objects can be addressed using the brackets operator [], very much like arrays
// Like many other object oriented languages, the period . operator can also be used. 

personObject.age = 23;
personObject["salary"] = 14000;
personObject["address"];

for (var member in personObject)
{
    if (personObject.hasOwnProperty(member))
    {
        console.log("the member " + member + " of personObject is " + personObject[member])
    }
}


// To define a named function, we use the function statement

function greet(name)
{
    return "Hello " + name + "!";
}

console.log(greet("Rishabh Jaiswal"));      // prints out Hello Rishabh Jaiswal!



// To define an anonymous function, we can alternatively use the following syntax

var greet = function(name)
{
    return "Hello " + name + "!";
}

console.log(greet("RJ"));      // prints out Hello RJ!