const input="Every developer likes to mix kubernetes and javascript"
console.log(splitted = (input.split(" "))
.map(word => (word.length > 4) ? word[0] + (word.length - 2) + word[word.length - 1] : word)
.join(" "));