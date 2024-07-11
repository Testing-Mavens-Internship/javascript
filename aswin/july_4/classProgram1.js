class ClassRoom{
    constructor(cnumber, cdepartment){
        this.classroom_no = cnumber;
        this.department= cdepartment;
        console.log(this.classroom_no,this.department)
    }
    sum(a,b)
    {
        let c= a+b;
        console.log(c)
    }
}
let std = new ClassRoom(24,"phy")
std.sum(5,10)
