export default class TaskOne{
    constructor(name){
        this.name=name;

    }
    walk(){
        console.log(`${this.name} can walk.`);
    }
}
let task=new TaskOne("Honey");
task.walk();