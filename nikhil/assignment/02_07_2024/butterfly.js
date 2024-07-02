
maxLen=4;

for(let row=1;row<=maxLen;row++)
    {

        let pattern="";
        for(let star=1;star<=row;star++){
            pattern+="*";
        }
        for(let space=2*(maxLen-row);space>=0;space--)
        {
         pattern+=" ";   
        }
        for( let star=1;star<=row;star++){
            pattern+="*";
        }
        console.log(pattern)
    }
for(let row=maxLen-1;row>=1;row--)
    {
        let pattern="";
        for(let star=1;star<=row;star++){   
            pattern+="*";
        }  
        for(let space=2*(maxLen-row);space>=0;space--)
        {
         pattern+=" ";   
        }
        for( let star=1;star<=row;star++){
            pattern+="*";
        }
        console.log(pattern)
    }
