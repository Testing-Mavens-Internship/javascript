for (let i = 1; i <= 4; i++) //4 is the size
    {
    let pattern= '';
    for (let j = 1; j <= i; j++) 
        {
        pattern += '*';
    }
    let space='';
    for (let j = 1; j <= 2 *(4-i); j++) 
        {
        space += ' ';
    }
    let star='';
    for (let j = 1; j <= i; j++) 
        {
        star += '*';
    }
    
    console.log(pattern+space+star);
}


for (let i = 3; i >= 1; i--) 
    {
    let pattern = '';
    let space='';
    let star='';
    for (let j = 1; j <= i; j++) 
        {
        pattern += '*';
    }
  
    for (let j = 1; j <= 2 * (4-i); j++) 
        {
        space += ' ';
    }
 
    for (let j = 1; j <= i; j++) 
        {
        star += '*';
    }
    
    console.log(pattern+space+star);
}