const input = "abbcccddddeeeee";
let chars = input.split("");
console.log(chars);
let counts = {};
chars.forEach(char => {
    counts[char] = (counts[char] || 0) + 1;
});
let maxcount = 0;
let mostfrequentChar = '';
Object.keys(counts).forEach(char => {
    if (counts[char] > maxcount) {
        maxcount = counts[char];
        mostfrequentChar = char;
    }
});
console.log(mostfrequentChar);
