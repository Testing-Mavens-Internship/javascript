const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
  ];
const studentaverages = students.map((std)=>{const average=std.scores.reduce((total,mark)=>total+mark)/std.scores.length;
    return{name:std.name,average:average}
}).filter(std=> std.average>90)
console.log(studentaverages);
    // const heighestaverage = studentaverages.reduce((sum,avg)=>sum+avg)clear