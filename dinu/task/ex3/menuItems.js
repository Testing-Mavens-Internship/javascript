export class MenuItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getDescription() {
        return `${this.name}: $${this.price}`;
    }
}

export class Beverage extends MenuItem {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    getDetails() {
        return `${this.name} (${this.size}): $${this.price}`;
    }
}

export class Entree extends MenuItem {
    constructor(name, price, calories) {
        super(name, price);
        this.calories = calories;
    }

    getDetails() {
        return `${this.name} (${this.calories} calories): $${this.price}`;
    }
}


    