//if and if-else
let a=10, b=5
if(a==0)
    {
        console.log("value of a =", a)
    }
else
{
    console.log("value of b =", b)
}

//nested if
let z=10, y=20
if(z==10)
    {
    if(y==5)
        {
            console.log("Pass")
        }
    else
    {
        console.log("Nested else block")
    }
}
else
{
    console.log("Outside else block")
}

//else if ladder
let d=10
if(d==50)
    {
        console.log("value od d is 10")
    }
else if(d==20)
    {
        console.log("value of d is 20")
    }
else
{
    console.log("value of d is not defined!")
}

//switch
let s=10
switch(s)
{
    case 1: console.log("Case 1")
    break
    case 2: console.log("Case 2")
    break
    case 3: console.log("Case 3")
    break
    default: console.log("Invalid")
}
