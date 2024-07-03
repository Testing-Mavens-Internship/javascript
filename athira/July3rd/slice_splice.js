//slice do not changes the original array, it only perform the action and store result to another array
let number=[1,2,3,4,5]
let x=number.slice(0,2)
console.log(number)
console.log(x)

console.log("\n")

//splice removes the elements from the original array and stores to another array
let num=[1,2,3,4,5]
let y=num.splice(1,2)
console.log(num)
console.log(y)
