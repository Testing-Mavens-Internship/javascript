let i = 1;
while (i <= 5) {
    let space = 5 - i;
    let j = 1;
    let pattern = "";
    while (space > 0) {
        pattern += " ";
        space--;
    }
    while (j <= i) {
        pattern += "*"
        j++;
    }
    console.log(pattern);
    i++;
}