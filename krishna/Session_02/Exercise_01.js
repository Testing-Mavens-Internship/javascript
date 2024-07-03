const input="George Raymond Richard Martin";
//let words=input.split(' ')
//let letters=words.map(value=>value[0])
//console.log(letters.join(''));

console.log(input.split(' ').map(value=>value[0]).join(''))

//entries
const obj = {a:1,b:2,c:3};


  //const x=obj.map(value=>value.Object.entries(obj))
  //console.log(x)
  const objj=Object.fromEntries(Object.entries(obj));
  //const swap=objj.map(([key,value]=>[value,key]))

  

  
