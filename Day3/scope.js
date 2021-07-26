console.log("Third Java Script Program of Execution");

var a = 1000;
let b = 200;
const c = 300;
{
    var a = 100;
    let b = 10;
    const c = 1;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);


let x = 10;
function y() {
    var x = 20;
    console.log(x);
}
y();
console.log(x);
