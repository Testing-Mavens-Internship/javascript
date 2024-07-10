let arr=[1,2,3,4,5];
let m=arr.map(item=>item*5);
console.log(m)

let x=arr.map(myFunction);

function myFunction(item){
    return item * 5;
}
console.log(x)



let y=arr.map(yFunction);

function yFunction(item){
    return item >3;
}
console.log(y)

