const text="javascript is fun"
const splitted=text.split("")
// console.log(splitted)
let vowel=splitted.reduce((total,curr)=>curr==="a"||curr==="e"||curr==="i"||curr==="o"||curr==="u"?total+1:total,0)
console.log(vowel)
