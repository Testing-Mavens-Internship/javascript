//T1
{
let pattern=''
for(let i=1; i<=4; i++)
{
    let space=4-i
    let star=2*i-1
    
    for(let j=1; j<=space; j++)
    {
        pattern+=' '
    }
    for(let y=1; y<=star; y++)
    {
        pattern+="*"
    }
    pattern+="\n"
}
//pattern = pattern.trim()
console.log(pattern)

let pat = ''
for (let i=4; i>=1; i--) 
{
    let space = 4-i
    let star = 2*i-1

    for (let j=1; j<= space; j++) 
    {
        pat+=' '
    }
    for (let y=1; y<=star; y++) 
    {
        pat+='*'
    }
    pat+='\n'
}
console.log(pat)
}



//T2 using while loop
{
let i=1
while(i<=5)
{
    let pattern=''
    let j=1
    while(j<=i)
    {
        pattern+='*'
        j++
    }
    console.log(pattern)
    i++
}
console.log("\n")
}

//T2 using for loop
/*{
let pat=''
for(let a=1; a<=5; a++)
{
    for(let b=1; b<=a; b++)
    {
        pat+='*' 
    }
    pat+= "\n"
}
console.log(pat)
}*/



//T3
{
    let i=0
    while(i<5)
    {
        let pattern=''
        let space=''
        let j=0
        while(j<=i)
        {
            pattern+='*'
            j++
        }
        let k=0
        while(k<5-i-1)
        {
            space+=' '
            k++
        }
        console.log(space+pattern)
        i++
    }
    console.log("\n")
}



//T4
{
let i=1;
while(i<=5) 
{
    let p = '';
    for (let k=1; k<i; k++) 
    {
        p += '  ';
    }
    
    if(i==1) 
    {
        for(let j=1; j<=9; j++) 
        {
            p += "* ";
        }
    } 
    else if (i==2) 
    {
        for (let j=1; j<=7; j++) 
        {
            p += j + " ";
        }
    } 
    else if (i==3) 
    {
        for (let j = 1; j <= 5; j++) 
        {
            p += "* ";
        }
    } 
    else if (i==4) 
    {
        for (let j = 4; j >= 2; j--) 
        {
            p += j + " ";
        }
    } 
    else if (i==5) 
    {
        p += "*";
    }
    console.log(p);
    i++;
}
console.log("\n")
}



//T5
{
for(let i=1; i<=6; i++) 
{
    let pattern = ''
    for (let j=1; j<=5; j++) 
    {
        if ((i==1 || i==4) && j==3) 
        {
            pattern += '*'
        } 
        else if ((i==2 || i== 6) && (j==1 || j==2 || j==3 || j==4 || j==5)) 
        {
            pattern += '*'
        } 
        else if ((i==3 || i==5) && (j==2 || j==4)) 
        {
            pattern += '*'
        } 
        else 
        {
            pattern+= ' '
        }
    }
    console.log(pattern);
}
console.log("\n")
}



//T6
{
    let i=1
    while(i<=5)
    {
    let pattern=''
    let j=1
    while(j<=i)
    {
        pattern+=i
        j++
    }
    console.log(pattern)
    i++
    }

    let n=5;
    let pat ='';
    for (let i=1; i<n; i++) 
    {
        for (let j=i; j<n; j++) 
        {
            pat +=i+5;
        }
        pat += "\n";
    }
    console.log(pat);
    console.log("\n")
}



//butterfly shape star pattern
{
let n=4
let pattern = '';
for(let i=1; i<=n; i++) 
{
    for(let j=1; j<=i; j++) 
    {
        pattern+='*';
    }
    for(let k=1; k<= 2*(n-i); k++) 
    {
        pattern+=' ';
    }
    for(let l=1; l<=i; l++) 
    {
        pattern+='*';
    }
      pattern+='\n';
    }

for(let i=3; i>=1; i--) 
{
    for(let j=1; j<=i; j++) 
    {
        pattern+='*';
    }
    for(let k=1; k<= 2*(n-i); k++) 
    {
        pattern+=' ';
    }
    for(let l=1; l<=i; l++) 
    {
        pattern+='*';
    }
      pattern+='\n';
}
console.log(pattern);
console.log("\n")
}


//solid diamond alphabet pattern
{
let n=6
let pattern = ''
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

for(let i=0; i<n; i++) 
{
    for(let j=0; j< n-i-1; j++) 
    {
        pattern += ' ';
    }
    
    for(let k= 0; k<=i; k++) 
    {
        pattern += alphabet[i] + ' ';
    }
      pattern+='\n';
}

for (let i=n-2; i>=0; i--) 
{
    for (let j=0; j<n-i-1; j++) 
    {
        pattern += ' ';
    }

    for (let k = 0; k <= i; k++) 
    {
        pattern += alphabet[i] + ' ';
    }
      pattern += '\n';
}
console.log(pattern);
}
