for (let i = 1; i <= 9; i++) {
    if (i <= 5) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += i + " "
        }
        console.log(pattern);
    } else {
        let pattern = "";
        for (let y = 1; y <= 10 - i; y++) {
            pattern += i + " "
        }
        console.log(pattern);
    }
}