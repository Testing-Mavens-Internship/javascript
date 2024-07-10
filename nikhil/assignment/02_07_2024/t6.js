maxCol=5;
for(let row=1;row<10;row++)
    {
        pattern="";
    //     if(row<=maxCol)
    //     {
    //         for(let col=1;col<=row;col++)
    //         {
    //             pattern+=row
    //         }
    //     }
        
          
    // else{
    
    //     for (let col = 10 - row; col >= 1; col--) {
    //         pattern += row;
    //     }
        
    // }
    let numCols = (row <= maxCol) ? row : (10 - row);

    for (let col = 1; col <= numCols; col++) {
        pattern += row;
    }
    console.log(pattern);
}

    
    
    
