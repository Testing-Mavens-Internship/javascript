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
  products.filter(cat)

  function cat(product){
    const cat2=products.filter((product) => product.category === "Clothes") 
    const avg=cat2.reduce((total,curr)=>total+curr.price,0)/cat2.length
    console.log(avg)    
   console.log(cat2)
  }

  
  // const cat = products.filter((product) => product.category === "Electronics")
  //   console.log(cat)
  // const avg=cat.reduce((total,curr)=>total+curr.price,0)/cat.length
  // console.log(avg)