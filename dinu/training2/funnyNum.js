const numbers=[1,2,3,4,5];
let mul =numbers.reduce((accumulator,currentValue)=>accumulator+(currentValue*3),0);
console.log(mul);