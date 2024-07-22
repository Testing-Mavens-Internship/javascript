//Question 3
for(let i=1;i<=11;i++){
    let print ='';
if(i<=6){
    let space = 6-i*2;
    
    for(let j=1;j<=space;j++){
     print+=' ';
    }
    
      let k=65;
    //for(let l=1;l<=6;l++){
        for(let m=1;m<=i;m++){
       // for(let k=65;k<=70;k++){
        print+= String.fromCharCode(k);
        k++;
        }
   // }
}
//}

console.log(print);    
}

//Question 2
for(let row = 1;row<=7;row++){
  
  if(row<=3){
  let view='';
  let spaces=7-row*2;
  for(let first_star_half=1;first_star_half<=row;first_star_half++)
  {
    view+='*';
  }
  for(let spc=1;spc<=spaces;spc++){
    view+=' ';
  }
  for(let second_star_half=1;second_star_half<=row;second_star_half++)
    {
      view+='*';
    }

  console.log(view);
  }else if(row==4){
  let view_mid='';
  mid_len=row+3;
  for(let mid_str=1;mid_str<=mid_len;mid_str++)
    {
       view_mid+='*';
    }
    console.log(view_mid);
}else{
  let view_bottom='';
  let bot_len=1;
  for(let bot_str=3;bot_str>=bot_len;bot_str--)
    {
      view_bottom+='*';
    }

   let spc_len=1; 
   for(let spc_str=1;spc_str==spc_len;spc_str++)
    {
      view_bottom+=' ';
    }
    spc_len++;

    let str_len=1;
    for(let bot_str1=3;bot_str1>=str_len;bot_str1--)
      {
        view_bottom+='*';
      }
      console.log(view_bottom);
}

    
}
