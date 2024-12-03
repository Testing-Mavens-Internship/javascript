// const input="Every developer likes to mix kubernetes and javascript"

// const words=input.split(" ").map(getNumeronym)

// let spltted=words.map(getNumeronym)

// function getNumeronym(word)
// {
//     // if(word.length>4){
//     //     return word[0]+(word.length-2)+word[word.length-1]
//     // }
//     // else{
//     //     return word
//     // }
//     return (word.length>4)?word[0]+(word.length-2)+word[word.length-1]:word
// l

// }
// console.log(words);
// // let joined=spltted.join(" ")
// // console.log(joined)/
// console.log(spltted.join(" "));




const input = "Every developer likes to mix kubernetes and javascript"

console.log(splitted = (input.split(" ")).map(word => (word.length > 4) ? word[0] + (word.length - 2) + word[word.length - 1] : word).join(" "));
