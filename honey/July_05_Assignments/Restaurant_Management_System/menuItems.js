export default class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getDescription() {
    return `${this.name}: $${this.price.toFixed(2)}`;
  }
}

export class Beverage extends MenuItem {
  constructor(name, price, size) {
    super(name, price);
    this.size = size;
  }
  getDescription() {
    return `${this.name} (${this.size}): $${this.price.toFixed(2)}`;
  }
}

export class Entree extends MenuItem {
  constructor(name, price, calories) {
    super(name, price);
    this.calories = calories;
  }
  getDescription() {
    return `${this.name} (${this.calories} calories): $${this.price.toFixed(2)}`;
  }
}

