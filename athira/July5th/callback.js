{
    let users = ['user1','user2','user3'];
 
let getUsers = () => {
    setTimeout(() => {
        users.forEach(user => console.log(user))
    }, 1000)
}
 
let createUsers = (user, callback) => {
    setTimeout(() => {
        users.push(user)
        callback()
    }, 2000) 
}
 
createUsers('user4', getUsers)
//getUsers();
}



{
let users = ['user1','user2','user3'];
 
let getUsers = () => {
    setTimeout(() => {
        users.forEach(user => console.log(user))
    }, 1000)
}
 
let createUsers = (user) => {
    setTimeout(() => {
        users.push(user)
        getUsers()
    }, 2000) 
   
}
 
createUsers('user4')
//getUsers();
}