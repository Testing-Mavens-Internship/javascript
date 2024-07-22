class Maths{
    constructor(a,b){
        this.a=a;
        this.b=b;
        this.c=7;
    }
    multi(a,b){
        console.log(a*b);
        console.log(this.a*this.b);
    }
}
let ma=new Maths(4,2)
//let su=new Sum(ma)

class Sum extends Maths{
    
}