for (let i = 1; i <= 4; i++) {
    let space = 4-i;
    let star = 2*i-1;
    let pattern = "";
   
    for (let j = 1; j <= space; j++) {
        pattern += " ";
    }
    for (let y = 1; y <= star; y++) {
        pattern += "*";
    }
    console.log(pattern);
}
