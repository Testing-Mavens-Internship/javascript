// Q1: Sum of every positive element
// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
// Use filter & reduce
 
// Input
// const input = [1, -4, 12, 0, -3, 29, -150];
 
// Output: 42
const input = [1, -4, 12, 0, -3, 29, -150];
//console.log(input.filter((item=>{if(item>0){return item}})))
console.log(input.filter((item=>{if(item>0){return item}})).reduce((acc,curr) => acc + curr, 0));

//acc+curr means 
// the +ve elements are [1,12,29]
// when 1st iternation : acc=0 ,curr=1 -- acc+curr=0+1=1
// 2nd: acc=1,curr=12 -- acc+curr=1+12=13
// 3rd: acc=13,curr=29 -- acc+curr=13+29=42
