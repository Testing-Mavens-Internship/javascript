let pattern="";
for(let i=1;i<=8;i++)
    {
        if(i<=4)
        {
     
       let space=4-i;
        let str=2*i-1;
        for(let j=1;j<=space;j++)
            {
                pattern+=" ";
            }
        for(let k=1;k<=str;k++)
            {
                pattern+="*";
            }
            console.log(pattern);   
        }
    }