// menuItems.js
class MenuItem {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    getInfo() {
      return `${this.name}: $${this.price.toFixed(2)}`;
    }
  }
  
  class Beverage extends MenuItem {
    constructor(name, price, size) {
      super(name, price);
      this.size = size;
    }
  
    getInfo() {
      return `${this.name} (${this.size}): $${this.price.toFixed(2)}`;
    }
  }
  
  class Entree extends MenuItem {
    constructor(name, price, calories) {
      super(name, price);
      this.calories = calories;
    }
  
    getInfo() {
      return `${this.name} (${this.calories} calories): $${this.price.toFixed(2)}`;
    }
  }
  
  export { MenuItem, Beverage, Entree };
  