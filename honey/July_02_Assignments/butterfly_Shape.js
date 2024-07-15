for (let i = 1; i <= 7; i++) {
    if (i <= 3) {
        let pattern = "";
        let space = 7 - i * 2;
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        for (let k = 1; k <= space; k++) {
            pattern += " ";
        }
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
    } else if (i == 4) {
        let pattern = "";
        for (let j = 1; j <= 7; j++) {
            pattern += "*";
        }
        console.log(pattern);
    } else {
        let pattern = "";
        let space = 2 * i - 9;
        for (let y = 1; y <= 8 - i; y++) {
            pattern += "*";
        }
        for (let k = 1; k <= space; k++) {
            pattern += " ";
        }
        for (let y = 1; y <= 8 - i; y++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}