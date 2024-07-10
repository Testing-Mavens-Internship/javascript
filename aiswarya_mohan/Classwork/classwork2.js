const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];

let category1 = products.filter((item) => item.category=="Electronics");
let price1 = category1.map(p=>p.price)
console.log(price1)
let sum = price1.reduce((total,price))
// let category2 = products.filter((item) => item.category=="Clothes")


