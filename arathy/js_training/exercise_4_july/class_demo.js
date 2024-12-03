class Student {
    constructor(stdmark,stdage){
        this.mark=stdmark;
        this.age=stdage;
    }
}
let student1=new Student(50);

 class nikihil extends Student{
    constructor(stdage){
        super();
        this.age=stdage
    }   
    }
    display()
    {
    
        console.log(this.age);
    }
    
 let first = new Student(stdmark)
 let second=new nikihil(first)
 second.display()


