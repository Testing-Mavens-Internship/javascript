// Function to get the most frequent character from a string
function getCharString(str) {
    // Step 1: Convert the string to an array of characters
    const charArray = str.split('');
  
    // Step 2: Create an object to count occurrences of each character
    const charCount = charArray.reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
    
    let max = 0;
    let char = '';
    
    // Find the character with the maximum count
    for (let k in charCount) {
        if (charCount[k] > max) {
            max = charCount[k];
            char = k;
        }
    }
    
    return char;
}

const res = getCharString("abbcccddddeeeee");

console.log(res); // Outputs the most frequent character

// const str = "abbcccddddeeeee";

// const mostFrequentChar = (s) => {
//   return s.split('').reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     if (!acc.max || acc[char] > acc[acc.max]) {
//       acc.max = char;
//     }
//     return acc;
//   }, {}).max;
// };

// console.log(mostFrequentChar(str)); // Output: "e"

