// ============================================================
// TULIP DATA — ONLY these 6 flowers
// ============================================================
const flowerData = {

  "tulip-rainbow": {
    title: "Rainbow Mixed Tulips", kurdishTitle: "گولی تیولیپ ڕەنگاو",
    category: "Tulips",
    badge: "Hot",
    price: "$32",
    oldPrice: "$40",
    discount: "20% Off",
    image: "assets/img/items/tulips/tulip_1.jpg",
    images: ["assets/img/items/tulips/tulip_1.jpg", "assets/img/items/tulips/tulip_1.jpg"],
    description: "A vibrant rainbow mix of tulips in stunning assorted colors. These cheerful blooms bring a burst of spring energy and playful charm to any space, perfect for celebrating life's colorful moments.",
    details: {
      "Flower Type": "Tulip",
      "Color": "Rainbow Mix",
      "Stems": "20 stems",
      "Freshness": "5–7 days",
      "Occasion": "Spring, Birthday, Cheer-up",
      "Fragrance": "Light & fresh",
    }
  },

  "tulip-red-white": {
    title: "Red & White Romance Tulips", kurdishTitle: "گولی تیولیپ سوور و سپی ڕۆمانس",
    category: "Tulips",
    badge: "Premium",
    price: "$38",
    oldPrice: "$48",
    discount: "21% Off",
    image: "assets/img/items/tulips/tulip_2.jpg",
    images: ["assets/img/items/tulips/tulip_2.jpg", "assets/img/items/tulips/tulip_2.jpg"],
    description: "Elegant red and white tulips intertwined in a romantic dance of color. This sophisticated combination symbolizes pure love and passion, making it an exquisite choice for heartfelt expressions.",
    details: {
      "Flower Type": "Tulip",
      "Color": "Red & White",
      "Stems": "18 stems",
      "Freshness": "6–8 days",
      "Occasion": "Anniversary, Romance, Valentine",
      "Fragrance": "Delicate & sweet",
    }
  },

  "tulip-pure-white": {
    title: "Pure White Elegance Tulips", kurdishTitle: "گولی تیولیپ سپی پاک و جوان",
    category: "Tulips",
    badge: "New",
    price: "$35",
    oldPrice: "$42",
    discount: "17% Off",
    image: "assets/img/items/tulips/tulip_3.jpg",
    images: ["assets/img/items/tulips/tulip_3.jpg", "assets/img/items/tulips/tulip_3.jpg"],
    description: "Immaculate pure white tulips that embody grace and sophistication. Their clean, elegant lines and pristine petals create a timeless and serene arrangement for any refined occasion.",
    details: {
      "Flower Type": "Tulip",
      "Color": "Pure White",
      "Stems": "16 stems",
      "Freshness": "6–8 days",
      "Occasion": "Wedding, Sympathy, Elegance",
      "Fragrance": "Clean & subtle",
    }
  },

  "tulip-lavender": {
    title: "Lavender Love Tulips", kurdishTitle: "گولی تیولیپ لاڤەندەر خۆشەویستی",
    category: "Tulips",
    badge: "Hot",
    price: "$34",
    oldPrice: "$42",
    discount: "19% Off",
    image: "assets/img/items/tulips/tulip_5.jpg",
    images: ["assets/img/items/tulips/tulip_5.jpg", "assets/img/items/tulips/tulip_5.jpg"],
    description: "Dreamy lavender tulips that captivate with their soft, romantic hue. These enchanting blooms bring a sense of calm and beauty, perfect for expressing gentle affection and admiration.",
    details: {
      "Flower Type": "Tulip",
      "Color": "Soft Lavender",
      "Stems": "18 stems",
      "Freshness": "6–8 days",
      "Occasion": "Romance, Spring, Friendship",
      "Fragrance": "Soft & floral",
    }
  },

  "tulip-ruby-red": {
    title: "Ruby Red Tulip Bouquet", kurdishTitle: "گولی تیولیپ ڕوبی سوور",
    category: "Tulips",
    badge: "Premium",
    price: "$36",
    oldPrice: "$45",
    discount: "20% Off",
    image: "assets/img/items/tulips/tulip_6.jpg",
    images: ["assets/img/items/tulips/tulip_6.jpg", "assets/img/items/tulips/tulip_6.jpg"],
    description: "Rich ruby red tulips that speak the language of deep love and devotion. Their bold, velvety petals create a dramatic and passionate statement for those unforgettable moments.",
    details: {
      "Flower Type": "Tulip",
      "Color": "Ruby Red",
      "Stems": "20 stems",
      "Freshness": "6–8 days",
      "Occasion": "Valentine, Anniversary, Passion",
      "Fragrance": "Sweet & intense",
    }
  },

  "tulip-blush-pink": {
    title: "Blush Pink Tulip Bouquet", kurdishTitle: "گولی تیولیپ پینکی بلاش",
    category: "Tulips",
    badge: "New",
    price: "$33",
    oldPrice: "$40",
    discount: "18% Off",
    image: "assets/img/items/tulips/tulip_8.jpg",
    images: ["assets/img/items/tulips/tulip_8.jpg", "assets/img/items/tulips/tulip_8.jpg"],
    description: "Delicate blush pink tulips with a gentle, feminine charm. Their soft pastel hue and elegant cup-shaped blooms create a romantic and soothing arrangement for tender occasions.",
    details: {
      "Flower Type": "Tulip",
      "Color": "Blush Pink",
      "Stems": "18 stems",
      "Freshness": "6–8 days",
      "Occasion": "New Baby, Birthday, Spring",
      "Fragrance": "Gentle & sweet",
    }
  }
};

// ============================================================
// ALL PRODUCTS — ONLY these 6 tulips
// ============================================================
const allProducts = [
  { id: "tulip-rainbow",    title: "Rainbow Mixed Tulips", kurdishTitle: "گولی تیولیپ ڕەنگاو",        price: "$32", oldPrice: "$40", image: "assets/img/items/tulips/tulip_1.jpg", image2: "assets/img/items/tulips/tulip_1.jpg", badge: "Hot",     category: "Tulips" },
  { id: "tulip-red-white",  title: "Red & White Romance Tulips", kurdishTitle: "گولی تیولیپ سوور و سپی ڕۆمانس",  price: "$38", oldPrice: "$48", image: "assets/img/items/tulips/tulip_2.jpg", image2: "assets/img/items/tulips/tulip_2.jpg", badge: "Premium", category: "Tulips" },
  { id: "tulip-pure-white", title: "Pure White Elegance Tulips", kurdishTitle: "گولی تیولیپ سپی پاک و جوان",  price: "$35", oldPrice: "$42", image: "assets/img/items/tulips/tulip_3.jpg", image2: "assets/img/items/tulips/tulip_3.jpg", badge: "New",     category: "Tulips" },
  { id: "tulip-lavender",   title: "Lavender Love Tulips", kurdishTitle: "گولی تیولیپ لاڤەندەر خۆشەویستی",        price: "$34", oldPrice: "$42", image: "assets/img/items/tulips/tulip_5.jpg", image2: "assets/img/items/tulips/tulip_5.jpg", badge: "Hot",     category: "Tulips" },
  { id: "tulip-ruby-red",   title: "Ruby Red Tulip Bouquet", kurdishTitle: "گولی تیولیپ ڕوبی سوور",      price: "$36", oldPrice: "$45", image: "assets/img/items/tulips/tulip_6.jpg", image2: "assets/img/items/tulips/tulip_6.jpg", badge: "Premium", category: "Tulips" },
  { id: "tulip-blush-pink", title: "Blush Pink Tulip Bouquet", kurdishTitle: "گولی تیولیپ پینکی بلاش",    price: "$33", oldPrice: "$40", image: "assets/img/items/tulips/tulip_8.jpg", image2: "assets/img/items/tulips/tulip_8.jpg", badge: "New",     category: "Tulips" }
];

// ============================================================
// INIT — read ?id= from URL and render page
// ============================================================
const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") || "tulip-rainbow";
const flower = flowerData[currentId] || flowerData["tulip-rainbow"];

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
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach(s => s.classList.remove('active'));
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('active');
            }
        });
        star.addEventListener('mouseenter', () => {
            stars.forEach(s => s.classList.remove('hover'));
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('hover');
            }
        });
        star.addEventListener('mouseleave', () => {
            stars.forEach(s => s.classList.remove('hover'));
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