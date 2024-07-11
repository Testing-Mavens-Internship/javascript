for (let i = 1; i <= 9; i++) {
    let pattern = '';
    if (i <= 5) {
        for (let j = 1; j <= i; j++) {
            pattern += i;
        }
    } else {
        for (let k=5;k>=i-4;k--) {
            pattern += i;
        }
    }
    console.log(pattern);
}
