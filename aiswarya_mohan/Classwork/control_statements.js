// Simple If statment
let x=10;
if(x>0)
{
        console.log(x,"is positive");
}

// If Else statement
let age=18;
if(age>=18)
{
        console.log("Age is greater than or equal to 18");
}
else
{
    console.log("Age is less than 18");
}

// Nested If statement
let a=10
let b=20

if(a<b)
    {
        if(a>0)
            {
                console.log(a,"is greater than 0");
            }
        if(a==10)
            {
                console.log(a,"is equal to 10");
            }
    }

// Else if Ladder
let y=100;

if(y>100)
    {
        console.log(y,"is greater than 100");
    }
else if(y<100)
    {
        console.log(y,"is less than 100");
    }
else
{
    console.log(y,"is equal to 100");
}

// Switch
let ch='f'
switch(ch)
{
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel");
        break;
    
    default:
        console.log("Consonant");
}