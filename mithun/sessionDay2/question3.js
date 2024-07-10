const numbers=[1,2,3,4,5];
// console.log(numbers.map((item)=>item*3).reduce((acc,val)=>acc+val)) //with map and reduce
console.log(numbers.reduce((acc,val)=>acc+(val*3)));