let n = 4;
for (let i = 1; i <= n; i++) {
    let space = " ";
    let pattern = "";
    for (let j = 0; j < i; j++) {
        pattern += "*";
    }
    console.log(pattern+ space.repeat(n - i) + space.repeat(n - i) + pattern);
}

for (let i = n-1; i >= 1; i--) {
    let space = " ";
    let pattern = "";
    for (let j = 0; j < i; j++) {
        pattern +="*";
    }
    console.log(pattern + space.repeat(n - i) + space.repeat(n - i) + pattern);
}
