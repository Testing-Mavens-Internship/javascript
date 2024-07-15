import Product from "./product.js";

export default class Electronic extends Product{
    constructor(name,price,brand,warranty){
        super(name,"Electronic",price)
        this.brand=brand;
        this.warranty=warranty;
    }
    getProductDetails(){
        return `${super.getProductDetails()} - Brand: ${this.brand}, Warranty: ${this.warranty} years`
    }
}