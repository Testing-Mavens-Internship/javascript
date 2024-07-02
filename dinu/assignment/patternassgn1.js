
for(let row=1;row<=4;row++)
    {

        let pattern="";
        for(let star=1;star<=row;star++){
            pattern+="*";
        }
        for(let space=2*(4-row);space>=0;space--)
        {
         pattern+=" ";   
        }
        for( let star=1;star<=row;star++){
            pattern+="*";
        }
        console.log(pattern)
    }
    for(let row=3;row>=1;row--){
        let pattern="";
        for(let star=1;star<=row;star++) {
            pattern+="*";
        }
        for(let space=2*(4 - row);space>=0;space--) {
                    pattern += " ";
                }
        for(let star=1;star<=row;star++)
            {
            pattern+="*";
        }
        console.log(pattern)

    }
    