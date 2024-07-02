//if
let a =5;
if(a>=0){
    console.log(a +" is a positive number");
}
else if(a<0){
    console.log(a +" is a negative number");
}

//nested if
let a = 1;
if(a>=0){
    if(a<10){
        console.log(a+ " is a single digit number");
    }else{
        console.log(a+ " is not a single digit number");
    }
}

//else if ladder
let a=4;
let b=2;
if(a<b){
 console.log(a+ " is smaller than "+b );
}else if(a>b){
    console.log(a+ " is greater than "+b );
}else{
    console.log("invalid");
}

//switch
var day = 'Monday';
switch(day){
    case 'Tuesday':
        console.log('Tuesday');
        break;
    case 'Monday':
        console.log('Monday');
        break;
    case 'Wednesday':
        console.log('Wednesday');
        break;
    default:
        console.log('Friday');
}



