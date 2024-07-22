class Animal{
   constructor(name){
    this.name=name;
  }
    
   food(){
     console.log(this.name);
    }
}
class Dog extends Animal{

    constructor(){
        super();
    }

      breed(){
        console.log("Dalamation");
        }

}


console.log(new Animal("Puppy").name);

