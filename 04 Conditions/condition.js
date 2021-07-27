console.log("Conditions Tutorials !!");

if (confirm("Are you John Smith?"))
{
    console.log("Hello John, how are you?");
} else {
    console.log("Then what is your name?");
}

// To evaluate whether two variables are equal, the == operator is used
console.log("1" == 1); // true

// equality operator in JavaScript, ===, which does a strict comparison. This means that it will be true only 
// if the two things you are comparing are the same type as well as same conten
console.log("1" === 1); // false

console.log(window === this);


var myNumber = 42;
if (myNumber == 42)
{
    console.log("The number is correct.");
}


var foo = 1;
var bar = 2;

if (foo < bar)
{
    console.log("foo is smaller than bar.");
}


var foo = 11;
var bar = 22;
var moo = 33;

if (foo < bar && moo > bar)
{
    console.log("foo is smaller than bar AND moo is larger than bar.");
}

if (foo < bar || moo > bar)
{
    console.log("foo is smaller than bar OR moo is larger than bar.");
}

var notTrue = false;
if (!notTrue)
{
    console.log("not not true is true!");
}

// default keyword defines the action for this case (optional

// We must use the break statement between every code block to avoid the switch from executing the next code block.

var rank = "Private";
switch(rank)
{
    case "Private":
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}
