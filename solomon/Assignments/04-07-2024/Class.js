class Mamal {
    constructor(food = "food", animal = "animal") {
      this.food = food;
      this.animal = animal;
    }
  
    speak() {
      console.log(this.animal + " eats " + this.food);
    }
  }
  
  class Dog extends Mamal {

  }
  
  class Goat extends Mamal{
    constructor(food,animal){
        super(food,animal);
    }
  }
  let pug = new Dog("pedigree", "Pug");
  pug.speak(); 

  let g= new Goat("grass","Goat")
  g.speak();
    