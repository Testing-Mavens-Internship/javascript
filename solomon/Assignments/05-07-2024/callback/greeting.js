function Example() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Greeting!");
        resolve();
      }, 3000);
    });
  }
  for(let i=1;i<=3;i++){
     await Example();
  }
 
// let res=await.example();
// let res1=await.example();
// let res2=await.example();

// function delayedGreeting() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Hello, this is your greeting message!');
//         }, 3000);
//     });
// }
// let promise = Promise.resolve();
// for (let i = 0; i < 3; i++) {
//     promise=promise.then(() => delayedGreeting().then(console.log));
// }
