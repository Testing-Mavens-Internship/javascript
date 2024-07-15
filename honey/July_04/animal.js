class Animal {
  constructor(name) {
    this.name = name;
  }
  swim() {
    console.log(`${this.name} can swim`);
  }
  fly() {
    console.log(`${this.name} can fly`);
  }
  drink() {
    console.log(`${this.name} can drink`);
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  walk() {
    console.log(`${this.name} can walk`);
  }
}
let animal1 = new Animal("pug");
let dog1 = new Dog("lab");
animal1.swim();
animal1.drink();
dog1.drink();
dog1.walk();
