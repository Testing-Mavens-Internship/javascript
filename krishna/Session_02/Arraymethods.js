{
    let arr=[5];
     arr[0]=2;
     arr[1]=3;
     arr[2]=4;
     arr[3]=5;
     arr[4]=6;
     arr[5]=7;
     console.log(arr);
}

//for Each
{
let students=["ath","alee","dinu","hon"];
let names=[];
students.forEach((value)=>{
    names.push(value);
});
console.log(names);
}


//Map

{
    let Numbers=[1,2,3,4,5];
    let x=Numbers.map((items)=>items*5)
 console.log(x);
}

//Filter


{
const ages=[32,33,45,67];
const result=ages.filter(age => {
    return age >=18;
});
console.log(result)
}

//slice

{let numbers=[1,2,3,4,5]
let x=numbers.slice(0,2)
console.log(x)
}
//Splice

{
    let numbers=[1,2,3,4,5]
let x=numbers.splice(0,2)
console.log(x)
}