
// let getMessage  = new Promise((Resolve, Reject) =>{
    
//     setTimeout(() => {
//       console.log("Hello")
//     },3000);
// }).then((Resolve)=>{
    
//     console.log(Resolve)
// })
function time(sec)
{
    return new Promise(resolve=>{setTimeout(resolve,sec*1000)})
}
async function display()
{
    for(let i=0;i<3;i++)
    {
   await time(3).then(()=>console.log("Greetings"))
    }
}
display();