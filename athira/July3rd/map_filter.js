//we use map when we have to do specific task to all elements of an array
//after performing that task, map stores entire result values in another array declared (here x)
//forEac loop only performs the function, do not return the result

let numbers=[1,2,3,4,5]
let x=numbers.map(element => element*5) //task - multiply eac item by 5
console.log(numbers)
console.log(x)



//filter do not return result value like map, only returns if we mention
//filter is used to filter elements from an array after performing any specific task

let number=[1,2,3,4,5]
let result=number.filter(element => {return(element%2==0)})
console.log(number)
console.log(result)
console.log("\n")


//practice question
const ages=[32,33,16,40]
const res=ages.filter(checkAdult)
const r=ages.map(checkAdult)
function checkAdult(age)
{
    return age>=18
}
console.log(res)
console.log(r)
