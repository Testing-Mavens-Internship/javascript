console.log("printing value in array");
let arr=[5];
arr[0]="aiswarya";
arr[1]="riya";
arr[2]="diya";
arr[3]="piya";
arr[4]="fiya";
arr[5]="maya";
arr[6]="daya";

for( let value of arr )
    {
        console.log( value );
    }


    console.log("--- declartion 2---")
    let arr2=new Array(4);
    arr2[0]="aiswarya";
    arr2[1]="riya";
    arr2[2]="diya";
    arr2[3]="piya";
    arr2[4]="fiya";
    arr2[5]="maya";
    arr2[6]="daya";
    
    for( let value2 of arr2 )
        {
            console.log( value2 );
        }


console.log("--use foreach to get data---");

let students =["Aby", "Biny","Ciny","Geethu","sachin"]

let names=[];


students.forEach((value)=>
{
names.push(value);
console.log(value);

})
console.log("--print as array---");
console.log(names);
