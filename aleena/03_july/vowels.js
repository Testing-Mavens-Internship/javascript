const text = "javascript is fun";
const split = text.split("");
const vowel = split.reduce((total,curr)=>curr=='a'||curr=='e'||curr=='i'||curr=='o'||curr=='u'?total+1:total,0)
console.log(vowel)