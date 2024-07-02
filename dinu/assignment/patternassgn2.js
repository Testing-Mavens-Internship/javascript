
const alphabets='ABCDEF';
for(let row=0;row<=5;row++){
  
    pattern="";
    space=(5-row);
    for(let col=0;col<space;col++){
    pattern+=" ";
    }
    for(let num=0;num<=row;num++){
        pattern+=alphabets[row];
        if (num<row) {
            pattern += ' '; 
        }
        }
        console.log(pattern);
    }
        
    for(let row=4;row>=0;row--){
        pattern="";
        space=(5-row);
        for(let col=1;col<=space;col++){
        pattern+=" ";
        }
        for(let num=0;num<=row;num++){
            pattern+=alphabets[row];
            if (num<row) {
                pattern += ' '; 
            }
            }
            console.log(pattern)

    }
   
    
