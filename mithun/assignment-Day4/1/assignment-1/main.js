import electronics from "./electronics.js";
import clothing from "./clothing.js";
import inventory from "./inventory.js";
class main
{
    async mains()
    {
        let inv = new inventory();
        let pro1 = new electronics(1,"queo","electronics","tv",10000);
        let pro2 = new electronics(2,"vivo","electronics","phone",19000);
        let pro3 = new electronics(3,"LP","cloth","Shirt",800);
        let pro4 = new electronics(4,"Allen Solly","cloth","Jeans",1200);
        await inv.addproducts(pro1);
        await inv.addproducts(pro2);
        await inv.addproducts(pro3);
        await inv.addproducts(pro4);
        console.log(inv.displaylist());
        console.log(inv.search("tv"));
        console.log(inv.filter("cloth"));
    }
    
}
new main();
