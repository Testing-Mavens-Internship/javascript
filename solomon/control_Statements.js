var x=2;
var y=5;
if(x>=10)
{
    console.log("possitive");
    if(x<y)
        {
            console.log("Inside possitive");
        }
        else{
            console.log("Inside negative");
        }
}
else{
    console.log("negative");
}
if(x>10)
    {
        console.log("possitive");
    }
else if(x<y){
    console.log("x<y possitive");
}

else if(x>y){
    console.log("x>y possitive");
}
else{
    console.log("negative");
}

switch (x){
    case 1:console.log("1st case");
    break;
    case 2:console.log("2nd case");
    break;
    default:console.log("default")
}



for(i=1;i<5;i++){
    for(j=1;j<i;j++){
        console.log("*");     
    }
    console.log("\n")
}

for(i=1;i<7;i++){
    p=" "
    for(j=1;j<i;j++){
        p+="*";     
    }
    console.log(p);
}

//  *
//  **
//  ***
//  ****
//  *****
//  ******
// 
// let i=1;
// while(i<7){
//     p=" ";
//     var j=1;
//     while(j<=i)
//         {
//             p+="*";
//             j++;
//          }
//     console.log(p);     
//     i++;
// }