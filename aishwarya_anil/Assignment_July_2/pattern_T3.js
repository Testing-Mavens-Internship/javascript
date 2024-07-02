
let i=0;
let num=5;
while(i<num) {

    let pattern='';
    let space='';
    let j=0;
    while(j<=i)
        {
            pattern+="*";
            j++;
        }

        let k=0;
        while(k < num -i -1)
            {
                space +=' ';
                k++;
            }
        console.log(space+pattern);
        i++;   
}






// let i=1;
// let n=5;
// let num=5;
// while(i<=num) {

//     let pattern='';
//     let j=1;
//     while(j<=i)
//         {
//             pattern+=i;
//             j++;
//         }
//         console.log(pattern);
//         i++;   
// }

// let numb=5;
// let pattern = "";
// for (let i = 1; i <numb; i++) {
//    for (let j =i; j <numb; j++) {
//       pattern +=i+5;
//    }
//    pattern += "\n";
// }
// console.log(pattern);



// let i=1;
// let n=5;
// let num=5;
// let num2=5;
// while(i<=num) {

//     let pattern='';
//     let j=1;
//     while(j<=i)
//         {
//             pattern+=i;
//             j++;
//         }
//         console.log(pattern);
//         i++;   
// }

// while(i<=num2) {

//     let pattern='';
//     let j=1;
//     while(j<=i)
//         {
//             pattern+=i;
//             j++;
//         }
//         console.log(pattern);
//         i++;   
// }



