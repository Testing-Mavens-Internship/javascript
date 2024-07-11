let Stdu=["Aby","bincy","athul","sacchin","lolan","david"]
names=[];
Stdu.forEach(value => {
names.push(value)   
});
console.log("student name:",names);



//map
let number=[1,2,3,4,5]
let x=number.map(item => item*5)
console.log(x);

//map using funnction

let y=number.map(myFunction);
function myFunction(item){
    return item*5
}
console.log(y)
//
let z=number.map(yFunction);
function yFunction(item){
    return item>=5
}
console.log(z)

//filter
const age=[23,33,44,55,16]
const result=age.filter(checkadult);
function checkadult(age){
    return age<=18;
}
//
let num=[1,2,3,4,5]
let f=num.filter(item =>{return item2%=0});
console.log(f);
