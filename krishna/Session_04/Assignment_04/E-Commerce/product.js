export default class Product{
    constructor(name,category,price){
        this.name=name;
        this.category=category;
        this.price=price;
    }
    getProductDetails(){
        return `${this.name} [${this.category}] - $${this.price}`
    }
    setDiscount(discount){
        this.price-=(this.price*discount/100)
    }
}