// let users = ['user1','user2','user3'];

// let getUsers = () => {
//     setTimeout(() => {
//         users.forEach(user => console.log(user))
//     }, 1000)
    
// }

// let createUsers = (user,callback) => {
//     setTimeout(() => {
//         users.push(user)
//         callback()
//     }, 2000)
    
// }

// createUsers('user4',getUsers)

// let getapi = async () => {
//     let response = await fetch("https://reqres.in/api/users?page=2");
//     let json = await response.json();
//     console.log(json)
// }

// getapi();




////Create a function that waits for 3 seconds before printing a greeting message.using promise

let greating =  () =>{
        return new Promise((resolve) =>  
            setTimeout(()=> {
                console.log("Hello");
                resolve();
            }, 3000))};

    for(let i=0;i<3;i++)
    {
        await greating();
    }
