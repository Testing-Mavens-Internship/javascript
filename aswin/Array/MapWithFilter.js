const age = [12,34,45,65,44]
let result = age.map(value=> value >=18)

console.log(result)
let filteredresult = age.filter((item)=>{return item >= 18})

console.log(filteredresult)