// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
 
// Use
// map(),split(),join()
 
// Input
// const input = "George Raymond Richard Martin"; 
// Output : 'GRRM'

const input = "George Raymond Richard Martin"; 
console.log(input.split(" ").map(item=>item[0]).join(""));