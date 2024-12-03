let totalRow = 4
let currentRow = 1

do
{
// space count
let pattern = ' '
let space = totalRow-currentRow
let star = currentRow
do
{
    pattern+=' '
    space--
}while(space>0)

// star count
do
{
    pattern+='*'
    star--
}while(star>0)

    console.log(pattern)
    currentRow++

}while(currentRow<=totalRow)