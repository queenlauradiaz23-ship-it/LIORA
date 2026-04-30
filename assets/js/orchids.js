// ============================================================
// ORCHID DATA — ONLY these 6 flowers
// ============================================================
const flowerData = {

  "orchid-purple-majesty": {
    title: "Purple Majesty Orchids", kurdishTitle: "گولی ئۆرکید مۆر شاهانە",
    category: "Orchids",
    badge: "Premium",
    price: "$58",
    oldPrice: "$72",
    discount: "19% Off",
    image: "assets/img/items/orchids/orchid_1.jpg",
    images: ["assets/img/items/orchids/orchid_1.jpg", "assets/img/items/orchids/orchid_1.jpg"],
    description: "Regal purple majesty orchids that exude luxury and sophistication. Their stunning violet blooms and elegant stems create a breathtaking display fit for royalty and special celebrations.",
    details: {
      "Flower Type": "Phalaenopsis Orchid",
      "Color": "Royal Purple",
      "Stems": "2 stems",
      "Freshness": "10–14 days",
      "Occasion": "Luxury gifts, Anniversaries, Corporate",
      "Fragrance": "Subtle & elegant",
    }
  },

  "orchid-pink-champagne": {
    title: "Pink Champagne Orchids", kurdishTitle: "گولی ئۆرکید پینکی شەمپاین",
    category: "Orchids",
    badge: "Premium",
    price: "$70",
    oldPrice: "$85",
    discount: "18% Off",
    image: "assets/img/items/orchids/orchid_5.jpg",
    images: ["assets/img/items/orchids/orchid_5.jpg", "assets/img/items/orchids/orchid_5.jpg"],
    description: "Delicate pink champagne orchids with a soft, romantic blush tone. Wrapped beautifully, these premium blooms bring an air of celebration and elegance to any special moment.",
    details: {
      "Flower Type": "Cymbidium Orchid",
      "Color": "Pink Champagne",
      "Stems": "3 stems",
      "Freshness": "10–14 days",
      "Occasion": "Wedding, Bridal, Luxury",
      "Fragrance": "Light & sweet",
    }
  },

  "orchid-sunset-coral": {
    title: "Sunset Coral Orchids", kurdishTitle: "گولی ئۆرکید کۆرالی غرووبی خۆر",
    category: "Orchids",
    badge: "Hot",
    price: "$60",
    oldPrice: "$75",
    discount: "20% Off",
    image: "assets/img/items/orchids/orchid_6.jpg",
    images: ["assets/img/items/orchids/orchid_6.jpg", "assets/img/items/orchids/orchid_6.jpg"],
    description: "Warm sunset coral orchids that capture the glow of a tropical evening. Their unique peachy-orange hue and graceful form make them a standout choice for bold floral lovers.",
    details: {
      "Flower Type": "Phalaenopsis Orchid",
      "Color": "Sunset Coral",
      "Stems": "2 stems",
      "Freshness": "10–14 days",
      "Occasion": "Home decor, Modern gifts, Celebration",
      "Fragrance": "Mild & pleasant",
    }
  },

  "orchid-pink-cascade": {
    title: "Pink Cascade Orchids", kurdishTitle: "گولی ئۆرکید پینکی کاسکید",
    category: "Orchids",
    badge: "New",
    price: "$52",
    oldPrice: "$65",
    discount: "20% Off",
    image: "assets/img/items/orchids/orchid_7.jpg",
    images: ["assets/img/items/orchids/orchid_7.jpg", "assets/img/items/orchids/orchid_7.jpg"],
    description: "Elegant pink cascade orchids with cascading blooms that create a waterfall of beauty. Their soft pink petals and flowing arrangement bring a dreamy, romantic atmosphere to any space.",
    details: {
      "Flower Type": "Dendrobium Orchid",
      "Color": "Soft Pink",
      "Stems": "3 stems",
      "Freshness": "8–12 days",
      "Occasion": "Romance, Spring, Home decor",
      "Fragrance": "Delicate & floral",
    }
  },

  "orchid-golden-sunrise": {
    title: "Golden Sunrise Orchids", kurdishTitle: "گولی ئۆرکید زێڕینی هەڵاتنی خۆر",
    category: "Orchids",
    badge: "-15%",
    price: "$48",
    oldPrice: "$58",
    discount: "17% Off",
    image: "assets/img/items/orchids/orchid_9.jpg",
    images: ["assets/img/items/orchids/orchid_9.jpg", "assets/img/items/orchids/orchid_9.jpg"],
    description: "Radiant golden sunrise orchids that brighten any room with their cheerful yellow blooms. Like capturing morning sunlight, these orchids bring warmth, positivity, and natural elegance.",
    details: {
      "Flower Type": "Phalaenopsis Orchid",
      "Color": "Golden Yellow",
      "Stems": "2 stems",
      "Freshness": "10–14 days",
      "Occasion": "Cheer-up, Housewarming, Everyday",
      "Fragrance": "Light & fresh",
    }
  },

  "orchid-ocean-breeze": {
    title: "Ocean Breeze Blue Orchids", kurdishTitle: "گولی ئۆرکید شینی نسیمی ئۆقیانوس",
    category: "Orchids",
    badge: "Hot",
    price: "$72",
    oldPrice: "$88",
    discount: "18% Off",
    image: "assets/img/items/orchids/orchid_10.jpg",
    images: ["assets/img/items/orchids/orchid_10.jpg", "assets/img/items/orchids/orchid_10.jpg"],
    description: "Stunning ocean breeze blue orchids with a mesmerizing sky-blue hue. Their rare and captivating color makes them a truly unique gift for those who appreciate exotic and extraordinary beauty.",
    details: {
      "Flower Type": "Dyed Phalaenopsis",
      "Color": "Ocean Blue",
      "Stems": "2 stems",
      "Freshness": "8–12 days",
      "Occasion": "Unique gifts, Modern decor, Luxury",
      "Fragrance": "Mild & fresh",
    }
  }
};

// ============================================================
// ALL PRODUCTS — ONLY these 6 orchids
// ============================================================
const allProducts = [
  { id: "orchid-purple-majesty",  title: "Purple Majesty Orchids", kurdishTitle: "گولی ئۆرکید مۆر شاهانە",      price: "$58", oldPrice: "$72", image: "assets/img/items/orchids/orchid_1.jpg",  image2: "assets/img/items/orchids/orchid_1.jpg",  badge: "Premium", category: "Orchids" },
  { id: "orchid-pink-champagne",  title: "Pink Champagne Orchids", kurdishTitle: "گولی ئۆرکید پینکی شەمپاین",      price: "$70", oldPrice: "$85", image: "assets/img/items/orchids/orchid_5.jpg",  image2: "assets/img/items/orchids/orchid_5.jpg",  badge: "Premium", category: "Orchids" },
  { id: "orchid-sunset-coral",    title: "Sunset Coral Orchids", kurdishTitle: "گولی ئۆرکید کۆرالی غرووبی خۆر",        price: "$60", oldPrice: "$75", image: "assets/img/items/orchids/orchid_6.jpg",  image2: "assets/img/items/orchids/orchid_6.jpg",  badge: "Hot",     category: "Orchids" },
  { id: "orchid-pink-cascade",    title: "Pink Cascade Orchids", kurdishTitle: "گولی ئۆرکید پینکی کاسکید",        price: "$52", oldPrice: "$65", image: "assets/img/items/orchids/orchid_7.jpg",  image2: "assets/img/items/orchids/orchid_7.jpg",  badge: "New",     category: "Orchids" },
  { id: "orchid-golden-sunrise",  title: "Golden Sunrise Orchids", kurdishTitle: "گولی ئۆرکید زێڕینی هەڵاتنی خۆر",      price: "$48", oldPrice: "$58", image: "assets/img/items/orchids/orchid_9.jpg",  image2: "assets/img/items/orchids/orchid_9.jpg",  badge: "-15%",    category: "Orchids" },
  { id: "orchid-ocean-breeze",    title: "Ocean Breeze Blue Orchids", kurdishTitle: "گولی ئۆرکید شینی نسیمی ئۆقیانوس",   price: "$72", oldPrice: "$88", image: "assets/img/items/orchids/orchid_10.jpg", image2: "assets/img/items/orchids/orchid_10.jpg", badge: "Hot",     category: "Orchids" }
];

// ============================================================
// INIT — read ?id= from URL and render page
// ============================================================
const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") || "orchid-purple-majesty";
const flower = flowerData[currentId] || flowerData["orchid-purple-majesty"];

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