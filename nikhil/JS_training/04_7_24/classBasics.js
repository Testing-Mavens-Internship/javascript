// class Animal{
//     constructor(name,color){
//         this.name=name
//         this.color=color
//     }
//      thisAnimal(){
//         return `This ${this.name} is ${this.color}`
        
//     }
// }

// const animal=new Animal("pug","black")
// console.log(Animal.thisAnimal())

// class dog extends Animal{
//     constructor(name,color){
//         super()
//         this.name=name
//         this.color=color
//     }
    
//     walk(){
//         return `${this.name} is walking`
//     }
//     col(){
//         return `${this.name} is ${this.color}`
//     }

// }
// const dog1=new dog("pug","black")



// console.log(dog1.walk())




// ---------------------------------------------------------------------------------------------



class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  thisAnimal() {
    return `This ${this.name} is ${this.color}`;
    
  }
}

const animal = new Animal("pug", "black");
animal.thisAnimal()
