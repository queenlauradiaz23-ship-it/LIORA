// ============================================================
// SUNFLOWER DATA — ONLY these 5 flowers
// ============================================================
const flowerData = {

  "sunflower-classic": {
    title: "Classic Yellow Sunflower Bouquet", kurdishTitle: "گولی گەرداڵەی زەردی کلاسیک",
    category: "Sunflowers",
    badge: "Hot",
    price: "$28",
    oldPrice: "$35",
    discount: "20% Off",
    image: "assets/img/items/sunflowers/sunflower_2.jpg",
    images: ["assets/img/items/sunflowers/sunflower_2.jpg", "assets/img/items/sunflowers/sunflower_2.jpg"],
    description: "Bright and cheerful classic yellow sunflowers that bring instant warmth and happiness. Their iconic golden petals and dark centers capture the essence of a perfect summer day, making them ideal for spreading joy.",
    details: {
      "Flower Type": "Sunflower",
      "Color": "Golden Yellow",
      "Stems": "10 stems",
      "Freshness": "6–8 days",
      "Occasion": "Birthday, Cheer-up, Summer",
      "Fragrance": "Light & earthy",
    }
  },

  "sunflower-sunny-basket": {
    title: "Sunny Day Basket", kurdishTitle: "سەبەتەی گەرداڵەی ڕۆژەکی خۆر",
    category: "Sunflowers",
    badge: "New",
    price: "$32",
    oldPrice: "$40",
    discount: "20% Off",
    image: "assets/img/items/sunflowers/sunflower_3.jpg",
    images: ["assets/img/items/sunflowers/sunflower_3.jpg", "assets/img/items/sunflowers/sunflower_3.jpg"],
    description: "A charming basket arrangement of sunflowers that radiates positivity and sunshine. Perfectly presented for gifting, this basket brings a touch of nature's brightness indoors.",
    details: {
      "Flower Type": "Sunflower",
      "Color": "Golden Yellow",
      "Stems": "12 stems",
      "Freshness": "6–8 days",
      "Occasion": "Housewarming, Get Well, Thank You",
      "Fragrance": "Fresh & natural",
    }
  },

  "sunflower-golden-vase": {
    title: "Golden Vase Arrangement", kurdishTitle: "گولی گەرداڵەی زێڕینی مزە",
    category: "Sunflowers",
    badge: "Premium",
    price: "$38",
    oldPrice: "$48",
    discount: "21% Off",
    image: "assets/img/items/sunflowers/sunflower_4.jpg",
    images: ["assets/img/items/sunflowers/sunflower_4.jpg", "assets/img/items/sunflowers/sunflower_4.jpg"],
    description: "Elegant golden sunflowers arranged in a sophisticated vase display. This premium arrangement combines rustic charm with refined presentation, perfect for elevating any space or occasion.",
    details: {
      "Flower Type": "Sunflower",
      "Color": "Rich Golden",
      "Stems": "15 stems",
      "Freshness": "7–9 days",
      "Occasion": "Anniversary, Home decor, Luxury",
      "Fragrance": "Mild & pleasant",
    }
  },

  "sunflower-giant-heart": {
    title: "Giant Sunflower Heart", kurdishTitle: "دڵی گەرداڵەی گەورە",
    category: "Sunflowers",
    badge: "Hot",
    price: "$45",
    oldPrice: "$55",
    discount: "18% Off",
    image: "assets/img/items/sunflowers/sunflower_6.jpg",
    images: ["assets/img/items/sunflowers/sunflower_6.jpg", "assets/img/items/sunflowers/sunflower_6.jpg"],
    description: "A magnificent heart-shaped arrangement of giant sunflowers that makes a bold and loving statement. These oversized blooms create an unforgettable visual impact for grand gestures and special celebrations.",
    details: {
      "Flower Type": "Giant Sunflower",
      "Color": "Bright Yellow",
      "Stems": "20 stems",
      "Freshness": "6–8 days",
      "Occasion": "Valentine, Proposal, Grand gesture",
      "Fragrance": "Sweet & warm",
    }
  },

  "sunflower-elegant": {
    title: "Elegant Wrapped Sunflowers", kurdishTitle: "گولی گەرداڵەی جوان پێچراو",
    category: "Sunflowers",
    badge: "New",
    price: "$36",
    oldPrice: "$45",
    discount: "20% Off",
    image: "assets/img/items/sunflowers/sunflower_10.jpg",
    images: ["assets/img/items/sunflowers/sunflower_10.jpg", "assets/img/items/sunflowers/sunflower_10.jpg"],
    description: "Sophisticated sunflowers wrapped in elegant paper for a modern and stylish presentation. This contemporary take on a classic favorite is perfect for those who appreciate understated beauty with a twist.",
    details: {
      "Flower Type": "Sunflower",
      "Color": "Golden Yellow",
      "Stems": "12 stems",
      "Freshness": "6–8 days",
      "Occasion": "Modern gifts, Corporate, Everyday",
      "Fragrance": "Light & fresh",
    }
  }
};

// ============================================================
// ALL PRODUCTS — ONLY these 5 sunflowers
// ============================================================
const allProducts = [
  { id: "sunflower-classic",      title: "Classic Yellow Sunflower Bouquet", kurdishTitle: "گولی گەرداڵەی زەردی کلاسیک", price: "$28", oldPrice: "$35", image: "assets/img/items/sunflowers/sunflower_2.jpg",  image2: "assets/img/items/sunflowers/sunflower_2.jpg",  badge: "Hot",     category: "Sunflowers" },
  { id: "sunflower-sunny-basket", title: "Sunny Day Basket", kurdishTitle: "سەبەتەی گەرداڵەی ڕۆژەکی خۆر",               price: "$32", oldPrice: "$40", image: "assets/img/items/sunflowers/sunflower_3.jpg",  image2: "assets/img/items/sunflowers/sunflower_3.jpg",  badge: "New",     category: "Sunflowers" },
  { id: "sunflower-golden-vase",  title: "Golden Vase Arrangement", kurdishTitle: "گولی گەرداڵەی زێڕینی مزە",        price: "$38", oldPrice: "$48", image: "assets/img/items/sunflowers/sunflower_4.jpg",  image2: "assets/img/items/sunflowers/sunflower_4.jpg",  badge: "Premium", category: "Sunflowers" },
  { id: "sunflower-giant-heart",  title: "Giant Sunflower Heart", kurdishTitle: "دڵی گەرداڵەی گەورە",          price: "$45", oldPrice: "$55", image: "assets/img/items/sunflowers/sunflower_6.jpg",  image2: "assets/img/items/sunflowers/sunflower_6.jpg",  badge: "Hot",     category: "Sunflowers" },
  { id: "sunflower-elegant",      title: "Elegant Wrapped Sunflowers", kurdishTitle: "گولی گەرداڵەی جوان پێچراو",     price: "$36", oldPrice: "$45", image: "assets/img/items/sunflowers/sunflower_10.jpg", image2: "assets/img/items/sunflowers/sunflower_10.jpg", badge: "New",     category: "Sunflowers" }
];

// ============================================================
// INIT — read ?id= from URL and render page
// ============================================================
const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") || "sunflower-classic";
const flower = flowerData[currentId] || flowerData["sunflower-classic"];

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