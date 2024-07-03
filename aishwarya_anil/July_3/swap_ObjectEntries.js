
const obj = {a:1,b:2,c:3,d:4,e:5}
const swap = Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]))
console.log(swap)

// const obj = {a:1,b:2,c:3,d:4,e:5}
// let swap=Object.entries(obj).map(myFunction)
// function myFunction([key, value]) {
//     let temp = '${key}'
//     '${key}' = '${value}'zxz
//     '${value} = ${temp}' 

