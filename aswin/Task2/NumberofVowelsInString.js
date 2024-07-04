const text = "javascript is fun"

// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
//   );

// console.log(text.split(" ").split(" "))

let letters = text.split("")
console.log(letters)
let count = letters.reduce((pv,cv)=>cv ==="a"||"e"||"i"||"o"||"u"?pv+cv+0:pv+cv*0)
console.log(count)