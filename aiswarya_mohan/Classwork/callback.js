let users=["user1","user2","user3"]

let getuser = () => {
    setTimeout(()=>{
        users.forEach((user)=>console.log(user))
    },3000)
}

let createuser = (user) => {
setTimeout(()=>{
    return new Promise((resolve)=>{
        users.push(user)
        resolve()
    })
},2000)
}

await createuser("user4")
getuser()