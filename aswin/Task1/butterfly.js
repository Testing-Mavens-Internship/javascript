let count = 1;
for (let i = 1; i <= 7; i++) {
    let pattern = [];
    for (let j = 1; j <= 7; j++) pattern.push("*");
    for (let i = count; i < pattern.length - count; i++) pattern[i] = " ";
    i <= 3 ? count += 1 : count -= 1;
    console.log(pattern.join(""))
}

