 
// Q2:Get name initials
// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
 
// Use
 
// map(),split(),join()
 
// Input
// const input = "George Raymond Richard Martin"; 
// Output : 'GRRM'

//--in one line--
const inputt = "George Raymond Richard Martin"; 
console.log(inputt.split(' ').map(word => word[0]).join(''));



const input = "George Raymond Richard Martin"; 
const words = input.split(' ').map(word => word[0])
joined=words.join('');
console.log(joined); 




















