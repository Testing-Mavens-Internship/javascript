let users = ['user1','user2','user3'];
 
let getUsers = () => {
    setTimeout(() => {
        users.forEach(user => console.log(user))
    }, 3000)
}
 
let createUsers = (user,callback) => {
    return new Promise((resolve) =>{
    setTimeout(() => {
        users.push(user);
        resolve();
        callback()
    },2000);

});
    
}
 
createUsers('user4',getUsers)
//getUsers();