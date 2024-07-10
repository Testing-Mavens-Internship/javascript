//1.simple if,if else,

var x=10;
if(x>0)
    {
        console.log(x+" is positive");
    }
else(x<0)
{
    console.log(x+" is neghative");
}

//2.nested if

var x=5;
if(x>0)
    {
        if(x==5)
            {
                console.log(x+" is positive and equal to 5");
            }
            else
            {
                console.log(x+" is positive and not equal to 5");
            }
    }

//3.else if ladder

var x=2;
if(x>0)
    {
        console.log(x+" is positive");
    }
    else if(x<0)
        {
            console.log(x+" is negative");
        }
        else{
            console.log(x+" is zero");
        }

//4.switch

var x="one";
switch(x){
    case "one":
        console.log("one");
        break;
    case "two":
        console.log("two");
         break;
    case "three":
        console.log("three");
        break;
    default:console.log("Invalid entry");
}

//5.nested for

for(let i=0;i<10;i++)
    {
        for(let j=0;j<=i;j++)
            {
                console.log(j,i);
            }
    }

