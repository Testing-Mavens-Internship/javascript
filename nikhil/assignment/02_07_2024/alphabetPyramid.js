const letters='ABCDEF';
numRows=6;

for(let num=0;num<numRows;num++)
    {
        let pattern=" ";
        for(let space=1;space<=numRows-num;space++)
        {
            pattern+=" ";
        }
        for(let letter=0;letter<=num;letter++)
        {
            pattern+=letters[num];
            if(letter<num)
                pattern+=" "
        }
        console.log(pattern);
    }
for(let num=numRows-2;num>=0;num--)
    {
        let pattern=" ";
        for(let space=1;space<=numRows-num;space++)
        {
            pattern+=" ";
        }
        for(let letter=0;letter<=num;letter++)
        {
            pattern+=letters[num];
            if(letter<num)
                pattern+=" "
        }
        console.log(pattern);
    }