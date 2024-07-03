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
const electronics = products.filter(item => item.category === "Electronics");
const prices = electronics.map(item => item.price).reduce((accumulator, price) => (accumulator + price)/electronics.length);


console.log(prices);















// const electronics = products.filter(item => item.category === "Electronics");
// const prices = electronics.map(item => item.price);
// const total = prices.reduce((accumulator, price) => accumulator + price, 0);
// const average = total / electronics.length;

// console.log(average);
