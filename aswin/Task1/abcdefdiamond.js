const alphabets='ABCDEF';
for(let r=0;r<=5;r++){

    pattern="";
    space=(5-r);
    for(let col=0;col<space;col++){
    pattern+=" ";
    }
    for(let n=0;n<=r;n++){
        pattern+=alphabets[r];
        if (n<r) {
            pattern += ' ';
        }
        }
        console.log(pattern);
    }
    for(let r=4;r>=0;r--){
        pattern="";
        space=(5-r);
        for(let col=1;col<=space;col++){
        pattern+=" ";
        }
        for(let n=0;n<=r;n++){
            pattern+=alphabets[r];
            if (n<r) {
                pattern += ' ';
            }
            }
            console.log(pattern)
    }