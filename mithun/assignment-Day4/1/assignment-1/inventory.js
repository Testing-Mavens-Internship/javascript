import electronics from "./electronics.js";
import clothing from "./clothing.js";
export default class inventory
{
    constructor()
    {
        this.products=[];
    }
    async addproducts(pdt) 
    {
     return new Promise((resolve)=>{
        setTimeout(()=>{this.products.push(pdt);}
    ,1000)
     })   
    }
    displaylist()
    {
        // console.log("Hi")
        let lst="";
        for(let i of this.products)
        {
            lst=lst+i;
        }
        return lst;
    }
    search(item)
    {
    let items=[];
        for (let j of this.products)
        {
            if(j.item.includes(item))
            {
                items.push(item);
            }
        }
        return items;
    
}
filter(cat)
    {
    let category=[];
        for (let k of this.products)
        {
            if(k.type===cat)
            {
                category.push(item);
            }
        }
        return category;
    
}
}