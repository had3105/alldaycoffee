const btn = document.querySelectorAll(".button");
const login = document.querySelector(".login");
const register = document.querySelector(".registration");
const loginSuccess = document.querySelector(".login-success");
const checkBtn = document.querySelector("#check");
btn.forEach((btn) => {
  btn.addEventListener("click", () => {});
});
let action = "login";
const handleCheck = () => {
  if (action === "login") {
    action = "register";
    login.style.display = "none";
    register.style.display = "block";
  } else {
    action = "login";
    login.style.display = "block";
    register.style.display = "none";
  }
};
const successHandler = () => {
  loginSuccess.style.display = "block";
  login.style.display = "none";
  register.style.display = "none";
  if (action === "login") {
    loginSuccess.innerHTML += `<h1>Thành công</h1>
    <p>Chúng tôi đã nhận được yêu cầu của bạn;<br /> chúng tôi sẽ xử lí ngay</p>`;
  }
  if (action === "register") {
    loginSuccess.innerHTML += `<h1>Thành công</h1>
    <p>Chúng tôi đã nhận được yêu cầu của bạn;<br /> chúng tôi sẽ xử lí ngay</p>
    `;
  }
};
const newProducts = document.querySelector(".new-products");
const hotProducts = document.querySelector(".hot-products");
const foodProducts = document.querySelector(".food-products");
const drinkProducts = document.querySelector(".drink-products");
const beansProducts = document.querySelector(".beans-products");
const merchandiseProducts = document.querySelector(".merchandise-products");
const products = [
  {
    id: 1,
    name: "MATCHA LATTE",
    price: "75.000đ",
    type: "drink",
  },
  {
    id: 2,
    name: "ESPRESSO MATCHA",
    price: "85.000₫",
    type: "drink",
  },
  {
    id: 3,
    name: "Kombucha Thanh Long Vải",
    price: "79.000₫",
    type: "drink",
  },
  {
    id: 4,
    name: "Earl Grey Chocolate",
    price: "69.000₫",
    type: "drink",
  },
  {
    id: 5,
    name: "Cà phê trứng",
    price: "69.000₫",
    type: "drink",
  },
  {
    id: 6,
    name: "Cà phê pha phin Việt Nam",
    price: "59.000₫",
    type: "drink",
  },
  {
    id: 7,
    name: "Chicken Ceasar Salad",
    price: "159.000₫",
    type: "food",
  },
  {
    id: 8,
    name: "All Day Coffee Christmas Cup",
    price: "180.000₫",
    type: "merchandise",
  },
  {
    id: 9,
    name: "Hot Chocolate",
    price: "75.000₫",
    type: "drink",
  },
  {
    id: 10,
    name: "Trà đen kem mặn",
    price: "75.000đ",
    type: "drink",
  },
  {
    id: 11,
    name: "Trà xanh xoài hương thảo",
    price: "75.000đ",
    type: "drink",
  },
  {
    id: 12,
    name: "Nachos Thịt Bò",
    price: "149.000đ",
    type: "food",
  },
  {
    id: 13,
    name: "Cold Brew",
    price: "85.000đ",
    type: "drink",
  },
  {
    id: 14,
    name: "Mangomisu",
    price: "85.000đ",
    type: "food",
  },
  {
    id: 15,
    name: "Trà thanh long chanh vàng",
    price: "75.000đ ",
    type: "drink",
  },
  {
    id: 16,
    name: "Cold Brew Sấu ",
    price: "85.000₫",
    type: "drink",
  },
  {
    id: 17,
    name: "All Day Tote Bag | Red",
    price: "280.000₫",
    type: "merchandise",
  },
  {
    id: 18,
    name: "All Day \"May I Be Your AllDay?\" Cup ",
    price: "180.000₫",
    type: "merchandise",
  },
  {
    id: 19,
    name: "All Day \"Wishlist\" Cup",
    price: "180.000₫",
    type: "merchandise",
  },
  {
    id: 20,
    name: "All Day Tote Bag | White",
    price: "280.000₫",
    type: "merchandise",
  },
  {
    id: 21,
    name: "Chanh tươi hạt chia",
    price: "59.000₫",
    type: "drink",
  },
  {
    id: 22,
    name: "Cà phê kem béo",
    price: "79.000₫",
    type: "drink",
  },
  {
    id: 23,
    name: "Cà phê Trứng Muối",
    price: "69.000₫",
    type: "drink",
  },
  {
    id: 24,
    name: "Chanh Ổi Bạc Hà",
    price: "59.000₫",
    type: "drink",
  },
  {
    id: 25,
    name: "Dứa Dưa Hấu Cam",
    price: "59.000₫",
    type: "drink",
  },
];

// Banner
let currentImageIndex = 0;
const images = document.querySelectorAll(".banner-image");

function showImage(index) {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[index].style.display = "block";
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

setInterval(nextImage, 3000);

// New Products
products.forEach((product, index) => {
  if (index <= 3) {
    newProducts
      ? (newProducts.innerHTML += `
        <li class="new-product">
            <a href="products/NewProducts/product${product.id}.html">
                <div class="product-img">
                    <img src="img/product/${index + 1}.jpg" alt="" />
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            </a>
        </li>
    `)
      : "";
  }
});

// Hot Products
products.forEach((product, index) => {
  if (product.id >= 5 && product.id <= 13 || product.id === 3) {
    hotProducts
      ? (hotProducts.innerHTML += `
      <li class="product">
        <a href="products/HotProducts/product${product.id}.html">
          <div class="product-img">
              <img src="img/product/${index + 1}.jpg" alt="" />
          </div>
          <div class="product-info">
              <h3>${product.name}</h3>
              <p>${product.price}</p>
          </div>
        </a>
      </li>
      `)
      : "";
  }
});

// Drink Products
products.forEach((product, index) => {
  if (index <= 50 && product.type === "drink") {
    console.log(product);
    drinkProducts
      ? (drinkProducts.innerHTML += `
      <li class="product">
      <a href="products/drink/product${product.id}.html">
        <div class="product-img">
            <img src="img/product/${index + 1}.jpg" alt="" />
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        </div>
      </a>
    </li>
    `)
      : "";
  }
});


// Food Products
products.forEach((product, index) => {
  if (index <= 50 && product.type === "food") {
    console.log(product);
    foodProducts
      ? (foodProducts.innerHTML += `
      <li class="product">
      <a href="products/food/product${product.id}.html">
        <div class="product-img">
            <img src="img/product/${index + 1}.jpg" alt="" />
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        </div>
      </a>
    </li>
    `)
      : "";
  }
});
// Beans Products
products.forEach((product, index) => {
  if (index <= 50 && product.type === "beans") {
    console.log(product);
    beansProducts
      ? (beansProducts.innerHTML += `
      <li class="product">
      <a href="products/beans/product${product.id}.html">
        <div class="product-img">
            <img src="img/product/${index + 1}.jpg" alt="" />
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        </div>
      </a>
    </li>
    `)
      : "";
  }
});
// Merchandise Products
products.forEach((product, index) => {
  if (index <= 50 && product.type === "merchandise") {
    console.log(product);
    merchandiseProducts
      ? (merchandiseProducts.innerHTML += `
      <li class="product">
      <a href="products/merchandise/product${product.id}.html">
        <div class="product-img">
            <img src="img/product/${index + 1}.jpg" alt="" />
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        </div>
      </a>
    </li>
    `)
      : "";
  }
});
// Image
const thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", function () {
    const imageSrc = this.src;
    const mainImage = document.querySelector(".main-image");
    mainImage.src = imageSrc;
  });
});
const mainImage = document.querySelector(".main-image");
const fullscreenImageContainer = document.querySelector(
  ".fullscreen-image-container"
);
const fullscreenImage = document.querySelector(".fullscreen-image");
const closeBtn = document.querySelector(".close-btn");
mainImage.addEventListener("click", function () {
  fullscreenImage.src = this.src;
  fullscreenImageContainer.style.display = "flex";
});
closeBtn.addEventListener("click", function () {
  fullscreenImageContainer.style.display = "none";
});

// Pop-up
document.querySelector(".add-to-cart").addEventListener("click", function () {
  document.getElementById("popupContainer").style.display = "block";
  document.querySelector(".popup-content").textContent =
    "Sản phẩm đã được thêm vào giỏ hàng.";
});
document.querySelector(".checkout").addEventListener("click", function () {
  document.getElementById("popupContainer").style.display = "block";
  document.querySelector(".popup-content").textContent =
    "Chuyển đến trang thanh toán.";
});
function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
}

