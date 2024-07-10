// G1:
// Description: Given an array of words, group the anagrams together using forEach
// input: const words = ["eat", "tea", "tan", "ate", "nat", "bat","tab"];
// Output:  [["eat", "tea", "ate"], ["tan", "nat"], ["bat", "tab"]]

const words = ["eat", "tea", "tan", "ate", "nat", "bat","tab"];
let sorted = {};
function groupAnagrams(words)
{
     words.forEach((word)=>{
        const key=word.split('').sort().join('')
        sorted[key]=sorted[key] || []
        //console.log(sorted[key])
        sorted[key].push(word);
        //console.log(sorted[key])
        return sorted
       
     })
     return Object.values(sorted)
}
console.log(groupAnagrams(words))
console.log(sorted)
