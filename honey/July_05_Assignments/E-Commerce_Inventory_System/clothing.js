import Product from "./product.js";

export default class Clothing extends Product{
    constructor(name,size,price,material){
        super(name,"Clothing",price)
        this.size=size;
        this.material=material;
    }
    getProductDetails(){
        return `${super.getProductDetails()} - Size: ${this.size}, Material: ${this.material}`
    }
}