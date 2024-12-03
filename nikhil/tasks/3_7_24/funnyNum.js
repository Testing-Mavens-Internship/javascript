const numbers=[1,2,3,4,5]

// const newnumbers=numbers.map((num)=>num*3).reduce((total,curr)=>total+curr,0)
const new2=numbers.reduce((total,curr)=>((total+curr*3)),0)
console.log(new2)