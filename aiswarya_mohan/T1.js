let rowcount =8
for(let i=1;i<=rowcount;i++)
    {
        if(i<=4)
            {
        let space = 4-i
        let star = (2*i)-1
        let pattern=""

        for(let j=1;j<=space;j++)
            {
                pattern+=" "
            }
        for(let k=1;k<=star;k++)
            {
                pattern+="*"
            }
            console.log(pattern)
            }
        else
        {
            
        }
        
    }
