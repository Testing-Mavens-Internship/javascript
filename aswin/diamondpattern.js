let i = 1;
while(i<=5)
    {
        let pattern='';
        let space='';
        let j=1;
        if (i%2!=0)
            {
                while(j<=i)
                    {
                        pattern+='* ';
                        j++;
                    }
            }
        let k=0;
        while(k<5-i)
            {
                space+=' ';
                k++;
            }
        console.log(space+pattern);
        i++;
    }
let a=4;
while(a>=1)
    {
        let pattern='';
        let space='';
        let b=5;
        if(a%2!=0)
            {
                while(b>=a)
                    {
                        pattern+='* ';
                        b--;
                    }
            }
        let k=0;
        while(k<5-a)
            {
                space+=' ';
                k++;
            }
        console.log(space+pattern);
        a--;
    }
