const numbers =[1,2,3,4,5];
let result=numbers.reduce((sum,num)=>sum + (num*3),0)
console.log(result);