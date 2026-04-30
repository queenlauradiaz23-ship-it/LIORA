// ============================================================
// MIXED BOUQUET DATA — ONLY these 8 bouquets
// ============================================================
const flowerData = {

  "mixed-pink-garden": {
    title: "Pink Garden Delight", kurdishTitle: "بوکێتی باخچەی پینکی",
    category: "Mixed",
    badge: "Hot",
    price: "$38",
    oldPrice: "$48",
    discount: "21% Off",
    image: "assets/img/items/mixed/mixed_1.jpg",
    images: ["assets/img/items/mixed/mixed_1.jpg", "assets/img/items/mixed/mixed_1.jpg"],
    description: "A delightful garden-inspired mixed bouquet featuring soft pink blooms, delicate greenery, and charming accents. Perfect for bringing the beauty of a spring garden indoors.",
    details: {
      "Flower Type": "Mixed Bouquet",
      "Color": "Pink & Green",
      "Stems": "25 stems",
      "Freshness": "5–7 days",
      "Occasion": "Birthday, Spring, Home decor",
      "Fragrance": "Light & floral",
    }
  },

  "mixed-sweet-blossom": {
    title: "Sweet Blossom Dream", kurdishTitle: "خەونی گوڵی شیرین",
    category: "Mixed",
    badge: "New",
    price: "$42",
    oldPrice: "$52",
    discount: "19% Off",
    image: "assets/img/items/mixed/mixed_2.jpg",
    images: ["assets/img/items/mixed/mixed_2.jpg", "assets/img/items/mixed/mixed_2.jpg"],
    description: "A dreamy mixed bouquet with sweet blossoms in soft lavender and white tones. Its ethereal beauty creates a calming and romantic atmosphere for any space.",
    details: {
      "Flower Type": "Mixed Bouquet",
      "Color": "Lavender & White",
      "Stems": "22 stems",
      "Freshness": "6–8 days",
      "Occasion": "Romance, Relaxation, Gift",
      "Fragrance": "Sweet & soothing",
    }
  },

  "mixed-white-daisy": {
    title: "White Daisy Charm", kurdishTitle: "جوانی دەیزی سپی",
    category: "Mixed",
    badge: "Premium",
    price: "$45",
    oldPrice: "$56",
    discount: "20% Off",
    image: "assets/img/items/mixed/mixed_3.jpg",
    images: ["assets/img/items/mixed/mixed_3.jpg", "assets/img/items/mixed/mixed_3.jpg"],
    description: "A charming mixed bouquet centered around pristine white daisies with complementary blooms. Clean, fresh, and effortlessly elegant for any occasion.",
    details: {
      "Flower Type": "Mixed Bouquet",
      "Color": "White & Green",
      "Stems": "20 stems",
      "Freshness": "6–8 days",
      "Occasion": "Wedding, Purity, Elegance",
      "Fragrance": "Clean & fresh",
    }
  },

  "mixed-soft-pastel": {
    title: "Soft Pastel Love", kurdishTitle: "خۆشەویستی پاستێلی نەرم",
    category: "Mixed",
    badge: "New",
    price: "$44",
    oldPrice: "$54",
    discount: "19% Off",
    image: "assets/img/items/mixed/mixed_6.jpg",
    images: ["assets/img/items/mixed/mixed_6.jpg", "assets/img/items/mixed/mixed_6.jpg"],
    description: "A loving mixed bouquet in soft pastel shades of pink and cream. Its gentle color palette and varied textures create a warm, inviting feeling perfect for expressing affection.",
    details: {
      "Flower Type": "Mixed Bouquet",
      "Color": "Pastel Pink & Cream",
      "Stems": "24 stems",
      "Freshness": "5–7 days",
      "Occasion": "Love, Anniversary, Thank You",
      "Fragrance": "Delicate & sweet",
    }
  },

  "mixed-lavender-whisper": {
    title: "Lavender Whisper", kurdishTitle: "نسیمی لاڤەندەر",
    category: "Mixed",
    badge: "-20%",
    price: "$36",
    oldPrice: "$46",
    discount: "22% Off",
    image: "assets/img/items/mixed/mixed_7.jpg",
    images: ["assets/img/items/mixed/mixed_7.jpg", "assets/img/items/mixed/mixed_7.jpg"],
    description: "A whisper-soft mixed bouquet featuring delicate lavender and purple hues. Its calming presence and subtle beauty make it ideal for moments of peace and reflection.",
    details: {
      "Flower Type": "Mixed Bouquet",
      "Color": "Lavender & Purple",
      "Stems": "18 stems",
      "Freshness": "6–8 days",
      "Occasion": "Sympathy, Calm, Self-care",
      "Fragrance": "Mild & relaxing",
    }
  },

  "mixed-spring-morning": {
    title: "Spring Morning Glow", kurdishTitle: "ڕوناکی بەیانی بەهار",
    category: "Mixed",
    badge: "Premium",
    price: "$48",
    oldPrice: "$60",
    discount: "20% Off",
    image: "assets/img/items/mixed/mixed_8.jpg",
    images: ["assets/img/items/mixed/mixed_8.jpg", "assets/img/items/mixed/mixed_8.jpg"],
    description: "A vibrant mixed bouquet that captures the glow of a fresh spring morning. Bright yellows, soft pinks, and fresh greens combine to create an uplifting, energizing arrangement.",
    details: {
      "Flower Type": "Mixed Bouquet",
      "Color": "Yellow, Pink & Green",
      "Stems": "26 stems",
      "Freshness": "5–7 days",
      "Occasion": "Spring, Celebration, Cheer-up",
      "Fragrance": "Fresh & bright",
    }
  },

  "mixed-blush-blossom": {
    title: "Blush Blossom Fantasy", kurdishTitle: "فانتازیای بلاش بلۆسم",
    category: "Mixed",
    badge: "Hot",
    price: "$50",
    oldPrice: "$62",
    discount: "19% Off",
    image: "assets/img/items/mixed/mixed_9.jpg",
    images: ["assets/img/items/mixed/mixed_9.jpg", "assets/img/items/mixed/mixed_9.jpg"],
    description: "A fantastical mixed bouquet in beautiful blush tones with pink and white blooms. Its romantic, fairy-tale quality makes it perfect for dreamy celebrations and special moments.",
    details: {
      "Flower Type": "Mixed Bouquet",
      "Color": "Blush Pink & White",
      "Stems": "24 stems",
      "Freshness": "6–8 days",
      "Occasion": "Wedding, Romance, Fantasy",
      "Fragrance": "Romantic & floral",
    }
  },

  "mixed-white-elegance": {
    title: "White Elegance Bouquet", kurdishTitle: "بوکێتی سپی جوان",
    category: "Mixed",
    badge: "New",
    price: "$47",
    oldPrice: "$57",
    discount: "18% Off",
    image: "assets/img/items/mixed/mixed_10.jpg",
    images: ["assets/img/items/mixed/mixed_10.jpg", "assets/img/items/mixed/mixed_10.jpg"],
    description: "An elegantly refined mixed bouquet featuring pristine white and soft green blooms. Its sophisticated simplicity and clean lines make it a timeless choice for any refined occasion.",
    details: {
      "Flower Type": "Mixed Bouquet",
      "Color": "White & Soft Green",
      "Stems": "22 stems",
      "Freshness": "7–10 days",
      "Occasion": "Elegant events, Corporate, Modern",
      "Fragrance": "Subtle & clean",
    }
  }
};

// ============================================================
// ALL PRODUCTS — ONLY these 8 mixed bouquets
// ============================================================
const allProducts = [
  { id: "mixed-pink-garden",     title: "Pink Garden Delight", kurdishTitle: "بوکێتی باخچەی پینکی",      price: "$38",  oldPrice: "$48",  image: "assets/img/items/mixed/mixed_1.jpg",   image2: "assets/img/items/mixed/mixed_1.jpg",   badge: "Hot",     category: "Mixed" },
  { id: "mixed-sweet-blossom",   title: "Sweet Blossom Dream", kurdishTitle: "خەونی گوڵی شیرین",      price: "$42",  oldPrice: "$52",  image: "assets/img/items/mixed/mixed_2.jpg",   image2: "assets/img/items/mixed/mixed_2.jpg",   badge: "New",     category: "Mixed" },
  { id: "mixed-white-daisy",     title: "White Daisy Charm", kurdishTitle: "جوانی دەیزی سپی",        price: "$45",  oldPrice: "$56",  image: "assets/img/items/mixed/mixed_3.jpg",   image2: "assets/img/items/mixed/mixed_3.jpg",   badge: "Premium", category: "Mixed" },
  { id: "mixed-soft-pastel",     title: "Soft Pastel Love", kurdishTitle: "خۆشەویستی پاستێلی نەرم",         price: "$44",  oldPrice: "$54",  image: "assets/img/items/mixed/mixed_6.jpg",   image2: "assets/img/items/mixed/mixed_6.jpg",   badge: "New",     category: "Mixed" },
  { id: "mixed-lavender-whisper",title: "Lavender Whisper", kurdishTitle: "نسیمی لاڤەندەر",         price: "$36",  oldPrice: "$46",  image: "assets/img/items/mixed/mixed_7.jpg",   image2: "assets/img/items/mixed/mixed_7.jpg",   badge: "-20%",    category: "Mixed" },
  { id: "mixed-spring-morning",  title: "Spring Morning Glow", kurdishTitle: "ڕوناکی بەیانی بەهار",      price: "$48",  oldPrice: "$60",  image: "assets/img/items/mixed/mixed_8.jpg",   image2: "assets/img/items/mixed/mixed_8.jpg",   badge: "Premium", category: "Mixed" },
  { id: "mixed-blush-blossom",   title: "Blush Blossom Fantasy", kurdishTitle: "فانتازیای بلاش بلۆسم",    price: "$50",  oldPrice: "$62",  image: "assets/img/items/mixed/mixed_9.jpg",   image2: "assets/img/items/mixed/mixed_9.jpg",   badge: "Hot",     category: "Mixed" },
  { id: "mixed-white-elegance",  title: "White Elegance Bouquet", kurdishTitle: "بوکێتی سپی جوان",   price: "$47",  oldPrice: "$57",  image: "assets/img/items/mixed/mixed_10.jpg",  image2: "assets/img/items/mixed/mixed_10.jpg",  badge: "New",     category: "Mixed" }
];

// ============================================================
// INIT — read ?id= from URL and render page
// ============================================================
const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") || "mixed-pink-garden";
const flower = flowerData[currentId] || flowerData["mixed-pink-garden"];

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