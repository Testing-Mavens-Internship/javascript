import Book from "../../JS_training/04_7_24/classBasics2"   

class Product
{
    constructor(name,price,quantity)
    {
        this.name=name
        this.price=price
        this.quantity=quantity
    }


    
}

class Invertory
{
    constructor(products=[])
    {
        this.products=[]
    }

    addProduct(product){
        this.products.push(product)
    }

    removeProduct(product){
        const index=this.products.indexOf(product)
        this.products.splice(index,1)
    }   

    updateProduct(product)
    {
        const index=this.products.indexOf(product)
        this.products.splice(index,1,product)  
    }
    seaerchProduct(product)
    {
        const index=this.products.indexOf(product)
        return this.products[index]
    }   
}

