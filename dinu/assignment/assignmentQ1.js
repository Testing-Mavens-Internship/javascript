const words = ["eat", "tea", "tan", "ate", "nat", "bat", "tab"];
let acc = {};

const groupAnagrams = (words) => {
    words.forEach((word) => {
      const key = word.split('').sort().join('');
      acc[key] = acc[key] || [];
      acc[key].push(word);
      return acc;
    })
    return Object.values(acc);
};

console.log(groupAnagrams(words));