let likestatus = true;
function Sum(){
    return new Promise((resolve, reject) => {
        likestatus?resolve("success"):reject("failed")
    })
}

Sum().then((message) => {
    console.log(message)
}).catch((message)=> {
    console.log(message)
})