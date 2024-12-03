let rows=9
let pattern=""
for(i=1;i<=9;i++)
    {
        if(i<=5)
        {
            for(j=1;j<=i;j++)
                {
                    pattern+=i
                }
        }
        else
        {
            for(k=1;k<=rows-i+1;k++)
                {
                    pattern+=i
                }
        }
            pattern+="\n"
    }
console.log(pattern)