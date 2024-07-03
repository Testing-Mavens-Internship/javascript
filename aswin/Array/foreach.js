let students = ["Sidhu","Solomon","Aswin","Dinu"]
let names = []

students.forEach(CopyNames);

function CopyNames(name, index){
    names[index]=name
}

console.log(names)