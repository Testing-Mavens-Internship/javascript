class Animal
{
    constructor(name, breed)
    {
        this.name=name;
        this.breed=breed;
        console.log(name)
        console.log(breed)
    }

    drink()
    {
        console.log("Drink function in Animal")
    }
}

class Dog extends Animal
{
    constructor(name, breed)
    {
        super(name, breed)
    }

    sleep()
    {
        console.log("Sleep function in Dog")
    }
}

let animal1=new Animal("Bruno", "Dog")
// animal1.drink()
let dog1=new Dog("Max", "Lab")
dog1.drink()
dog1.sleep()
