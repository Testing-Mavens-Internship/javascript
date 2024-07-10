
for(let row=1;row<=6;row++){
     let pattern = "";
     for(let col=1;col<=5;col++){
     if((row==1 || row==4)&& col==3){
        pattern+="*";
     }
     else if((row==2 || row==6)&&(col==1||col==2||col==3||col==4||col==5)){
        pattern+="*";
    }
    else if((row==3 || row==5) && (col==2||col==4)){
        pattern+="*";
    }
    else{
        pattern+=" ";
    }
}
    console.log(pattern);
}


