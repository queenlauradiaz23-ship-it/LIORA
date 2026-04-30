// ============================================================
// VIP DATA — ONLY these 7 flowers
// ============================================================
const flowerData = {

  "vip-1": {
    title: "Tulip Mix Color",
    category: "VIP Bouquets",
    badge: "VIP",
    price: "$150",
    oldPrice: "$180",
    discount: "17% Off",
    image: "assets/img/items/vip/vip_1.jpg",
    images: ["assets/img/items/vip/vip_1.jpg"],
    description: "A luxurious mix of colorful tulips arranged in a premium VIP bouquet. Bright, elegant, and perfect for making a grand impression.",
    details: {
      "Flower Type": "Tulips",
      "Color": "Mixed Colors",
      "Stems": "30 stems",
      "Freshness": "6–8 days",
      "Occasion": "VIP Gift, Celebration",
      "Fragrance": "Fresh & light",
    }
  },

  "vip-2": {
    title: "Tulips Bouquet",
    category: "VIP Bouquets",
    badge: "VIP",
    price: "$200",
    oldPrice: "$215.57",
    discount: "7% Off",
    image: "assets/img/items/vip/vip_2.jpg",
    images: ["assets/img/items/vip/vip_2.jpg"],
    description: "Elegant VIP tulips bouquet designed for high-end gifting and premium occasions.",
    details: {
      "Flower Type": "Tulips",
      "Color": "Pink & White",
      "Stems": "28 stems",
      "Freshness": "6–8 days",
      "Occasion": "Luxury Gift",
      "Fragrance": "Soft floral",
    }
  },

  "vip-3": {
    title: "White Tulips Luxury",
    category: "VIP Bouquets",
    badge: "VIP",
    price: "$238.85",
    oldPrice: "$245.8",
    discount: "5% Off",
    image: "assets/img/items/vip/vip_3.jpg",
    images: ["assets/img/items/vip/vip_3.jpg"],
    description: "Premium white tulips arranged in a luxurious VIP style bouquet for elegant tastes.",
    details: {
      "Flower Type": "Tulips",
      "Color": "White",
      "Stems": "32 stems",
      "Freshness": "7–9 days",
      "Occasion": "Wedding, Luxury",
      "Fragrance": "Clean & fresh",
    }
  },

  "vip-4": {
    title: "Pink VIP Flowers",
    category: "VIP Bouquets",
    badge: "VIP",
    price: "$250.8",
    oldPrice: "$255",
    discount: "2% Off",
    image: "assets/img/items/vip/vip_4.jpg",
    images: ["assets/img/items/vip/vip_4.jpg"],
    description: "Soft pink premium VIP bouquet crafted for romantic and high-end occasions.",
    details: {
      "Flower Type": "Mixed Flowers",
      "Color": "Pink",
      "Stems": "35 stems",
      "Freshness": "6–8 days",
      "Occasion": "Romantic, VIP",
      "Fragrance": "Sweet floral",
    }
  },

  "vip-5": {
    title: "Mini Rose Pink VIP",
    category: "VIP Bouquets",
    badge: "VIP",
    price: "$299",
    oldPrice: "$330",
    discount: "10% Off",
    image: "assets/img/items/vip/vip_5.jpg",
    images: ["assets/img/items/vip/vip_5.jpg"],
    description: "High-end mini rose bouquet with soft pink tones and elegant premium wrapping.",
    details: {
      "Flower Type": "Mini Roses",
      "Color": "Pink",
      "Stems": "40 stems",
      "Freshness": "6–8 days",
      "Occasion": "Luxury Gift",
      "Fragrance": "Rich & floral",
    }
  },

  "vip-6": {
    title: "White Lily VIP Flowers",
    category: "VIP Bouquets",
    badge: "VIP",
    price: "$310",
    oldPrice: "$320.5",
    discount: "3% Off",
    image: "assets/img/items/vip/vip_6.jpg",
    images: ["assets/img/items/vip/vip_6.jpg"],
    description: "Premium white lilies arranged in an elegant VIP bouquet with sophisticated presentation.",
    details: {
      "Flower Type": "Lilies",
      "Color": "White",
      "Stems": "20 stems",
      "Freshness": "7–10 days",
      "Occasion": "Elegant, Luxury",
      "Fragrance": "Strong & sweet",
    }
  },

  "vip-7": {
    title: "Ultimate VIP Flowers",
    category: "VIP Bouquets",
    badge: "VIP",
    price: "$238.85",
    oldPrice: "$245.8",
    discount: "5% Off",
    image: "assets/img/items/vip/vip_7.jpg",
    images: ["assets/img/items/vip/vip_7.jpg"],
    description: "A complete premium VIP bouquet combining elegance, luxury, and style.",
    details: {
      "Flower Type": "Mixed Premium",
      "Color": "Mixed",
      "Stems": "45 stems",
      "Freshness": "6–9 days",
      "Occasion": "VIP, Exclusive",
      "Fragrance": "Rich floral",
    }
  }
};

// ============================================================
// ALL PRODUCTS — VIP
// ============================================================
const allProducts = Object.keys(flowerData).map(id => {
  const f = flowerData[id];
  return {
    id,
    title: f.title,
    price: f.price,
    oldPrice: f.oldPrice,
    image: f.image,
    image2: f.image,
    badge: f.badge,
    category: f.category
  };
});

// ============================================================
// INIT — read ?id= from URL and render page
// ============================================================
const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") || "vip-1";
const flower = flowerData[currentId] || flowerData["vip-1"];

// Update content
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

// Remove thumbnails (single image only)
const thumbContainer = document.getElementById("detail-thumbnails");
thumbContainer.innerHTML = "";

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
          <img src="${p.image}" class="product__img default" />
          <img src="${p.image2}" class="product__img hover" />
        </a>
        <div class="product__badge ${randomBadge}">${p.badge}</div>
      </div>
      <div class="product__content">
        <span class="product__category">${p.category}</span>
        <a href="details.html?id=${p.id}">
          <h3 class="product__title">${p.title}</h3>
        </a>
        <div class="product__price flex">
          <span class="new__price">${p.price}</span>
          <span class="old__price">${p.oldPrice}</span>
        </div>
      </div>
    </div>
  `;
});