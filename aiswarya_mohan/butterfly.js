const rows = 7;

for (let i = 1; i <= rows; i++) {
    let  pattern  = "";
    
    if (i <= 4) {
        let Stars = i;
        let Spaces = 4 - i;
        
    
        for (let j = 1; j <= Spaces; j++) {
        pattern += " ";
        }
        

        for (let k = 1; k <= Stars; k++) {
            pattern  += "*";
        }
        
        
        for (let l = 1; l <= 2 * Spaces; l++) {
            pattern  += " ";
        }
        
        
        for (let m = 1; m <= Stars; m++) {
            pattern  += "*";
        }
    } else {
        let Stars = 8 - i;
        let Spaces = i - 4;
        
        
        for (let j = 1; j <= Spaces; j++) {
            pattern += " ";
        }
        
        
        for (let k = 1; k <= Stars; k++) {
            pattern += "*";
        }
        
        
        for (let l = 1; l <= 2 *Spaces; l++) {
            pattern += " ";
        }
        
        
        for (let m = 1; m <= Stars; m++) {
            pattern += "*";
        }
    }
    
    console.log(pattern);
}