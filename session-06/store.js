let html = "";
const display = document.querySelector(".container");
fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((product) => {
      html += `<div class="product-box">
        <img class="productImage" src="${product.image}">
        <div class="content">
        <span>${product.title}</span>
        <span>${product.price}</span>
        </div>
        <button class="add-to-cart">+Add to cart</button>
      </div>`;
    });
    display.innerHTML = html;
  });
