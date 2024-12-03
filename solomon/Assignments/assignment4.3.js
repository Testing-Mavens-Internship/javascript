const object1 = [1,2,3,4,5]
console.log(object1.map(item=>item*3).reduce((sum,n1)=>sum+n1))
console.log(object1.reduce((sum,n1)=>sum+(n1*3),0))


