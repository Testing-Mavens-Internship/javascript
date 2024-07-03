//array
let student=["Aby","Biny","Ciny","Geethu","Sachin"]
console.log(student)


//for each
let students=["Aby","Biny","Ciny","Geethu","Sachin"]
let names=[]
students.forEach(items=>{
    names.push(items);
})
console.log(names);

//for of
let students1=["Aby","Biny","Ciny","Geethu","Sachin"]
for(let value of students1){
    console.log(value);
}

//Map
/*let arr=[1,2,3,4,5]
let result=arr.map(item=>item*5)
console.log(result);*/

const ages=[32,33,16,40];
const result1=ages.filter(checkAdult);

function checkAdult(age){
    return age>=18;
}
console.log(result1);


const age=[32,33,16,40];
const result2=age.map(checkAdult);

function checkAdult(age){
    return age>=18;
}
console.log(result2);

//filter
let num=[1,2,3,4,5]
let f=num.filter(item=>{return item%2===0})
console.log(f);

//slice and splice
let y= num.slice(0,2);
console.log(y);

let z= num.splice(0,2);
console.log(num);
