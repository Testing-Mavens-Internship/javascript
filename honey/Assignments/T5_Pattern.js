let i = 1;
while (i <= 5) {
    let pattern = '';
    
    for (let space = 1; space < i; space++) {
        pattern += '  ';
    }
    
    if (i==1) {
        for (let j = 1; j <= 9; j++) {
            pattern += "* ";
        }
    } else if (i==2) {
        for (let j = 1; j <= 7; j++) {
            pattern += j + " ";
        }
    } else if (i==3) {
        for (let j = 1; j <= 5; j++) {
            pattern += "* ";
        }
    } else if (i==4) {
        for (let j = 4; j >= 2; j--) {
            pattern += j + " ";
        }
    } else if (i==5) {
        pattern += "*";
    }
    
    console.log(pattern);
    i++;
}