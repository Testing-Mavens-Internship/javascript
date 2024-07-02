let numRow= 5;

let row =1;
while(row<=numRow){
    let col= 1;
    let pat="";
    while(col<=row){
        pat=pat+"*";
        col++;
        
    }
    console.log(pat);
    row++;
}
