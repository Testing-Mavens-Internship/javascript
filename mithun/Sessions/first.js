let x=5;
{
    x=6;
    console.log(x);
}
console.log(x);

//1.with declaration and initialization

// let x=8;
// var y =5;
// const names="mithun";
// console.log(x);
// console.log(y);
// console.log(names);

//2.with declaration only

let a;
var b;
// const q; //Const should declare and initialize here itself
console.log(a);
console.log(b);
console.log(q);

//3.check #1

// let x1=77;
// {
//     let x1=55;
//     console.log(x);
// }
// let x1=67;

//4.check #2

console.log(test);
var test="hello";
console.log(x2);
let x2=5;

//5. var can be redeclared and can be overwritten

var a1=10;
var a1=100
console.log(a);

//6. let cant be redeclared and cant be overwritten

let b=8;
let b=90;
console.log(b);

//7. overwite same variable using let
let x3=8;
x3=9;
console.log(x);

//8.logical operators

a=6;
b=1;
console.log(a&&b);//compares a and b prints b
console.log(a||b);//compares a or b prints a
console.log(!a);//a has value so not a become false
console.log(!b);