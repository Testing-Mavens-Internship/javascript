export default class Inventory{
    constructor(){
        this.products=[];
    }
     async addProduct(item){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                this.products.push(item);
                resolve();
            },1000);
        }) 
     }

     listProducts(){
        return this.products.map(prod=>prod.getProductDetails()).join("\n");
     }
     searchProducts(prodName){
        return this.products.filter((data)=>data.name===prodName).map(item=>item.getProductDetails()).join("\n")
     }

     filterProductsByCategory(category){
         return this.products.filter(prod=>prod.category).map(item=>item.getProductDetails()).join("\n")
     }
     applyDiscount(discount){
        this.products.forEach(item => {
            item.setDiscount(discount)
        });
     }
}
