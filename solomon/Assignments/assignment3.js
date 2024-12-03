let count = 1;
for (let i = 1; i <= 7; i++) {
    let star = [];
    for (let j = 1; j <= 7; j++) star.push("*");
    for (let i = count; i < star.length - count; i++) star[i] = " ";
    i <= 3 ? count += 1 : count -= 1;
    console.log(star.join(""))
}

let alphat = "ABCDEF";
let n = alphat.length;
let totalLines = 2 * n - 1;
for (let i = 1; i <= totalLines; i++) {
    let str = i < n ? alphat[i - 1] + ' ' : alphat[totalLines - i] + ' ';
    let space = i < n ? ' '.repeat(n - i) : ' '.repeat(i - n)
    console.log(space + str.repeat(i <= n ? i : totalLines - i + 1));
}