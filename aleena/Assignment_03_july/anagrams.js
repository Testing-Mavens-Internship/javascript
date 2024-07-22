const words = ["eat", "tea", "tan", "ate", "nat", "bat", "tab"];
let sorted = {};

const groupAnagrams = (words) => {
    words.forEach((word) => {
      const key = word.split('').sort().join('');
      sorted[key] = sorted[key] || [];
      sorted[key].push(word);
      return sorted;
    })
    return Object.values(sorted);
};

console.log(groupAnagrams(words));
