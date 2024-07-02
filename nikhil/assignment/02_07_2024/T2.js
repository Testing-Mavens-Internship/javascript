let maxRow=5;
let row=1;

while(row<=maxRow){
    let col=1
    let pat=""
    while(col<=row)
        {
            pat+="*"
            col++
        }
        console.log(pat);
        row++
}