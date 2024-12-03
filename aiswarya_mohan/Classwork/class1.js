// no need to use super here because both parent and child class in same file
// import Animal from '../'  : child classil parent import cheyanm
// export default class Animal : I have to export Animal class so that I can access properties of Animal in child class
class Animal
{
    constructor()
    {
        this.breed="tetr"
    }
    eat()
    {
        console.log(`${this.breed} can eat`)
    }
    fly()
    {
        console.log(`${this.breed} can fly`)
    }
}

class Dog extends Animal
{
    constructor()
    {
        super()    // used to access properties of parent class constructor in child class
    }
}

let obj= new Animal("Retriever")
console.log(obj.breed)
obj.eat()
obj.fly()
let obj1= new Dog(obj)
console.log(obj1.breed)
// obj1.eat()
// obj1.fly()
