function time()
{
    return new Promise(resolve=>{
        setTimeout(resolve,3000)
    })
}
async function display()
{
    for(let i=0;i<3;i++)
    {
   await time().then(()=>console.log("Greetings"))
    }
}
display();



