const input=[1,-4,12,0,-3,29,-150]
console.log(input.filter(n=>n>0).reduce((accumulator,currentValue) => accumulator+currentValue))
