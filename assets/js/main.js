/*=============== LIORA MAIN.JS - FIXED & IMPROVED ===============*/
console.log("%c🌸 Liora JS loaded - buttons should now work!", "color:#c14e8f; font-weight:bold; font-size:16px");

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));
if (navClose) navClose.addEventListener("click", () => navMenu.classList.remove("show-menu"));

/*=============== TOAST NOTIFICATION ===============*/
function showToast(message) {
  const toast = document.createElement("div");
  toast.style.cssText = `position:fixed; bottom:25px; right:25px; background:#c14e8f; color:#fff; padding:14px 22px; border-radius:12px; box-shadow:0 10px 25px rgba(193,78,143,0.3); z-index:9999; font-weight:500; display:flex; align-items:center; gap:8px;`;
  toast.innerHTML = `🌸 ${message}`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "all 0.4s ease";
    toast.style.transform = "translateY(30px)";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}

/*=============== CART & WISHLIST ===============*/
let cart = JSON.parse(localStorage.getItem("lioraCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("lioraWishlist")) || [];

function updateHeaderCounts() {
  const cartCount = document.getElementById("cart-count");
  const wishlistCount = document.getElementById("wishlist-count");
  if (cartCount) cartCount.textContent = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  if (wishlistCount) wishlistCount.textContent = wishlist.length;
}

/*=============== ADD TO CART ===============*/
function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.quantity = (existing.quantity || 1) + 1;
  else cart.push({ ...product, quantity: 1 });

  localStorage.setItem("lioraCart", JSON.stringify(cart));
  updateHeaderCounts();
  showToast(`${product.title} added to cart! 🌹`);
}

/*=============== TOGGLE WISHLIST ===============*/
function toggleWishlist(product) {
  const index = wishlist.findIndex(item => item.id === product.id);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast("Removed from favorites");
  } else {
    wishlist.push(product);
    showToast("Added to favorites ❤️");
  }
  localStorage.setItem("lioraWishlist", JSON.stringify(wishlist));
  updateHeaderCounts();
}

/*=============== UNIVERSAL CLICK LISTENER ===============*/
document.addEventListener("click", function (e) {
  // === ADD TO CART ===
  if (e.target.closest(".cart__btn") || e.target.closest('i.fi-rs-shopping-bag-add')) {
    const card = e.target.closest(".product__item");
    if (card) {
      const product = {
        id: Date.now(),
        title: card.querySelector(".product__title").textContent.trim(),
        price: parseFloat(card.querySelector(".new__price").textContent.replace("$", "")),
        img: card.querySelector("img").src
      };
      console.log("🛒 Cart button clicked →", product.title);
      addToCart(product);
    }
  }

  // === ADD / REMOVE FROM WISHLIST ===
  if (e.target.closest('i.fi-rs-heart') || e.target.closest('[aria-label="Add to Wishlist"]')) {
    const card = e.target.closest(".product__item");
    if (card) {
      const product = {
        id: Date.now(),
        title: card.querySelector(".product__title").textContent.trim(),
        price: parseFloat(card.querySelector(".new__price").textContent.replace("$", "")),
        img: card.querySelector("img").src
      };
      console.log("❤️ Heart clicked →", product.title);
      toggleWishlist(product);
    }
  }

  // Share menu
  if (e.target.closest(".share__btn")) {
    const card = e.target.closest(".product__item");
    const menu = card ? card.querySelector(".share-menu") : null;
    if (menu) {
      document.querySelectorAll(".share-menu").forEach(m => m.classList.remove("active"));
      menu.classList.toggle("active");
    }
  }

  if (e.target.classList.contains("share-link")) {
    const card = e.target.closest(".product__item");
    if (card) {
      const title = card.querySelector(".product__title").innerText;
      const url = window.location.href;

      if (e.target.classList.contains("fb")) {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`);
      }
      if (e.target.classList.contains("wa")) {
        window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`);
      }
      if (e.target.classList.contains("tg")) {
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
      }
    }
  }
});

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector(".details__img");
  const smallImgs = document.querySelectorAll(".details__small-img");
  smallImgs.forEach(img => {
    img.addEventListener("click", () => { if (mainImg) mainImg.src = img.src; });
  });
}
imgGallery();

/*=============== REVIEWS & RATING SYSTEM ===============*/
let currentRating = 0;

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('#star-rating-input span');
    
    stars.forEach(star => {
        star.addEventListener('mouseenter', function() {
            const value = parseInt(this.dataset.value);
            highlightStars(value);
        });

        star.addEventListener('click', function() {
            currentRating = parseInt(this.dataset.value);
            highlightStars(currentRating);
            this.style.transform = 'scale(1.4)';
            setTimeout(() => this.style.transform = 'scale(1.25)', 150);
        });
    });

    const ratingContainer = document.getElementById('star-rating-input');
    if (ratingContainer) {
      ratingContainer.addEventListener('mouseleave', function() {
        highlightStars(currentRating);
      });
    }

    loadSampleReviews();
});

function highlightStars(rating) {
    const stars = document.querySelectorAll('#star-rating-input span');
    stars.forEach(star => {
        const value = parseInt(star.dataset.value);
        if (value <= rating) {
            star.classList.add('active');
            star.style.color = '#ff69b4';
            star.style.textShadow = '0 0 12px rgba(255, 105, 180, 0.4)';
        } else {
            star.classList.remove('active');
            star.style.color = '#e0e0e0';
            star.style.textShadow = 'none';
        }
    });
}

function submitReview() {
    const text = document.getElementById('review-text').value.trim();
    if (!currentRating || !text) {
        alert("💕 Please add stars and write a short review!");
        return;
    }
    alert("🌷 Thank you! Your review has been posted 💖");
    // You can expand this later to save reviews
}

function loadSampleReviews() {
    // Sample reviews already in HTML or you can add here
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/*=============== SWIPERS ===============*/
new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: { 350: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 992: { slidesPerView: 4 }, 1200: { slidesPerView: 5 }, 1400: { slidesPerView: 6 } }
});

new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 4 }, 1400: { slidesPerView: 4 } }
});

/*=============== PRODUCTS TABS ===============*/
document.querySelectorAll("[data-target]").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll("[content]").forEach(c => c.classList.remove("active-tab"));
    const target = document.querySelector(tab.dataset.target);
    if (target) target.classList.add("active-tab");

    document.querySelectorAll("[data-target]").forEach(t => t.classList.remove("active-tab"));
    tab.classList.add("active-tab");
  });
});

/*=============== CHATBOT FUNCTIONALITY (FIXED - Moved outside click listener) ===============*/
document.addEventListener('DOMContentLoaded', function () {
  const chatWindow = document.getElementById('chat-window');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

  if (!chatWindow || !userInput || !sendBtn) return;

  function addBotMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'message bot-message';
    msg.textContent = text;
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function addUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'message user-message';
    msg.textContent = text;
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;
    addUserMessage(text);
    userInput.value = '';

    setTimeout(() => {
      const botReplies = [
        "That's a wonderful occasion! 💐 I recommend our Luxury Rose Bouquet.",
        "Would you like me to suggest something romantic, elegant, or colorful?",
        "I can help you schedule delivery on any date you want.",
        "Perfect! Shall I also add a personalized message card?"
      ];
      const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
      addBotMessage(randomReply);
    }, 700);
  }

  sendBtn.addEventListener('click', sendMessage);
  userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendMessage();
  });

  setTimeout(() => {
    addBotMessage("Hello! 🌸 I'm Liora, your personal flower assistant. How can I help you today?");
  }, 600);
});

/*=============== FINAL INIT ===============*/
console.log("%c✅ All systems loaded successfully!", "color:#10b981; font-weight:bold");