for(let row=0;row<=8;row++){
    if(row<=4){
        space=(4-row);
        pattern="";
        for(let col=0;col<space;col++){
        pattern+=" ";
        }
        star=(2*row-1);
        for(let num=0;num<star;num++){
        pattern+="*";
        }
    }
    else{
        space=(row-5);
        pattern=""
        for(let col=0;col<space;col++){
        pattern+=" ";
        }
        star=(17-row*2);
        for(let num=0;num<star;num++){
        pattern+="*";
        }
    }
    console.log(pattern);
}