let p = new Promise((resolve, reject) => {
    let a  = 5
    a>6?resolve("Success"):reject("failed")
});

p.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})

