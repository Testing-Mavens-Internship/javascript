class student
{
    constructor(mk)
    {
        this.mark=mk;
    }

}
class next extends student
{
    constructor(parentmark)
    {
        super(parentmark);
        this.newmark=parentmark;
        // super()
    }
    display()
    {
        console.log(this.newmark);
    }
}
let first = new student(50);
let second = new next(first);
second.display();