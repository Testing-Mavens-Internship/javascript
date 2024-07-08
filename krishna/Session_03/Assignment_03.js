//Create a class Product with properties like name, price, and quantity (encapsulated using private or protected access modifiers in ES6 or
// getter/setter methods).
//Provide methods for getting and setting product details (with validation for quantity to be non-negative).
//Create a class Inventory that manages a collection of Product objects.
//Implement methods in Inventory to add, remove, update, and search for products.
//Consider using a data structure like an array or object to store products in the inventory.
//Optionally, demonstrate error handling when adding or removing products that might exceed or fall below stock levels.


class Products{

    constructor(name,price,quantity){
        this._name= name;
        this._price= price;
        this._quantity=quantity;
    }
    setName(productname){
        this._name=productname;
    }
    getname(){
return this._name;
    }

    setprice(newprice){
        this._price=newprice;
   }

getprice(){
    return this._price;
}

setquantity(newquantity){
    if(this.quantity>=0){
     this._quantity=newquantity;
    }
    else{
        console.log("error:negetive quantity")
    }
    }

getquantity(){
    return this._quantity;
    
}
}
let obj=new Products("pen");
console.log(obj.setName())
console.log(obj.getname());
