
let products = JSON.parse(localStorage.getItem("products")) || [];
let editId = null; 

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
  window.dispatchEvent(new Event("storage")); 
}

function clearForm() {
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productCategory").value = "";
  document.getElementById("productDescription").value = "";
  document.getElementById("productFile").value = "";
  editId = null;
}

function addOrUpdateProduct() {
  let name = document.getElementById("productName").value;
  let price = document.getElementById("productPrice").value;
  let category = document.getElementById("productCategory").value;
  let desc = document.getElementById("productDescription").value;
  let file = document.getElementById("productFile").files[0];

  if (!name || !price || !category) {
    alert("من فضلك أدخل البيانات الأساسية");
    return;
  }

  let image = file ? URL.createObjectURL(file) : "https://via.placeholder.com/150";

  if (editId) {
    // edit product 
    let index = products.findIndex(p => p.id === editId);
    if (index !== -1) {
      products[index] = { ...products[index], name, price, category, desc, image };
    }
  } else {
    // add produt 
    let product = {
      id: Date.now(),
      name,
      price,
      category,
      desc,
      image
    };
    products.push(product);
  }

  saveProducts();
  renderProducts();
  clearForm();
}
//  delete product

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  saveProducts();
  renderProducts();
}
//  edit product

function editProduct(id) {
  let product = products.find(p => p.id === id);
  if (product) {
    document.getElementById("productName").value = product.name;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productDescription").value = product.desc;
    editId = product.id;
  }
}


function renderProducts() {
  let container = document.getElementById("adminProductsContainer");
  container.innerHTML = "";

  products.forEach(p => {
    let div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div>
        <h3>${p.name}</h3>
        <p>${p.price} ج.م</p>
        <small>${p.category}</small>
      </div>
      <div class="actions">
        <button onclick="editProduct(${p.id})">✏️ تعديل</button>
        <button onclick="deleteProduct(${p.id})">🗑️ مسح</button>
      </div>
    `;
    container.appendChild(div);
  });
}

document.getElementById("submitBtn").addEventListener("click", addOrUpdateProduct);

// relode
renderProducts();
