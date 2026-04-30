// ===============================
// STORAGE KEYS
// ===============================
const WISHLIST_KEY = "liora_wishlist";
const CART_KEY = "liora_cart";

let isLoggedIn = false;

// Check if user is logged in
function checkLoginStatus() {
    return document.querySelector('.header__top-action a[href="logout.php"]') !== null;
}

// ===============================
// GET DATA
// ===============================
// ===============================
function getWishlist() {
  if (isLoggedIn) {
    // Will be loaded from server
    return [];
  }
  return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
}

function saveWishlist(data) {
  if (!isLoggedIn) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(data));
  }
}

function loadWishlistFromServer() {
    fetch('/api/wishlist.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'list' })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const wishlist = data.items.map(item => ({
                id: item.product_id,
                name: item.name,
                price: item.price,
                image: item.image
            }));
            renderWishlistFromData(wishlist);
        }
    })
    .catch(error => console.error('Error loading wishlist:', error));
}

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(data) {
  localStorage.setItem(CART_KEY, JSON.stringify(data));
}

// ===============================
// RENDER WISHLIST
// ===============================
function renderWishlist() {
  isLoggedIn = checkLoginStatus();
  if (isLoggedIn) {
    loadWishlistFromServer();
  } else {
    const wishlist = getWishlist();
    renderWishlistFromData(wishlist);
  }
}

function renderWishlistFromData(wishlist) {
  const container = document.getElementById("wishlist-items");
  const emptyBox = document.getElementById("wishlist-empty");

  container.innerHTML = "";

  if (wishlist.length === 0) {
    emptyBox.style.display = "block";
    return;
  }

  emptyBox.style.display = "none";

  wishlist.forEach((item, index) => {
    container.innerHTML += `
      <div class="product__item">

        <div class="product__banner">
          <a href="details.html?id=${item.id}" class="product__images">
            <img src="${item.image}" class="product__img default">
            <img src="${item.image}" class="product__img hover">
          </a>

          <!-- REMOVE ICON -->
          <div class="product__actions">
            <button class="action__btn remove-item" data-id="${item.id}" title="Remove">
              <i class="fi fi-rs-trash"></i>
            </button>
          </div>
        </div>

        <div class="product__content">
          <span class="product__category">${item.category || "Flowers"}</span>

          <h3 class="product__title">${item.title}</h3>

          <div class="product__price flex">
            <span class="new__price">${item.price}</span>
          </div>

          <!-- ADD TO CART BUTTON -->
          <button class="action__btn cart__btn add-to-cart" data-index="${index}">
            <i class="fi fi-rs-shopping-bag-add"></i>
          </button>
        </div>

      </div>
    `;
  });
}
// ===============================
// REMOVE ITEM
// ===============================
document.addEventListener("click", function (e) {
  if (e.target.closest(".remove-item")) {
    const productId = e.target.closest(".remove-item").dataset.id;

    if (isLoggedIn) {
      fetch('/api/wishlist.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'remove',
          product_id: productId
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          renderWishlist();
        } else {
          alert(data.message || "Error removing from wishlist");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Error removing from wishlist");
      });
    } else {
      let wishlist = getWishlist();
      wishlist = wishlist.filter(item => item.id !== productId);
      saveWishlist(wishlist);
      renderWishlist();
    }
  }
});

// ===============================
// MOVE TO CART
// ===============================
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    const index = e.target.dataset.index;

    let wishlist = getWishlist();
    let cart = getCart();

    cart.push(wishlist[index]);

    wishlist.splice(index, 1);

    saveCart(cart);
    saveWishlist(wishlist);

    renderWishlist();
  }
});

// ===============================
// INIT
// ===============================
renderWishlist();
function addToWishlist(button) {
  const card = button.closest('.product__item');

  const productId = card.dataset.id;

  if (isLoggedIn) {
    fetch('/api/wishlist.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'add',
        product_id: productId
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Added to wishlist ❤️");
      } else {
        alert(data.message || "Error adding to wishlist");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error adding to wishlist");
    });
  } else {
    const item = {
      id: card.dataset.id,
      title: card.dataset.name,
      price: "$" + card.dataset.price,
      image: card.dataset.image,
      category: card.dataset.category
    };

    let wishlist = JSON.parse(localStorage.getItem("liora_wishlist")) || [];

    // prevent duplicates
    if (!wishlist.find(p => p.id === item.id)) {
      wishlist.push(item);
    }

    localStorage.setItem("liora_wishlist", JSON.stringify(wishlist));

    alert("Added to wishlist ❤️");
  }
}