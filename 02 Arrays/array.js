console.log("Arrays Tutorials !!");

// We can use the brackets [] operator to address a specific cell in our array. 
// Addressing uses zero-based indices

var myArray = [1, 2, 3];
var theSameArray = new Array(4, 5, 6);

console.log(myArray[1]);           // prints out 2
console.log(theSameArray[1]);      // prints out 5

// Arrays in JavaScript are sparse, meaning that we can also assign variables 
// to random locations even though previous cells were undefined.

var myArray = [];
myArray[3] = "hello";
myArray[6] = "Rishabh";
console.log(myArray);

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log(myArray[6]);
console.log(myArray[7]);
console.log(myArray[8]);


// JavaScript Arrays are just special kinds of objects, 
// you can have elements of different types stored together in the same array

var myArray = ["What is the meaning of life?", 42, true, {}];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);


// Arrays can also function as a stack. 
// The push and pop methods insert and remove variables from the end of an array.


var myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);


// The unshift and shift methods are similar to push and pop, 
// only they work from the beginning of the array. 
// We can use the push and shift methods consecutively to utilize an array as a queue
var myQueue = [];
myQueue.push(4);
myQueue.push(5);
myQueue.push(6);
console.log(myQueue);

// The shift keyword will remove the variables of the array in the exact order 
// they were inserted in.
console.log(myQueue.shift());
console.log(myQueue);
console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue);

//The unshift method is used to insert a variable at the beginning of an array

myQueue.push("Stack Push");
myQueue.unshift("Queue Push");
myQueue.unshift("Array Examples");
console.log(myQueue);


// Splicing arrays in JavaScript removes a certain part from an array to create a new array, 
// made up from the part we took out.

var myArray = [0,1,2,3,4,5,6,7,8,9];

// To remove the five numbers from the  array beginning from the 3rd index.
var splice = myArray.splice(3,5);  

console.log(splice);        // will print out 3,4,5,6,7
console.log(myArray);       // will print out 0,1,2,8,9
