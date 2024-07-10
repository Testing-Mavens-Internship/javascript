
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms*1000));
  }
  
  
  async function delayGreet() {
    for(let i=0;i<3;i++){
        await delay(3).then(()=>console.log("hey")) 

    }
}
    
   
    delayGreet();
//   let getApi = async () => {
//     let response = await fetch('https://reqresin/api/users?page=2');
//     let json = await response.json();
//     console.log(json)
// }
// getApi();
  