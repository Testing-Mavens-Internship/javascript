//odd or even
let n=70
if((n%2)==0)
    {
        console.log(n + " is an Even Number")
    }
else
{
    console.log(n + " is an Odd Number")
}
console.log("\n")



//student mark grading system
let mark=85
if (mark < 60) 
{
    console.log("Mark:" + mark)
    console.log("Failed")
} 
else if (mark < 70) 
{
    console.log("Mark:" + mark)
    console.log("Grade: D")
} 
else if (mark < 80) 
{
    console.log("Mark:" + mark)
    console.log("Grade: C")
} 
else if (mark < 90) 
{
    console.log("Mark:" + mark)
    console.log("Grade: B")
} 
else if (mark <= 100) 
{
    console.log("Mark:" + mark)
    console.log("Grade: A")
} 
console.log("\n")



//vowel or not
let letter = 'e'
let vowel = false
switch (letter.toLowerCase()) 
{
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        vowel = true
        console.log(letter + " is a vowel")
        break
    default:
        vowel = false
        console.log(letter + " is not a vowel")
}
