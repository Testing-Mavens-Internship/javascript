// const person=[{
//     "name":"mithun",
//     "age":24
// },
// {
//     "name":"aiswarya",
//     "age":22
// }
// ]
// for(let i of person)
//     {
//         console.log(i)
//     }
const obj = {a:1,b:2,c:3};
const elmnt=Object.fromEntries(Object.entries(obj).map(([key,value])=>[value,key]))
console.log(elmnt);