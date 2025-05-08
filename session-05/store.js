let mobile = [
  {
    productId: 1,
    brand: "Samsung",
    model: "Galaxy s26",
    image: "https://m.media-amazon.com/images/I/61p3FwE31-L.AC_UY218.jpg ",
    description: "samsung",
    price: 50,
  },
  {
    productId: 2,
    brand: "IQOO",
    model: "IQOO Z9s",
    image: "https://m.media-amazon.com/images/I/61nO5YRaAxL.AC_UY218.jpg ",
    description: "samsung",
    price: 50,
  },
  {
    productId: 3,
    brand: "Samsung",
    model: "Galaxy s26",
    image: "https://m.media-amazon.com/images/I/61p3FwE31-L.AC_UY218.jpg ",
    description: "samsung",
    price: 50,
  },
  {
    productId: 5,
    brand: "Samsung",
    model: "Galaxy s26",
    image: "https://m.media-amazon.com/images/I/61p3FwE31-L.AC_UY218.jpg ",
    description: "samsung",
    price: 50,
  },
];

const con = document.getElementById("container");
for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `
    <div>
     <img src=${mobile.image}>
     <h1>${mobile.brand}</h1>
     <p>${mobile.description}</p>
     <p>$${mobile.price}</p>
     <button>Add to cart</button>
    </div>`;
}
