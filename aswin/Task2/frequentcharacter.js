const input = "abbcccddddeeeee";
let chars = input.split("");
let counts={};
chars.forEach(char=>{
    counts[char]=(counts[char]||0)+1;
});
let mcount=0;
let mostfrequentChar='';
Object.keys(counts).forEach(char=>{
    mcount=counts[char]>mcount?(mostfrequentChar=char,counts[char]):mcount;
});
console.log(mostfrequentChar);
