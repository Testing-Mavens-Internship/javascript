{
    let getApi = async () => {
    let response = await fetch('https://reqres.in/api/users?page=2');
    let json = await response.json();
    console.log(json)
}

getApi()
}
console.log()


//Create a function that waits for 3 seconds before printing a greeting message.using promise
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


//mycode
{
    let wait_func =new Promise((Resolve, Reject) => {
    for(let i=1; i<=3; i++)
    {
        setTimeout(()=>{
            console.log("Message")
        }, 3000)}
    }).then((Resolve)=> {
        console.log(Resolve)
    })
    }
