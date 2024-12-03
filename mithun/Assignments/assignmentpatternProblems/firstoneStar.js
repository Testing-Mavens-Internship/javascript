let row=4;
for(let i=1;i<row;i++)
    {
        let pat=""
        for(let j=1;j<=i;j++)
            {
                pat+="*";
            }
            for(let s=0;s<2*(row-i);s++)
                {
                    pat+=" ";
                }
                for(let j=1;j<=i;j++)
                    {
                        pat+="*";
                    }
                    console.log(pat);
    }
    for(let i=row;i>=1;i--)
        {
            let pat="";
            for(let j=1;j<=i;j++)
                {
                    pat+="*";
                }
                for(let s=0;s<2*(row-i);s++)
                    {
                        pat+=" ";
                    }
                    for(let j=1;j<=i;j++)
                        {
                            pat+="*";
                        }
                        console.log(pat)
        }
