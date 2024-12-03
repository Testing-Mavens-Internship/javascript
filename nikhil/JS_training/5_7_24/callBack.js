
let users = ['user1','user2','user3'];
 
let getUsers = () => {
    setTimeout(() => {
        users.forEach(user => console.log(user))
    }, 1000)
    
}
 
let createUsers = (user,getUsers) => {
    setTimeout(() => {
        users.push(user)
        getUsers()
    }, 2000)
    
}
 
createUsers('user4',getUsers)
// getUsers();
