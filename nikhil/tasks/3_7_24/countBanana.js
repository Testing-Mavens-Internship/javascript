const fruits=["apple","banana","banana","cherry","banana"]
let count= fruits.reduce((total,curr)=>(curr==="banana")?total+1:total,0)
console.log(count)