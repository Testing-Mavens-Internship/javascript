let i=0;

while(i<5)
    {
        let pattern='';
        let space='';
        let j=0
        while(j<=i)
            {
                
                pattern += '*';
                j++;
            }
        let k =0;
        while(k<5-i-1)
            {
                space += ' ';
                k++;
            }
        console.log(space + pattern)
        i++;
    }