
let line=4;
let pattern='';

for(let i=1; i<=line; i++)
    {
         space=4-i;
         stars=2*i-1;
        
for(let j=1; j<=space; j++)
    {
        pattern+=" ";
    }

for(let j=1; j<=stars; j++)
        {
            pattern+="*";
        }
        pattern += "\n";
    }
    console.log(pattern);









// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "*";
//     let space = " ";
//     console.log(space.repeat(n - i) + str.repeat(i*2-1));
// }
// for (let i = n - 1; i >= 1; i--) {
//     let str = "*";
//     let space = " ";
//     console.log(space.repeat(n - i) + str.repeat(i*2-1));
// }

