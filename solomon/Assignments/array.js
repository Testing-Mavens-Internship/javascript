const arr=new Array(5);
for(i=0;i<=9;i++)arr[i]=i;
console.log(arr)

let students = ["Aby", "Binu", "Ciny", "Geethu", "Sachin"];
let names = [];
students.forEach(myFunction);

function myFunction(value, index) {
    names[index] = value;
}

console.log(names);
