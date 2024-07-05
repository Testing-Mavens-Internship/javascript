function wait(sec)
{
    return new Promise(resolve=>{setTimeout(resolve,sec*1000)})
}
async function greeting()
{
    for(let i=0;i<3;i++)
    {
   await wait(3).then(()=>console.log("Hello Mavens!!!"))
    }
}
greeting();




