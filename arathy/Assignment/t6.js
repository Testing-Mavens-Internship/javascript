// maxCol=5;
// for(let row=1;row<10;row++)
//     {
//         pattern="";
     
//    }
//     let numCols = (row <= maxCol) ? row : (10 - row);

//     for (let col = 1; col <= numCols; col++) {
//         pattern += row;
//     }
//     console.log(pattern);
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += i;
    }
    console.log(pattern);
}

for (let i = 4; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += i;
    }
    console.log(pattern);
}
