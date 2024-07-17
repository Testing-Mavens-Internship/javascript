class Animal {
 //export default class Animal ;
 //import Animal from '../';
    constructor(breed)
    {
        this.breed = breed;


    }

    walk()
    {
        console.log(`${this.breed}  can walk `);
    }

    swim()
    {
        console.log(`${this.breed} can swim`);
    }

    drink()
    {
      console.log(`${this.breed} can drink`);  
    }
 } 
 
 let obj_animal = new Animal();
 //console.log(obj_animal.breed);
 obj_animal.walk();
 obj_animal.swim();
 obj_animal.drink();


class Dog extends Animal
{
    constructor(breed) {
        this.breed =breed;
        super();
       // we really dont need super here : super is used when we create a class in another file and we want to to use that class in our current file : for that we import the file in our current class and then use super

    }

    bark() {
        console.log(`${this.breed} can bark`);
    }

}

let obj_dog = new Dog("pug");
obj_dog.drink();
obj_dog.walk();
obj_dog.bark();
console.log(obj_dog);