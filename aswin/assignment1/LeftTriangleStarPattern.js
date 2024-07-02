
// for(let i = 1 ;i<5;i++){
//     let pattern='';
//     for(let j=1 ; j<i ; j++){
//         pattern += '*';
//     }
//         console.log(pattern)
    
// }
let i=1;
while(i<=5)
    {
        let pattern='';
        let j=1
        while(j<=i)
            {
                pattern += '*';
                j++;
            }
        console.log(pattern)
        i++;
    }