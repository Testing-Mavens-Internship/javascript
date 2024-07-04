const input = "abbcccddddeeeee";
let counts={};
input.split("").forEach(char=>{
    counts[char]=(counts[char]||0)+1;
});
let mcount=0, mostfrequentChar='';
console.log(counts)
Object.keys(counts).forEach(char=>{
    mcount=counts[char]>mcount?(mostfrequentChar=char,counts[char]):mcount;
});
console.log(mostfrequentChar);
