console.log("First Java Script Program of Execution")

console.log("Function call");
getName();
console.log("YOE Value");
console.log(yearsexp);
console.log("YOE Value- Global Space");
console.log(window.yearsexp);
console.log(this.yearsexp);
//console.log(x);
//console.log(y);

var yearsexp = 7;

function getName() {
    var x = 10;
    console.log("Rishabh Jaiswal - YOE");
    console.log(yearsexp);
    console.log(x);
    console.log("YOE Value inside Function- Global Space ");
    console.log(window.yearsexp);
    console.log(this.yearsexp);
    
    console.log("X Value inside Function- Global Space");
    console.log(window.x);
    console.log(this.x);
}

console.log("Function call");
getName();
console.log("YOE Value");
console.log(yearsexp);

console.log("YOE Value- Global Space");
console.log(window.yearsexp);
console.log(this.yearsexp);

console.log("X Value- Global Space");
console.log(window.x);
console.log(this.x);