//1
const nestedArray = [[1, 2, [3, 4]], [5, [6, [7, 8]]], 9];
console.log(nestedArray.flat(Infinity).reduce((sum,item)=>sum+item,0));
//2
const peoples = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 35 },
    { name: "Eve", age: 30 }
  ];
  
  const grouped = peoples.reduce(groupPeople, {});
  const result = Object.entries(grouped);
  console.log(result)
  
  function groupPeople(acc,people)
  {
      if (!acc[people.age]) {
          acc[people.age] = [];
      }
      acc[people.age].push(people.name);
      return acc
  }