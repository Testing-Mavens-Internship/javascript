// filter()
const ages=[33,44,16,69];
const result1=ages.filter(checkAdult);
function checkAdult(age){
    return age>=18;
}
console.log(result1);

// map()
const result2=ages.map(checkAdult);
function checkAdult(age){
    return age>=18;
}
console.log(result2);

// slice
let x=ages.slice(0,2)
console.log(x);

// Splice
let y=ages.splice(0,2)
console.log(y);
console.log(ages);