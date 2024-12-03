var x=10;
if(x%2==0)console.log("It is an even number");
else if(x%2!=0)console.log("It is an Odd number");

var mark=35;
if(mark>=95 && mark<=100)console.log("S Grade");
else if(mark>=80 && mark<95)console.log("A Grade");
else if(mark>=70 && mark<80)console.log("B Grade");
else if(mark>=60 && mark<70)console.log("C Grade");
else if(mark>=50 && mark<60)console.log("D Grade");
else if(mark>=40 && mark<50)console.log("E Grade");
else if(mark<40)console.log("FAIL");
else console.log("Wrong Percentage");

let letter="s";
switch(letter){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":console.log("It is a Vowel");break;
    default:console.log("It is not a Vowel");break;
}