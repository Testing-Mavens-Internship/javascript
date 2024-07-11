
for(let i=1;i<=8;i++){
    if(i<=4){
    let pattern=' ';
let space=4-i;
let star=2*i-1;
for(j=1;j<=space;j++){
    pattern+=' ';
}
    for(y=1;y<=star;y++){
        pattern+='*';
    }
console.log(pattern);
    }
    else{
 let space1=i-5;
 let start1=17-i*2;
 let pattern1='';
 for(let k=1;k<=space1;k++){
 pattern1+=' ';
 }
 for(let l=1;l<=start1;l++){
 pattern1+='*';
}
console.log(pattern1);

    }
}
