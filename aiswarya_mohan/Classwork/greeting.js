let greeting = () => {
    return new Promise(function(resolve){
        resolve("Hello World");
})
}

setTimeout(()=>{
    for(let i=1;i<=3;i++)
    {
        greeting()
        .then((successMessage)=>console.log(successMessage))
        .catch(err=>console.log(err))
    }
},3000)

// greeting()
// .then((successMessage)=>console.log(successMessage))
// .catch(err=>console.log(err))
// greeting()
// .then((successMessage)=>console.log(successMessage))
// .catch(err=>console.log(err))