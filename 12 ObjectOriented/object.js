console.log("JS Object Oriented Tutorials !!");

// Array of objects
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
console.log(students);
console.log(students[0]);


var personObject = {
    firstName : "John",
    lastName : "Smith"
}

// Members of objects can be addressed using the brackets operator [], very much like arrays
// Like many other object oriented languages, the period . operator can also be used. 

personObject.age = 23;
personObject["salary"] = 14000;
personObject["address"];
console.log(personObject);

// To immediately creates an instance of the object.
console.log("Immediately creating instance");
var myPerson = {
    firstName : "John",
    lastName : "Smith",
    fullName : function()
    {
        return this.firstName + " " + this.lastName;
    }
}
console.log(myPerson.firstName);
console.log(myPerson.lastName);
console.log(myPerson.fullName());


// Creation of object using the new keyword.
console.log("Creation using new Keyword");
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

console.log("Function Context Concepts");
// Binding a method to an object
var person = {
    name : "Rishabh"
};

function printName()
{
    console.log(this.name);
}

var boundPrintName = printName.bind(person); // returns a new function
boundPrintName();    // prints out "Rishabh")


// Calling a function with a different context

printName.call(person); 


// call/apply vs bind
printName.apply(person);

var boundPrintName = printName.call(person);    //boundPrintName gets printName's return value (null)
console.log(boundPrintName); // Undefined
//boundPrintName();    // boundPrintName is not a function

printName.bind(person)();   //executes the function returned by bind