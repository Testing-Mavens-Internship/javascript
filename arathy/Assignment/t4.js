


// let i=0;
// while(i<=5){
//     var p ='';
//     switch(i){
//         case 1:
//             for(j=1;j<=9;j++){
//                 p+="* "; 
//             }
//         console.log(p);  
//         break;

//         case 2:
//             for(j=4;j>=2;j--)
//                 {
//                     p+=" "; 
//                 }

//             for(j=1;j<=7;j++){
//                 p+=j+" "; 
//             }
//         console.log(p);
//         break;

//         case 3:
//             for(j=4;j>=2;j--)
//                 {
//                     p+="  "; 
//                 }
//             for(j=1;j<=5;j++){
//                 p+="* "; 
//             }
//         console.log(p);  
//         break;

//         case 4:
//             for(j=4;j>=2;j--)
//                 {
//                     p+="   "; 
//                 }

//             for(j=4;j>=2;j--)
//             {
//                 p+=j+" "; 
//             }
//         console.log(p);
//         break;

//         case 5:
//             for(j=4;j>=2;j--)
//                 {
//                     p+="    "; 
//                 }
//             for(j=1;j<=1;j++){
//                 p+="*"; 
//             }
//         console.log(p);  
//         break;
//     }
//     i++;
// }
let i = 1;
while (i <= 5) {
    let p = '';
    
    for (let k = 1; k < i; k++) {
        p += '  ';
    }
    
    if (i==1) {
        for (let j = 1; j <= 9; j++) {
            p += "* ";
        }
    } else if (i==2) {
        for (let j = 1; j <= 7; j++) {
            p += j + " ";
        }
    } else if (i==3) {
        for (let j = 1; j <= 5; j++) {
            p += "* ";
        }
    } else if (i==4) {
        for (let j = 4; j >= 2; j--) {
            p += j + " ";
        }
    } else if (i==5) {
        p += "*";
    }
    
    console.log(p);
    i++;
}