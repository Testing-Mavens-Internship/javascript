const input = [1, -4, 12, 0, -3, 29, -150];
console.log(input.filter(i=>i>0).reduce((sum,item)=>sum+item,0))
