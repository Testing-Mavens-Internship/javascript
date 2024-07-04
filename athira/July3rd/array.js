let arr=[5]  //array is dynamic in JS
arr[0]='A'
arr[1]='B'
arr[2]='C'
arr[3]='D'
arr[4]='E'
arr[5]='F'
arr[6]='G'
for(let i of arr)
{
    console.log(i)
}
console.log("\n")



let a=[1,2,3,4,5,6,7,8,9,10]
for(let value of a)
{
    console.log(value)
}
console.log("\n")
console.log()



//using forEach, add student names from 'student' array to 'names' array
let students=["Athira", "Biny", "Dinu", "Geethu", "Sachin"]
let names=[]
students.forEach(function(i)
{
    names.push(i)
    console.log(i) //display line by line
})
console.log("Elements of 'students' array: " + students)
console.log("Elements of 'names' array: " + names) 
console.log(students)
console.log(names)
console.log("\n")
