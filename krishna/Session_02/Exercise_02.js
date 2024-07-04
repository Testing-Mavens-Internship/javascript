{const numbers=[1,2,3,4,5]
//const m1=0;
const y=numbers.reduce((sum,n1)=>sum+(n1*3))// without m1 ,o/p=43,why???
console.log(y)
}

//

{
    const pancakes=["flipped","right side up","flipped","right side up"];
const y=pancakes.map((cakes)=>"flipped")
console.log(y)
}

//
const text="javascript is fun";
console.log(text.split(' ').map(value=>value[0]=="a"||"e"||"i"||"o"||"u"))

