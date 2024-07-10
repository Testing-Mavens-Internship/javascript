// let getApi = async () => {
//     let response = await fetch('https://reqres.in/api/users?page=2');
//     let json = await response.json();
//     console.log(json)
// }
// getApi();
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
