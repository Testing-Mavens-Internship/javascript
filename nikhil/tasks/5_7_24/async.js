// // Create a function that waits for 3 seconds before printing a greeting message.using promise

// const greeting= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("")
//     },3000)
// })
// greeting.then((value)=>{
//     console.log(value)

// })
// greeting.then((value)=>{
//     console.log(value)

// })
// greeting.then((value)=>{
//     console.log(value)


function greeting(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < 3; i++) {
                resolve("Hello");
            }
            
        }, 3000*x);
        
    });
    }

greeting(3)


