// let users=['user1','user2','user3']
// let getUsers = () => {
//     setTimeout(() => {
//         users.forEach(user => console.log(user))
//     }, 1000)
// }
 
// let createUsers = (user,callback) => {
//     setTimeout(() => {
//         users.push(user)
//         callback();
//     }, 2000)
//     // callback;
// }
 
// createUsers('user4',getUsers())
// getUsers();

//with promise..

let users = ['user1','user2','user3'];
 
let getUsers = () => {
    setTimeout(() => {
        users.forEach(user => console.log(user))
    }, 1000)
}
 
let createUsers = (user) => {
    return new Promise((resolve)=>setTimeout(() => {
        users.push(user)
        resolve()
    }, 2000))
}
 
await createUsers('user4')
getUsers();