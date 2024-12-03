//using filter
// const ages=[32,33,16,40]
// let x=ages.filter(checkAdult);
// console.log(x)
// function checkAdult(age)
// {
//     return age>=18;
// }

// using map
const ages=[32,33,16,40]
let x=ages.map(checkAdult);
console.log(x)    
function checkAdult(age)
{
    return age>=18;
}