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
  ]
  //filter
  console.log("inactive Users:", users.filter(user => !user.active));
  
  // split
//   users.forEach(user => {
//    const [firstName, lastName] = user.name.split(' ');
//     user.firstName = firstName;
//      user.lastName = lastName;
//    });
console.log("First name and Last name of users:")
const names=users.map((n)=>{const[firstname,lastname]=n.name.split(' ')
    return {firstname,lastname}

});
console.log(names);
console.log('\n')
  
  // console.log(users);

  //sort
//  users.sort();
//  console.log(users)

// find emailid
 const userEmail = "sam.brown@example.com"
 const userfound = users.find((user)=>user.email==userEmail)
console.log(userfound);

 // total number of hobbies
 console.log("Total number of hobbies:", users.reduce((total, user) => total + user.hobbies.length, 0));

 //object.entries
 console.log(users.map(user => Object.entries(user)));