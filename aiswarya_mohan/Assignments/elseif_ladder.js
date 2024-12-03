let studentName="Anju"
let marks = 75
let grade = ""
if(marks>90)
    {
        grade = "A+"
    }
else if(marks>80 && marks<=90)
    {
        grade = "A"
    }
else if(marks>70 && marks<=80)
    {
        grade = "B+"
    }
else if(marks>60 && marks<=70)
    {
        grade = "B"
    }
else if(marks>50 && marks<=60)
    {
        grade = "C"
    }
else if(marks<40 && marks<=50)
    {
        grade = "D"
    }
    else
    {
        grade = "F"
    }
console.log("----- Grade Sheet -----")
console.log("Name: "+studentName)
console.log("Marks: "+marks)
console.log("Grade obtained: "+grade)