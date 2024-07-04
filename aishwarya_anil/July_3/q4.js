


const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
  ];
  
console.log(students.map(({ name, scores }) => ({name,average: scores.reduce((sum, score) => sum + score, 0) / scores.length
    })).filter(({ average }) => average > 90));
  
  // High performing students
// You are given an array of objects representing a group of students, each with a name and an array of test scores. Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students who have an average score above 90.
 
// Use:
// map()
// reduce()
// filter()
 
// Input
// const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [75, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "Jack", scores: [100, 100, 100] }
// ];

// Output : 
 


// [  { name: 'Jack', average: 100 }]
  