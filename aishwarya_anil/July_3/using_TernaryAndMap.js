//given a list of panckaes ,where some are flipped,nomalize all pancakes to be "right side up".
//op:["right side up","right side up","right side up","right side up"]

const pancakes =["flipped","right side up","flipped","right side up"];

console.log(pancakes.map(item=>item == 'flipped'? "right side up":item))


