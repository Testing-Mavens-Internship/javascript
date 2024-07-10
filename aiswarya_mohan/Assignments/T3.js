let rows=5
let pattern=""

for(i=1;i<=rows;i++)
    {
        for(j=1;j<=(rows-i);j++)
            {       
                pattern+=" "
            }
        for(k=1;k<=i;k++)
            {
                pattern+="*"
            }
            pattern+="\n"
    }
    console.log(pattern)
        

