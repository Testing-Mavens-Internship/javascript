const str="abbcccddddeeeee"
let chars=str.split('')
let counts={}
chars.forEach(char => {
    counts[char] = (counts[char] || 0)+1
})
console.log(counts)
let mcount=0
let mostfreqchar=''
Object.keys(counts).forEach(char =>{
    if(counts[char]>mcount)
    {
        mostfreqchar=char
        mcount = counts[char]
    }
})
console.log(mostfreqchar)
