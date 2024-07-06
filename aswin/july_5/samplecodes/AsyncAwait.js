function makerequest(msg){
    return new Promise((resolve,reject) => {
        console.log(`making request to ${msg}....`)
        msg === 'google'?resolve("Google says hi"):reject("We can only talk to google")
    })
}

function processRequest(response){
    return new Promise((resolve,request)=> {
        console.log("Processing Request")
        resolve(`Extra Info + ${response}`)
        
    })
}


    async function doWork(){
        try{
        const response = await makerequest("goo")
        console.log(response)
        const processedresponse = await processRequest(response)
        console.log(processedresponse)
    }catch(err){
        console.log(err)
    }
    
}
doWork();


