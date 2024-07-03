const text = "javascript is fun";

const vowels = 'aeiouAEIOU';

const vowelCount = text.split('').reduce((count, char) => {
    return vowels.includes(char) ? count + 1 : count;
}, 0);

console.log(vowelCount);


// const text ="javascript is fun";
// const vowel = 'aeiouAEIOU';
// const List = text.split(vowel);
// console.log(List);


