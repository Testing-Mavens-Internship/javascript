const nestedArray=[[1,2,[3,4]],[5,[6,[7,8]]],9]
let flat = nestedArray.flat(3)
let flatArray=flat.reduce((total,curr)=>total+curr,0)
console.log(flatArray)