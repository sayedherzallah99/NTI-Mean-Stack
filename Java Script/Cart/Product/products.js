
// Products
const baseProducts = [ 
  { id:1, name:"ساعة سمارت جالاكسي أكتيف 2", price:6799, stock:15, imgs:["../images/Smart.jpg", "../images/Smart2.jpg"], desc:"ساعة ذكية بتصميم أنيق، مقاومة للماء، ومتابعة دقيقة للصحة واللياقة" },
  { id:2, name:"هاتف شاومي ريدمي نوت 13 برو", price:9999, stock:12, imgs:["../images/phone.jpg", "../images/phone2.jpg","../images/phone3.jpg"], desc:"هاتف بشاشة AMOLED وكاميرا 200MP، أداء قوي وسعر مناسب" },
  { id:3, name:"نظارة شمسية بولارويد كلاسيك", price:399, stock:25, imgs:["../images/nadara.jpg","../images/nadara2.jpg"], desc:"نظارة شمسية بعدسات مضادة للانعكاس وتصميم عصري يناسب الجميع" },
  { id:4, name:"كاميرا كانون EOS 250D", price:13499, stock:6, imgs:["../images/camera.jpg", "../images/Camera2.jpg"], desc:"كاميرا احترافية بدقة 24.1MP وتصوير فيديو 4K" },
  { id:5, name:"سماعة بلوتوث JBL GO 3", price:899, stock:30, imgs:["../images/sama.jpg", "../images/jblgo3b.png"], desc:"سماعة صغيرة بصوت قوي، مقاومة للماء" },
  { id:6, name:"لوحة مفاتيح ميكانيكية RGB", price:599, stock:18, imgs:["../images/keyword.jpg", "../images/keyboardrgb2.jpg"], desc:"لوحة مفاتيح بإضاءة متعددة الألوان" },
  { id:7, name:"باور بانك 20000mAh أنكر", price:749, stock:20, imgs:["../images/power bank.jpg","../images/power bank 2.jpg"], desc:"شاحن متنقل سريع وآمن" },
  { id:8, name:"سماعة رأس للألعاب HyperX", price:1299, stock:10, imgs:["../images/sama.jpg", "../images/sama2.jpg"], desc:"صوت محيطي وتجربة لعب غامرة" },
  { id:9, name:"كاميرا ويب Logitech C920", price:999, stock:14, imgs:["../images/camera web.jpg", "../images/camera web 2.jpg"], desc:"كاميرا عالية الجودة بدقة Full HD" },
  { id:10, name:"نظارة شمسية رياضية Oakley", price:899, stock:8, imgs:["../images/nadra sport.jpg", "../images/nadra sport 2.jpg"], desc:"نظارة مقاومة للصدمات وخفيفة الوزن" },
  { id:11, name:"طابعة إبسون EcoTank L3250", price:4999, stock:8, imgs:["../images/epsone2.jpg", "../images/epsone.jpg"], desc:"طابعة متعددة الوظائف بدون خراطيش" },
  { id:12, name:"جهاز بلايستيشن 5 - إصدار الديجيتال", price:18999, stock:5, imgs:["../images/plestition.jpg", "../images/plestition 2.jpg"], desc:"أداء فائق وتجربة لعب غامرة" },
  { id:13, name:"سماعات Apple AirPods Pro (الجيل الثاني)", price:7999, stock:10, imgs:["../images/apple.jpg", "../images/apple 2.jpg"], desc:"عزل ضوضاء نشط وصوت مكاني" },
  { id:14, name:"لابتوب Dell XPS 13 Plus", price:23999, stock:7, imgs:["../images/laptop2.jpg", "../images/laptop.jpg"], desc:"لابتوب فائق النحافة بشاشة OLED" }
];
//  get Admin products 

function getAdminProducts() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

// cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

//  shaw product
const productList = document.getElementById("product-list");
function renderProducts() {
  productList.innerHTML = "";
  let allProducts = [...baseProducts, ...getAdminProducts()];

  allProducts.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.imgs ? p.imgs[0] : p.image}" alt="${p.name}" width="150">
      <h3>${p.name}</h3>
      <p>${p.desc || ""}</p>
      <p>السعر: ${p.price} ج.م</p>
      <input type="number" min="1" value="1" id="qty-${p.id}">
      <button onclick="addToCart(${p.id})">إضافة للسلة</button>
    `;
    productList.appendChild(card);
  });
}

// add  cart
function addToCart(id) {
  let qty = parseInt(document.getElementById(`qty-${id}`).value);
  let all = [...baseProducts, ...getAdminProducts()];
  let p = all.find(x => x.id === id);
  if (!p) return;
  if (qty <= 0) return alert("أدخل كمية صحيحة");

  let exist = cart.find(x => x.id === id);
  if (exist) exist.quantity += qty;
  else cart.push({ ...p, quantity: qty });

  saveCart();
}

//   shaw cart to table 
const cartDiv = document.getElementById("cart");
function renderCart() {
  if (!cart.length) {
    cartDiv.innerHTML = "<p>السلة فارغة</p>";
    return;
  }

  let subtotal = 0;
  let html = `<table border="1" cellspacing="0" cellpadding="8" width="100%">
    <tr>
      <th>الصورة</th>
      <th>الاسم</th>
      <th>السعر</th>
      <th>الكمية</th>
      <th>الإجمالي</th>
      <th>حذف</th>
    </tr>`;

  cart.forEach(it => {
    let img = it.imgs ? it.imgs[0] : it.image;
    let total = it.price * it.quantity;
    subtotal += total;

    html += `
      <tr>
        <td><img src="${img}" width="60"></td>
        <td>${it.name}</td>
        <td>${it.price} ج.م</td>
        <td><input type="number" value="${it.quantity}" min="1" onchange="updateQty(${it.id}, this.value)"></td>
        <td>${total} ج.م</td>
        <td><button onclick="removeFromCart(${it.id})">❌</button></td>
      </tr>`;
  });

  html += `</table>`;

  // حساب الضريبة والشحن
  let tax = subtotal * 0.14;
  let shipping = 50;
  let grandTotal = subtotal + tax + shipping;

  html += `
    <div style="margin-top:15px; text-align:center;">
      <p>الإجمالي قبل الضريبة: ${subtotal.toFixed(2)} ج.م</p>
      <p>الضريبة (14%): ${tax.toFixed(2)} ج.م</p>
      <p>الشحن: ${shipping} ج.م</p>
      <hr>
      <p style="font-weight:bold; color:green;">الإجمالي الكلي: ${grandTotal.toFixed(2)} ج.م</p>
    </div>
  `;

  cartDiv.innerHTML = html;
}

//  update qty
function updateQty(id, val) {
  let it = cart.find(x => x.id === id);
  if (!it) return;
  let q = parseInt(val);
  if (q <= 0) return removeFromCart(id);
  it.quantity = q;
  saveCart();
}

// حذف منتج من السلة
function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
}
// reload
renderProducts();

renderCart();
