const products = [
  { id: 1, name: "Hoodie Negra", price: 60 },
  { id: 2, name: "Camiseta Oversize", price: 35 },
  { id: 3, name: "Gorra Street", price: 25 }
];

let cart = [];

const productContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart-items");

function renderProducts() {
  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Añadir</button>
    `;
    productContainer.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const div = document.createElement("div");
    div.innerHTML = `<p>${item.name} - $${item.price}</p>`;
    cartContainer.appendChild(div);
  });

  document.getElementById("total").innerText = total;
  document.getElementById("cart-count").innerText = cart.length;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}

function checkout() {
  alert("Aquí conectarías Stripe o PayPal 💳");
}

renderProducts();