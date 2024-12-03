const letters='ABCDEF';
numRows=6;

for(let num=0;num<numRows;num++)
    {
        let pattern="";
        for(let space=0;space<numRows-num-1;space++)
        {
            pattern+=" ";
        }
        for(let letter=0;letter<=num;letter++)
        {
            pattern+=letters[num]+" ";
            
        }
        console.log(pattern);
    }
for(let num=numRows-2;num>=0;num--)
    {
        let pattern="";
        for(let space=0;space<numRows-num-1;space++)
        {
            pattern+=" ";
        }
        for(let letter=0;letter<=num;letter++)
        {
            pattern+=letters[num]+" ";
            
        }
        console.log(pattern);
    }