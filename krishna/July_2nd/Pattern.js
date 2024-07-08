// Right angled triangle
{
    let i=0;
    while(i<5)
   {
let pattern='';
let space='';
let j=0;
while(j<=i)
    {
        pattern +='*';
        j++;

    }
let k=0;
while(k<5-i-1)
    {
        space +=' ';
        k++;
    }
    console.log(space+pattern)
    i++;
    }
}



// Left angled triangle
{ 

let i=1;
while(i<=5)
    {
let pattern='';
let j=1;
while(j<=i)
    {
        pattern +='*';
        j++;

    }
    console.log(pattern)
    i++;
    }
}


//T6

{ 
    let pattern='';
    for(let i=1;i<=5;i++)
{
for(let j=1;j<=i;j++)
         pattern += i;
       if(j<i)
    
            {
         pattern +=" ";
     
    } 
        console.log(pattern)
}
let n=5;
let pat='';
for(let i=1;i<n;i++)
{
    for(let j=i;j<n;j++)
{
    pat +=i+5
}
pat +="\n";
}
console.log(pat)
}

//T1



for(i=0;i<=8;i++){
    p=' ';
    let space='';
    if(i%2!=0){
        for(j=1;j<=i;j++){
            p+="*";
        }
        let k=0;
    while(k<5-i-1) 

                //if(i%2!=0)
            {
        
                space +=' ';
                k++;
            
    }
    console.log(space+p);
}
for(i=0;i<=8;i++){
    p=' ';
    if(i%2!=0){
        for(j=7;j>=i;j--){
            p+="*";
        }
    }
   
    console.log(p);
}
}


//


