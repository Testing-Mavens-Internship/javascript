let n1=[1,2,3,4,5]
let n2=[1,2,3,4,5]

let a=n1.slice(0,2)  // copy values into new array, original array maintained and new array returned
let b=n2.splice(0,2)  // removes the values from original array and return new array

console.log(a)
console.log(n1)   // no change in original array
console.log(b)
console.log(n2)   // elements deleted from original array