// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
// Use filter & reduce
 
// Input
// const input = [1, -4, 12, 0, -3, 29, -150];
 
// Output: 42

const input = [1, -4, 12, 0, -3, 29, -150];

console.log(input.filter(item=>item>0).reduce((sum,n)=>sum+n,0));