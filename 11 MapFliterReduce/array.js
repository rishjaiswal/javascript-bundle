console.log("Map, Reduce, and Filter - JS Array Functions Tutorials !!");

// We can use the brackets [] operator to address a specific cell in our array. 
// Addressing uses zero-based indices

var myArray = [1, 2, 3];
console.log(myArray);

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
console.log(students);

console.log("Map Operations");
var output = myArray.map(x => x * 2);
console.log(output);

console.log(students.map((x) => x.name + x.grade ));


console.log("Filter Operations");
var output = myArray.filter(item => item % 2 === 0);
console.log(output);


const studentGrades = students.filter(student => student.grade >= 90);
console.log(studentGrades);



console.log("Reduce Operations");
// accumulator (max) - the returned value of the previous iteration
// currentValue - the current item in the array
var output = myArray.reduce(function(max,curr){
if(curr> max)
    max = curr;
return max;
},0);
console.log(output);

var output = students.reduce(function(max,curr){
if(curr.grade> max)
    max = curr;
return max;
},0);
console.log(output);
console.log(output.name);
console.log(output.grade);