// ============================================================
// OTHER AVAILABLE GIFTS DATA — ONLY these 7 gifts
// ============================================================
const flowerData = {

  "gift-bear": {
    title: "Cute Bear Gift Set",
    category: "Gifts",
    badge: "Cute",
    price: "$45",
    oldPrice: "$55",
    discount: "18% Off",
    image: "assets/img/items/other/c6.jpg",
    images: ["assets/img/items/other/c6.jpg", "assets/img/items/other/c6.jpg"],
    description: "Adorable cute bear gift set perfect for surprising someone special. A charming and heartwarming present for any occasion.",
    details: {
      "Gift Type": "Plush Toy Set",
      "Color": "Mixed",
      "Size": "Medium",
      "Occasion": "Birthday, Anniversary, Any occasion",
      "Packaging": "Gift Box",
      "Material": "Soft Plush",
    }
  },

  "gift-succulent": {
    title: "Mini Succulent Tray",
    category: "Home",
    badge: "New",
    price: "$48",
    oldPrice: "$60",
    discount: "20% Off",
    image: "assets/img/items/other/c10.jpg",
    images: ["assets/img/items/other/c10.jpg", "assets/img/items/other/c10.jpg"],
    description: "Beautiful mini succulent tray bringing nature indoors. Low-maintenance and stylish home decor for plant lovers.",
    details: {
      "Gift Type": "Plant Decor",
      "Color": "Green",
      "Size": "Small Tray",
      "Occasion": "Housewarming, Office, Home decor",
      "Packaging": "Ceramic Tray",
      "Care": "Low maintenance",
    }
  },

  "gift-garden": {
    title: "Mini Garden Gift",
    category: "Gifts",
    badge: "Popular",
    price: "$72",
    oldPrice: "$89",
    discount: "19% Off",
    image: "assets/img/items/other/Mini Garden Gift.jpg",
    images: ["assets/img/items/other/Mini Garden Gift.jpg", "assets/img/items/other/Mini Garden Gift.jpg"],
    description: "Enchanting mini garden gift creating a tiny green oasis. A unique and thoughtful present for nature enthusiasts.",
    details: {
      "Gift Type": "Garden Kit",
      "Color": "Green & Natural",
      "Size": "Compact",
      "Occasion": "Housewarming, Birthday, Relaxation",
      "Packaging": "Decorative Pot",
      "Includes": "Plants & Accessories",
    }
  },

  "gift-romantic-box": {
    title: "Romantic Gift Box",
    category: "Gift Box",
    badge: "New",
    price: "$59",
    oldPrice: "$75",
    discount: "21% Off",
    image: "assets/img/items/other/s2.jpg",
    images: ["assets/img/items/other/s2.jpg", "assets/img/items/other/s2.jpg"],
    description: "Elegant romantic gift box filled with carefully selected treasures. Perfect for expressing love and appreciation.",
    details: {
      "Gift Type": "Curated Box",
      "Color": "Elegant Mix",
      "Size": "Medium Box",
      "Occasion": "Anniversary, Valentine, Date night",
      "Packaging": "Premium Gift Box",
      "Theme": "Romantic",
    }
  },

  "gift-tea-basket": {
    title: "Tea Time Basket",
    category: "Gifts",
    badge: "Popular",
    price: "$63",
    oldPrice: "$78",
    discount: "19% Off",
    image: "assets/img/items/other/s3.jpg",
    images: ["assets/img/items/other/s3.jpg", "assets/img/items/other/s3.jpg"],
    description: "Delightful tea time basket for cozy moments. A warm and comforting gift for tea lovers and relaxation seekers.",
    details: {
      "Gift Type": "Tea Basket",
      "Color": "Warm Tones",
      "Size": "Medium Basket",
      "Occasion": "Relaxation, Get well, Birthday",
      "Packaging": "Woven Basket",
      "Includes": "Teas & Accessories",
    }
  },

  "gift-jewelry": {
    title: "Jewelry Gift Box",
    category: "Jewelry",
    badge: "Luxury",
    price: "$79",
    oldPrice: "$95",
    discount: "17% Off",
    image: "assets/img/items/other/s4.jpg",
    images: ["assets/img/items/other/s4.jpg", "assets/img/items/other/s4.jpg"],
    description: "Luxurious jewelry gift box with elegant pieces. A sophisticated and timeless present for someone truly special.",
    details: {
      "Gift Type": "Jewelry Set",
      "Color": "Silver & Gold",
      "Size": "Compact Box",
      "Occasion": "Anniversary, Birthday, Special events",
      "Packaging": "Velvet Box",
      "Style": "Elegant & Timeless",
    }
  },

  "gift-mug": {
    title: "Mug Gift Set",
    category: "Gifts",
    badge: "New",
    price: "$42",
    oldPrice: "$55",
    discount: "24% Off",
    image: "assets/img/items/other/s7.jpg",
    images: ["assets/img/items/other/s7.jpg", "assets/img/items/other/s7.jpg"],
    description: "Charming mug gift set for daily warmth and comfort. A practical yet thoughtful gift for coffee and tea enthusiasts.",
    details: {
      "Gift Type": "Mug Set",
      "Color": "Assorted",
      "Size": "Standard Mug",
      "Occasion": "Everyday, Office, Birthday",
      "Packaging": "Gift Box",
      "Material": "Ceramic",
    }
  }
};

// ============================================================
// ALL PRODUCTS — ONLY these 7 gifts
// ============================================================
const allProducts = [
  { id: "gift-bear",         title: "Cute Bear Gift Set",          price: "$45",  oldPrice: "$55",  image: "assets/img/items/other/c6.jpg",                      image2: "assets/img/items/other/c6.jpg",                      badge: "Cute",     category: "Gifts" },
  { id: "gift-succulent",    title: "Mini Succulent Tray",         price: "$48",  oldPrice: "$60",  image: "assets/img/items/other/c10.jpg",                     image2: "assets/img/items/other/c10.jpg",                     badge: "New",      category: "Home" },
  { id: "gift-garden",       title: "Mini Garden Gift",            price: "$72",  oldPrice: "$89",  image: "assets/img/items/other/Mini Garden Gift.jpg",        image2: "assets/img/items/other/Mini Garden Gift.jpg",        badge: "Popular",  category: "Gifts" },
  { id: "gift-romantic-box", title: "Romantic Gift Box",           price: "$59",  oldPrice: "$75",  image: "assets/img/items/other/s2.jpg",                      image2: "assets/img/items/other/s2.jpg",                      badge: "New",      category: "Gift Box" },
  { id: "gift-tea-basket",   title: "Tea Time Basket",             price: "$63",  oldPrice: "$78",  image: "assets/img/items/other/s3.jpg",                      image2: "assets/img/items/other/s3.jpg",                      badge: "Popular",  category: "Gifts" },
  { id: "gift-jewelry",      title: "Jewelry Gift Box",            price: "$79",  oldPrice: "$95",  image: "assets/img/items/other/s4.jpg",                      image2: "assets/img/items/other/s4.jpg",                      badge: "Luxury",   category: "Jewelry" },
  { id: "gift-mug",          title: "Mug Gift Set",                price: "$42",  oldPrice: "$55",  image: "assets/img/items/other/s7.jpg",                      image2: "assets/img/items/other/s7.jpg",                      badge: "New",      category: "Gifts" }
];

// ============================================================
// INIT — read ?id= from URL and render page
// ============================================================
const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") || "gift-bear";
const flower = flowerData[currentId] || flowerData["gift-bear"];

// Update breadcrumb, title, main info, etc.
document.getElementById("breadcrumb-name").textContent = flower.title;
document.title = flower.title + " — Liora";

document.getElementById("detail-title").textContent       = flower.title;
document.getElementById("detail-price").textContent       = flower.price;
document.getElementById("detail-old-price").textContent   = flower.oldPrice;
document.getElementById("detail-discount").textContent    = flower.discount;
document.getElementById("detail-description").textContent = flower.description;
document.getElementById("detail-badge").textContent       = flower.badge;

// Main image
const mainImg = document.getElementById("detail-img-main");
mainImg.src = flower.images[0];
mainImg.alt = flower.title;

// Thumbnails
const thumbContainer = document.getElementById("detail-thumbnails");
thumbContainer.innerHTML = ""; // keep empty (no thumbnails)

// Info table
const infoTable = document.getElementById("detail-info-table");
let tableHTML = '<table class="flower-info-table"><tbody>';
for (const [key, val] of Object.entries(flower.details)) {
  tableHTML += `<tr><td class="info-key">${key}</td><td class="info-val">${val}</td></tr>`;
}
tableHTML += '</tbody></table>';
infoTable.innerHTML = tableHTML;

// ====================== REVIEWS SYSTEM ======================
let currentProductId = new URLSearchParams(window.location.search).get("id") || "default";
const currentUser = JSON.parse(localStorage.getItem('lioraUser')) || {};

function loadReviews() {
    const reviewsList = document.getElementById('reviews-list');
    if (!reviewsList) return;

    let allReviews = JSON.parse(localStorage.getItem('liora_reviews') || '{}');
    const productReviews = allReviews[currentProductId] || [];

    reviewsList.innerHTML = productReviews.length === 0 
        ? `<p class="no-reviews">🌸 Be the first to review this bouquet!</p>` 
        : productReviews.map(review => `
            <div class="review-item">
                <div class="review-header">
                    <div class="review-author-row">
                        <span class="review-author">${review.username || 'Guest'}</span>
                        <div class="review-stars">${'★'.repeat(review.rating)}</div>
                    </div>
                    <span class="review-date">${review.date}</span>
                </div>
                <p class="review-text">${review.text}</p>
            </div>
        `).join('');
}

function submitReview() {
    const activeStar = document.querySelector('.star-rating-input .active');
    const reviewText = document.getElementById('review-text').value.trim();

    if (!activeStar) return alert("Please select a star rating 🌟");
    if (!reviewText) return alert("Please write a review 💌");

    const reviewerName = currentUser.username || 'Guest';
    const newReview = {
        username: reviewerName,
        rating: parseInt(activeStar.dataset.value),
        text: reviewText,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    };

    let allReviews = JSON.parse(localStorage.getItem('liora_reviews') || '{}');
    if (!allReviews[currentProductId]) allReviews[currentProductId] = [];
    
    allReviews[currentProductId].unshift(newReview);
    localStorage.setItem('liora_reviews', JSON.stringify(allReviews));
    document.getElementById('review-text').value = '';
    document.querySelectorAll('.star-rating-input span').forEach(s => s.classList.remove('active'));

    loadReviews();
    alert("Thank you for your review! 🌷");
}

function initStars() {
    const stars = document.querySelectorAll('.star-rating-input span');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            stars.forEach(s => s.classList.remove('active'));
            star.classList.add('active');
        });
    });
}
// Auto initialize reviews
document.addEventListener('DOMContentLoaded', () => {
    initStars();
    loadReviews();
});

// Related products
const relatedContainer = document.getElementById("related-products");
relatedContainer.innerHTML = "";
const related = allProducts.filter(p => p.id !== currentId).slice(0, 4);

related.forEach(p => {
  const badgeClasses = ["light-pink", "light-green", "light-orange", "light-blue"];
  const randomBadge  = badgeClasses[Math.floor(Math.random() * badgeClasses.length)];
  relatedContainer.innerHTML += `
    <div class="product__item">
      <div class="product__banner">
        <a href="details.html?id=${p.id}" class="product__images">
          <img src="${p.image}"  alt="${p.title}" class="product__img default" />
          <img src="${p.image2}" alt="${p.title}" class="product__img hover" />
        </a>
        <div class="product__actions">
          <a href="details.html?id=${p.id}" class="action__btn" aria-label="Quick View"><i class="fi fi-rs-eye"></i></a>
          <a href="#" class="action__btn" aria-label="Add to Wishlist"><i class="fi fi-rs-heart"></i></a>
          <a href="#" class="action__btn" aria-label="Compare"><i class="fi fi-rs-shuffle"></i></a>
        </div>
        <div class="product__badge ${randomBadge}">${p.badge}</div>
      </div>
      <div class="product__content">
        <span class="product__category">${p.category}</span>
        <a href="details.html?id=${p.id}"><h3 class="product__title">${p.title}</h3></a>
        <div class="product__rating"><i class="fi fi-rs-star"></i><i class="fi fi-rs-star"></i><i class="fi fi-rs-star"></i><i class="fi fi-rs-star"></i><i class="fi fi-rs-star"></i></div>
        <div class="product__price flex"><span class="new__price">${p.price}</span><span class="old__price">${p.oldPrice}</span></div>
        <a href="#" class="action__btn cart__btn" aria-label="Add To Cart"><i class="fi fi-rs-shopping-bag-add"></i></a>
      </div>
    </div>
  `;
});