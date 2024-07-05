import TaskOne from "../sample1/taskOne";

class TaskTwo extends TaskOne{
    constructor(name){
        super(name)

    }
}
let tasktwo=new TaskTwo("Krishna");
tasktwo.walk()