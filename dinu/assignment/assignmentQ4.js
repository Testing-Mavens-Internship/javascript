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
console.log("inActive Users:",users.filter((items=>items.active==false)));

console.log("Split users:")
 const names=users.map((n)=>{const[firstname,lastname]=n.name.split(' ')
    return{firstname,lastname}
 });
 console.log(names);

console.log("Sorted users:");
console.log(names.sort((a,b)=>a.lastname>b.lastname?1:-1));
console.log("Find User By Email:",users.find((items )=> items.email === "sam.brown@example.com"));
console.log("All Hobbies:",users.flatMap((items)=> items.hobbies));
console.log("Total Hobbies:",users.flatMap((items)=> items.hobbies).length);
console.log("User entries:",users.map(items=>Object.entries(items)));
