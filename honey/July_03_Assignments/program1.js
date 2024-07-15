// Description: Given a nested array of numbers, flatten the array and calculate the sum of all the numbers.
// const nestedArray = [[1, 2, [3, 4]], [5, [6, [7, 8]]], 9];
// O/P : 45

const nestedArray = [[1, 2, [3, 4]], [5, [6, [7, 8]]], 9];
console.log(nestedArray.flat(Infinity).reduce((sum,item)=>sum+item,0));