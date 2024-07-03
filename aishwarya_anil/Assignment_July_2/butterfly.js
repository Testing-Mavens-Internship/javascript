let rows = 8;
let pattern = "";

for (let i = 1; i < rows / 2; i++) {

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
   
    for (let j = 1; j <= rows - 2 * i; j++) {
        pattern += " ";
    }
  
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n";
}


for (let i = rows / 2; i > 0; i--) {
 
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
   
    for (let j = 1; j <= rows - 2 * i; j++) {
        pattern += " ";
    }
 
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n";
}

console.log(pattern);
















// let rows=7
// let pattern=""
// // left side wing
// for(i=1;i<=rows;i++)
//     {
//         if(i<4)
//             {
//                 for(j=1;j<=i;j++)
//                     {
//                         pattern+="*"
//                     }
//             }
//         else
//            {
//                 for(k=1;k<=rows-i+1;k++)
//                     {
//                         pattern+="*"
//                     }
//            }
//             pattern+="\n"
//     }

// // right side wing
// // for(i=4;i>=1;i--)
// //     {
// //                 for(m=1;m<=i;m++)
// //                     {
// //                         pattern+="*"
// //                     }
// //                 for(x=1;x<=7-(2*i);x++)
// //                     {
// //                         pattern+=" "
// //                     }
// //                 for(o=1;o<=rows-i+1;o++)
// //                     {
// //                         pattern+="*"
// //                     }

// //             pattern+="\n"
// //     }
//     console.log(pattern)