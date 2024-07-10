users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      active: true,
      hobbies: ["reading", "gaming", "hiking"]
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      active: false,
      hobbies: ["cooking", "gardening"]
    },
    {
      name: "Sam Brown",
      email: "sam.brown@example.com",
      active: true,
      hobbies: ["running", "swimming"]
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      active: true,
      hobbies: ["dancing", "painting"]
    }
  ];
  //1
  console.log("Inactive Users:")
  const active=users.filter((flt)=>{if(flt.active==false){console.log (flt.name)}});
  console.log("\n")
  
  //2
console.log("First name and Last name of users:")
 const names=users.map((n)=>{const[firstname,lastname]=n.name.split(' ')
    return{firstname,lastname}
 });
 console.log(names);
 console.log("\n")

 //3
console.log("Sorted by users last names:");
console.log(names.sort((a,b)=>a.lastname>b.lastname?1:-1));
console.log("\n")

//4
console.log("Find User by Email :");
const find=users.find(({email})=>email==="sam.brown@example.com");
console.log(find.name);
console.log("\n")

//5
console.log("Flatten Hobbies")
console.log(users.flatMap((items)=>items.hobbies))
console.log("\n")

//6
console.log("Total hobbies:")
console.log(users.flatMap((items)=>items.hobbies).length)
console.log("\n")

//7
console.log("Key value pair:")
console.log(users.map(news => Object.entries(news)));
