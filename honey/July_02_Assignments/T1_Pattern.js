for (let i = 1; i <= 8; i++) {
    if (i <= 4) {
        let space = 4 - i;
        let star = 2 * i - 1;
        let pattern = "";
        for (let j = 1; j <= space; j++) {
            pattern += " ";
        }
        for (let y = 1; y <= star; y++) {
            pattern += "*";
        }
        console.log(pattern);
    } else {
        let space = i - 5;
        let star = 17 - i * 2;
        let pattern = "";
        for (let j = 1; j <= space; j++) {
            pattern += " ";
        }
        for (let y = 1; y <= star; y++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}