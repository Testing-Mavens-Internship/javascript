const text= "javascript is fun";
// // let arr=[]
// // arr=text
// const a=text.reduce((total,val)=>total+val)
// console.log(a)
let ar=["a","e","i","o","u"];
const vowels=text.split(" ").reduce((count,char)=>{
for(let i=1;i<=ar.length;i++)
    {
        if(char==ar[i]){
            count=count+1;
        }
        else{continue;}
     }
                                                }
   
)
console.log(vowels);