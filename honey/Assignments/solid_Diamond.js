for (let i = 1; i <= 11; i++) {
    if (i == 1 || i == 11) {
        let pattern = "";
        for (let j = 1; j <= 1; j++) {
            pattern += 'A';
        }
        console.log(pattern);
    } else if (i == 2 || i == 10) {
        let pattern = "";
        for (let j = 1; j <= 2; j++) {
            pattern += 'B';
        }
        console.log(pattern);
    } else if (i == 3 || i == 9) {
        let pattern = "";
        for (let j = 1; j <= 3; j++) {
            pattern += 'C';
        }
        console.log(pattern);
    } else if (i == 4 || i == 8) {
        let pattern = "";
        for (let j = 1; j <= 4; j++) {
            pattern += 'D';
        }
        console.log(pattern);
    } else if (i == 5 || i == 7) {
        let pattern = "";
        for (let j = 1; j <= 5; j++) {
            pattern += 'E';
        }
        console.log(pattern);
    } else if (i == 6) {
        let pattern = "";
        for (let j = 1; j <= 6; j++) {
            pattern += 'F';
        }
        console.log(pattern);
    }
}