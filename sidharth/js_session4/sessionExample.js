let users=['user1','user2','user3'];
let getUsers = () => {
    setTimeout(() => {
        users.forEach(user => console.log(user))
    }, 1000)
}
 
let createUsers = (user,callback) => {
    setTimeout(() => {
        users.push(user) 
        callback()
    }, 2000)
}
 
createUsers('user4',getUsers)

//getUsers();

            
function time()
{
    return new Promise(resolve=>{setTimeout(resolve,3000)})
}
async function display()
{
    for(let i=0;i<3;i++)
    {
   await time().then(()=>console.log("Greetings"))
    }
}
display();




    