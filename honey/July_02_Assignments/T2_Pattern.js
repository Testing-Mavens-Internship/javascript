let i = 1;
while (i <= 5) {
    let pattern = "";
    let j = 1
    while (j <= i) {
        pattern += "*";
        j++;
    }
    console.log(pattern);
    i++;
}