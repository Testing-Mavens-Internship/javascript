
// for(let row=1;row<=5;row++){
//     pattern="";
//          for(let col=1;col<=row;col++){
            
//             pattern+=row;
//     }
//     console.log(pattern);
// }
// for(let row=6;row<=9;row++){
//     pattern="";
//          for(let col=10-row;col>=1;col--){
            
//             pattern+=row;
            
//     }
//     console.log(pattern);
// }

for(let row=1;row<=10;row++){
    pattern="";
    let num=(row<=5)?row:(10-row);
    for(let col=1;col<=num;col++){
              pattern+=row;
            }
            console.log(pattern);
}