// ============================================================
// DAFFODILS DATA — ONLY these 5 flowers
// ============================================================
const flowerData = {

  "daffodil-baby": {
    title: "Baby Spring Daffodils", kurdishTitle: "گولی دەفۆدیل منداڵی بەهار",
    category: "Daffodils",
    badge: "Hot",
    price: "$29",
    oldPrice: "$36",
    discount: "19% Off",
    image: "assets/img/items/daffodils/babydaffoldis.jpg",
    images: ["assets/img/items/daffodils/babydaffoldis.jpg", "assets/img/items/daffodils/babydaffoldis.jpg"],
    description: "Delicate baby spring daffodils in soft yellow and white tones. Perfect for fresh spring vibes and gentle celebrations.",
    details: {
      "Flower Type": "Daffodils",
      "Color": "White & Soft Yellow",
      "Stems": "15 stems",
      "Freshness": "6–8 days",
      "Occasion": "Spring, Easter, New beginnings",
      "Fragrance": "Light & sweet",
    }
  },

  "daffodil-classic": {
    title: "Classic Yellow Daffodils", kurdishTitle: "گۆلی دەفۆدیل زەردی کلاسیک",
    category: "Daffodils",
    badge: "New",
    price: "$27",
    oldPrice: "$34",
    discount: "21% Off",
    image: "assets/img/items/daffodils/daffoldilsss.jpg",
    images: ["assets/img/items/daffodils/daffoldilsss.jpg", "assets/img/items/daffodils/daffoldilsss.jpg"],
    description: "Bright classic yellow daffodils that bring pure joy and energy. A timeless favorite for any occasion.",
    details: {
      "Flower Type": "Daffodils",
      "Color": "Bright Yellow",
      "Stems": "20 stems",
      "Freshness": "5–7 days",
      "Occasion": "Birthday, Cheer-up, Everyday",
      "Fragrance": "Fresh & mild",
    }
  },

  "daffodil-golden": {
    title: "Golden Spring Elegance", kurdishTitle: "گۆلی دەفۆدیل زێڕینی بەهار",
    category: "Daffodils",
    badge: "Hot",
    price: "$35",
    oldPrice: "$44",
    discount: "20% Off",
    image: "assets/img/items/daffodils/gorgousdaffoldils.jpg",
    images: ["assets/img/items/daffodils/gorgousdaffoldils.jpg", "assets/img/items/daffodils/gorgousdaffoldils.jpg"],
    description: "Luxurious golden spring daffodils arranged with elegance. Premium quality for special moments.",
    details: {
      "Flower Type": "Daffodils",
      "Color": "Golden Yellow",
      "Stems": "18 stems",
      "Freshness": "7–9 days",
      "Occasion": "Anniversary, Elegant gifts",
      "Fragrance": "Delicate",
    }
  },

  "daffodil-lavender": {
    title: "Lavender Sunshine Mix", kurdishTitle: "گولی دەفۆدیل لاڤەندەر خۆر",
    category: "Daffodils",
    badge: "New",
    price: "$38",
    oldPrice: "$48",
    discount: "21% Off",
    image: "assets/img/items/daffodils/lavenderdaffoldils.jpg",
    images: ["assets/img/items/daffodils/lavenderdaffoldils.jpg", "assets/img/items/daffodils/lavenderdaffoldils.jpg"],
    description: "Beautiful mix of lavender and sunshine yellow daffodils. A unique and eye-catching combination.",
    details: {
      "Flower Type": "Daffodils",
      "Color": "Lavender & Yellow",
      "Stems": "22 stems",
      "Freshness": "6–8 days",
      "Occasion": "Any occasion, Modern gifts",
      "Fragrance": "Fresh floral",
    }
  },

  "daffodil-lightyellow": {
    title: "Light Yellow Dream", kurdishTitle: "گولی دەفۆدیل زەردی سووک",
    category: "Daffodils",
    badge: "-15%",
    price: "$31",
    oldPrice: "$39",
    discount: "21% Off",
    image: "assets/img/items/daffodils/lightyellowdaffoldils.jpg",
    images: ["assets/img/items/daffodils/lightyellowdaffoldils.jpg", "assets/img/items/daffodils/lightyellowdaffoldils.jpg"],
    description: "Soft light yellow daffodils that create a dreamy and calming atmosphere.",
    details: {
      "Flower Type": "Daffodils",
      "Color": "Light Yellow",
      "Stems": "19 stems",
      "Freshness": "6–8 days",
      "Occasion": "Relaxation, Spring gifts",
      "Fragrance": "Gentle",
    }
  }
};

// ============================================================
// ALL PRODUCTS — ONLY these 5 daffodils
// ============================================================
const allProducts = [
  { id: "daffodil-baby",       title: "Baby Spring Daffodils", kurdishTitle: "گولی دەفۆدیل منداڵی بەهار",       price: "$29",  oldPrice: "$36",  image: "assets/img/items/daffodils/babydaffoldis.jpg",       image2: "assets/img/items/daffodils/babydaffoldis.jpg",       badge: "Hot",     category: "Daffodils" },
  { id: "daffodil-classic",    title: "Classic Yellow Daffodils", kurdishTitle: "گۆلی دەفۆدیل زەردی کلاسیک",    price: "$27",  oldPrice: "$34",  image: "assets/img/items/daffodils/daffoldilsss.jpg",        image2: "assets/img/items/daffodils/daffoldilsss.jpg",        badge: "New",     category: "Daffodils" },
  { id: "daffodil-golden",     title: "Golden Spring Elegance", kurdishTitle: "گۆلی دەفۆدیل زێڕینی بەهار",    price: "$35",  oldPrice: "$44",  image: "assets/img/items/daffodils/gorgousdaffoldils.jpg",   image2: "assets/img/items/daffodils/gorgousdaffoldils.jpg",   badge: "Hot",     category: "Daffodils" },
  { id: "daffodil-lavender",   title: "Lavender Sunshine Mix", kurdishTitle: "گولی دەفۆدیل لاڤەندەر خۆر",       price: "$38",  oldPrice: "$48",  image: "assets/img/items/daffodils/lavenderdaffoldils.jpg",  image2: "assets/img/items/daffodils/lavenderdaffoldils.jpg",  badge: "New",     category: "Daffodils" },
  { id: "daffodil-lightyellow",title: "Light Yellow Dream", kurdishTitle: "گولی دەفۆدیل زەردی سووک",          price: "$31",  oldPrice: "$39",  image: "assets/img/items/daffodils/lightyellowdaffoldils.jpg", image2: "assets/img/items/daffodils/lightyellowdaffoldils.jpg", badge: "-15%",    category: "Daffodils" }
];

// ============================================================
// INIT — read ?id= from URL and render page
// ============================================================
const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") || "daffodil-baby";
const flower = flowerData[currentId] || flowerData["daffodil-baby"];

// Update breadcrumb, title, main info, etc.
document.getElementById("breadcrumb-name").textContent = flower.title;
document.title = flower.title + " — Liora";

document.getElementById("detail-title").textContent       = flower.title;
const detailKurdish = document.getElementById("detail-kurdish-title");
if (detailKurdish) detailKurdish.textContent = flower.kurdishTitle || "";
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