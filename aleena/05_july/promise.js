//using async
let example = async () => {
	await new Promise((res) => setTimeout(res, 3000));
	console.log("greeting");
}
for(let i=1;i<=3;i++){
const result = await example();}



//using Promise
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