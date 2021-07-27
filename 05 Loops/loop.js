console.log("Loop Tutorials !!");

var i;
for (i = 0; i < 3; i+=1)
{
    console.log(i);
}


var i = 5;
while (i > 0)
{
    if (i % 3 == 0)
    {
        continue;
    }
    console.log(i + " bottles of beer on the wall");
    i -= 1;
    if (i == 2)
    {
        break;
    }
}