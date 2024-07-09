const input = "abbcccddddeeeee";
let chars = input.split("");
console.log(chars);
let counts = {};
chars.forEach(char => {
    counts[char] = (counts[char] || 0) + 1;
});
let mcount = 0;
let mostfrequentChar = '';
Object.keys(counts).forEach(char => {
    if (counts[char] > mcount) {
        mostfrequentChar = char;
        mcount =counts[char]
    }
});
console.log("mostfrequentChar= "+mostfrequentChar);