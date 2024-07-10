maxLen=5;

for(let row=1;row<=maxLen;row++)
    {
        let pattern="";
        for(let space=maxLen-row;space>=0;space--)
        {
         pattern+=" ";   
        }
        for( let star=1;star<=row;star++){
            pattern+="*";
        }
        console.log(pattern)
    }