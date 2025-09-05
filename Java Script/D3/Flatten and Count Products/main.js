var categories = [
  {category: "Fruits", products: ["Apple", "Banana", "Apple"]},
  {category: "Vegetables", products: ["Carrot", "Apple"]},
  {category: "Dairy", products: ["Milk", "Cheese"]}
];
var allProducts = [];
categories.forEach(cat => {
  allProducts = allProducts.concat(cat.products);
});
var productCount = {};
allProducts.forEach(product => {
  if(productCount[product]) {
    productCount[product] += 1;
  } else {
    productCount[product] = 1;
  }
});
console.log(productCount);
