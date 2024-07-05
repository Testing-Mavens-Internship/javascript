class Product
{
    constructor(pdtname,price,qty)
    {
        this.name=pdtname;
        this.price=price;
        this.qty=qty;
    }
    get name()
    {
        return this.name
    }
    set name(pdtname)
    {
        this.name=pdtname
    }
    get price()
    {
        return this.price
    }
    set price(price)
    {
        this.price=price
    }
    get qty()
    {
        return this.qty
    }
    set qty(qty)
    {
        if(this.qty>=0)
        {
            this.qty=qty
        }
        else
        {
            console.log("Quantity Insufficient")
        }
    }
}
class Inventory extends Product
{
    constructor()
    {
        super(pdtname,price,qty)
        this.pdtArray=[];
    }

    addProducts()
    {

    }

    removeProducts()
    {

    }

    updateProducts()
    {

    }

    searchProducts()
    {

    }
}