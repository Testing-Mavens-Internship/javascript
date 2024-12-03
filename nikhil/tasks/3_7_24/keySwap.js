const obj={a:1,b:2,c:3}

const newstr= Object.entries(obj)
const keySwap=newstr.map(([key,value])=>([value,key]))
console.log(keySwap)
const newobj=Object.fromEntries(keySwap)

console.log(newobj)


 