//array
// const arr=[5];
// arr[0]="A";
// console.log(arr[0]);
// arr[1]="B";
// console.log(arr[1]);
// arr[2]="C";
// console.log(arr[2]);
// arr[3]="D";
// console.log(arr[3]);
// arr[4]="E";
// console.log(arr[4]);
// arr[5]="F";
// console.log(arr[5]);
// arr[6]="G";
// console.log(arr[6]);

//2.Array
// let students=["Aby","Biny","Ciny","Geethu","Sachin"]
// let names=[]
// students.forEach((value)=>
// {
//     names.push(value);
// }
// )
// console.log(names);

//3.map
// let numbers=[11,12,13,14,15]
// let x= numbers.map(n => n+1);
// console.log(numbers);
// console.log(x);

4.
// const ages=[32,33,16,65]
// const result=ages.filter(check);
// function check(age) //automatically take each values from ages and give to parameter age in check
// {
//     return age>=18
// }
// console.log(result);

//5.

// const ages=[32,33,16,65]
// const result=ages.map(check);
// function check(age) 
// {
//     return age>=18
// }
// console.log(result);

//6. slice vs splice

let num=[1,2,3,4,5];
let x = num.slice(0,2);
console.log(num);
console.log(x);
let y=num.splice(0,2);
console.log(num);
console.log(y);