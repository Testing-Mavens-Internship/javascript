//  *
//  **
//  ***
//  ****
//  *****
//  ******
// 
// let i=1;
// while(i<7){
//     p=" ";
//     var j=1;
//     while(j<=i)
//         {
//             p+="*";
//             j++;
//          }
//     console.log(p);     
//     i++;
// }

// * * * * * * * * * 
//   1 2 3 4 5 6 7 
//     * * * * *   
//       4 3 2     
//         * 
// 
// let i = 1;
// while (i <= 5) {
//     let p = '';

//     for (let k=1;k<i;k++) {
//         p += '  ';
//     }

//     if (i==1) {
//         for (let j=1;j<=9;j++) {
//             p += "* ";
//         }
//     } else if (i==2) {
//         for (let j=1;j<=7;j++) {
//             p += j + " ";
//         }
//     } else if (i==3) {
//         for (let j = 1; j <= 5; j++) {
//             p += "* ";
//         }
//     } else if (i==4) {
//         for (let j = 4; j >= 2; j--) {
//             p += j + " ";
//         }
//     } else if (i==5) {
//         p += "*";
//     }

//     console.log(p);
//     i++;
// }


// i=1;
// while(i<=8){
//     let p=' ';
//     if(i%2!=0){
//         j=1;
//         while(j<=i){

//             p+="* "
//             j++;

//          }
// }
//     console.log(p);
//     i++;
// }

// *

// ***

// *****

// *******


// *******

// *****

// ***

// *
// max=4;
// for(i=1;i<=8;i++){
//     p='';
//     space=max-i;
//     for(e=1;e<=space;e++){
//         p+=" ";
//     }
//     if(i%2!=0){
//         for(j=1;j<=i;j++){
//             p+="*";
//         }
//     }
//     console.log(p);
// }
// for(i=0;i<=8;i++){
//     p=' ';
//     if(i%2!=0){
//         for(j=7;j>=i;j--){
//             p+="*";
//         }
//     }
//     console.log(p);
// }

let count = 1;
for (let i = 1; i <= 7; i++) {
    let star = [];
    for (let j = 1; j <= 7; j++) star.push("*");
    for (let i = count; i < star.length - count; i++) star[i] = " ";
    i <= 3 ? count += 1 : count -= 1;
    console.log(star.join(""))
}

let alphat = "ABCDEF";
let n = alphat.length;
let totalLines = 2 * n - 1;
for (let i = 1; i <= totalLines; i++) {
    let str = i < n ? alphat[i - 1] + ' ' : alphat[totalLines - i] + ' ';
    let space = i < n ? ' '.repeat(n - i) : ' '.repeat(i - n)
    console.log(space + str.repeat(i <= n ? i : totalLines - i + 1));
}
