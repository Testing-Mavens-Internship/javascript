//let is block-scoped
let x=5              //global variable
{
    let x=6          //local variable
    console.log(x)
}
console.log(x)
console.log("\n")

let z=5
{
    z=6;
    console.log(z)
}
console.log(z)
console.log("\n")


//var is global
var y=3
{
    var y=4
    console.log(y)
}
console.log(y)
console.log("\n")

let a=5
var b='India'
const pie='3.14'
let c;
var d;
const e='abc'; //error when only declared, so initialisation is must
console.log(a)
console.log(b)
console.log(pie)
console.log(c) //undefined
console.log(d) //undefined
console.log(e) //error will come if only variable is declared and not initialized
console.log("\n")


/*let f=77;
{
    let f=23;
    console.log(f);
}
let f=67;
console.log(f); */

/*console.log(test)
var test=12;       //undefined

console.log(g)
let g=5           //Cannot access 'g' before initialization

console.log(w)
const w;             //Missing initializer in const declaration */


var test=12;
var test=100;
console.log(test)    //100
console.log("\n") 

/*let test=12;
let test=100;
console.log(test)   //Identifier 'test' has already been declared 
console.log("\n") */

A=6
B=1
console.log(A&&B)  //1
console.log(A&&3)  //3
console.log(A||B)  //6
console.log(1||6)
console.log(6||1)
console.log(!A)
console.log(!B)
