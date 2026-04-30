// ============================================================
// MINI ROSE DATA — ONLY these 6 flowers
// ============================================================
const flowerData = {

  "minirose-crimson": {
    title: "Crimson Mini Rose Bouquet", kurdishTitle: "گولی مینی ڕۆز کریمسۆن",
    category: "Mini Roses",
    badge: "Hot",
    price: "$32",
    oldPrice: "$40",
    discount: "20% Off",
    image: "assets/img/items/minirose/redminirose.jpg",
    images: ["assets/img/items/minirose/redminirose.jpg", "assets/img/items/minirose/redminirose.jpg"],
    description: "Deep crimson mini roses that speak the language of love and passion. Their rich, velvety petals create a dramatic and romantic statement perfect for heartfelt expressions.",
    details: {
      "Flower Type": "Mini Rose",
      "Color": "Crimson Red",
      "Stems": "24 stems",
      "Freshness": "5–7 days",
      "Occasion": "Valentine, Anniversary, Romance",
      "Fragrance": "Sweet & classic",
    }
  },

  "minirose-pinky-baby": {
    title: "Pinky Baby Rose Wrap", kurdishTitle: "گولی مینی پینکی منداڵ",
    category: "Mini Roses",
    badge: "New",
    price: "$28",
    oldPrice: "$35",
    discount: "20% Off",
    image: "assets/img/items/minirose/pinkybabyrosie.jpg",
    images: ["assets/img/items/minirose/pinkybabyrosie.jpg", "assets/img/items/minirose/pinkybabyrosie.jpg"],
    description: "Adorable baby pink mini roses wrapped with love. Their delicate charm and soft color make them perfect for new beginnings, baby showers, and sweet gestures.",
    details: {
      "Flower Type": "Mini Rose",
      "Color": "Baby Pink",
      "Stems": "20 stems",
      "Freshness": "5–7 days",
      "Occasion": "New Baby, Friendship, Just Because",
      "Fragrance": "Light & sweet",
    }
  },

  "minirose-pretty-pink": {
    title: "Pretty Pink Rosie Bunch", kurdishTitle: "گولی مینی پینکی جوان",
    category: "Mini Roses",
    badge: "Premium",
    price: "$36",
    oldPrice: "$45",
    discount: "20% Off",
    image: "assets/img/items/minirose/prettypinkyrosie.jpg",
    images: ["assets/img/items/minirose/prettypinkyrosie.jpg", "assets/img/items/minirose/prettypinkyrosie.jpg"],
    description: "A beautiful bunch of pretty pink mini roses that exude femininity and grace. Their compact size and abundant blooms create a lush, garden-fresh feeling.",
    details: {
      "Flower Type": "Mini Rose",
      "Color": "Pretty Pink",
      "Stems": "30 stems",
      "Freshness": "6–8 days",
      "Occasion": "Birthday, Thank You, Spring",
      "Fragrance": "Delicate & floral",
    }
  },

  "minirose-ocean-peach": {
    title: "Ocean Peach Rosie Bouquet", kurdishTitle: "گولی مینی پێچی ئۆقیانوس",
    category: "Mini Roses",
    badge: "Hot",
    price: "$34",
    oldPrice: "$42",
    discount: "19% Off",
    image: "assets/img/items/minirose/oceanrosie.jpg",
    images: ["assets/img/items/minirose/oceanrosie.jpg", "assets/img/items/minirose/oceanrosie.jpg"],
    description: "Unique ocean peach mini roses with a mesmerizing blend of coral and soft blue tones. Their unusual coloration makes them a standout choice for modern floral lovers.",
    details: {
      "Flower Type": "Mini Rose",
      "Color": "Ocean Peach",
      "Stems": "22 stems",
      "Freshness": "5–7 days",
      "Occasion": "Unique gifts, Modern events",
      "Fragrance": "Mild & fresh",
    }
  },

  "minirose-golden-sunset": {
    title: "Golden Sunset Rosie", kurdishTitle: "گولی مینی زێڕینی غرووبی خۆر",
    category: "Mini Roses",
    badge: "Premium",
    price: "$38",
    oldPrice: "$48",
    discount: "21% Off",
    image: "assets/img/items/minirose/goldenrosie.jpg",
    images: ["assets/img/items/minirose/goldenrosie.jpg", "assets/img/items/minirose/goldenrosie.jpg"],
    description: "Warm golden mini roses that capture the glow of a perfect sunset. Their rich amber and orange hues bring warmth and positivity to any occasion or space.",
    details: {
      "Flower Type": "Mini Rose",
      "Color": "Golden Sunset",
      "Stems": "24 stems",
      "Freshness": "6–8 days",
      "Occasion": "Autumn, Celebration, Warmth",
      "Fragrance": "Sweet & warm",
    }
  },

  "minirose-fairy-white": {
    title: "Fairy White Rosie Bouquet", kurdishTitle: "گولی مینی سپی پەری",
    category: "Mini Roses",
    badge: "New",
    price: "$30",
    oldPrice: "$38",
    discount: "21% Off",
    image: "assets/img/items/minirose/fairywhiterosie.jpg",
    images: ["assets/img/items/minirose/fairywhiterosie.jpg", "assets/img/items/minirose/fairywhiterosie.jpg"],
    description: "Enchanting fairy white mini roses with an ethereal, magical quality. Their pristine white petals and delicate form create a whimsical, fairy-tale aesthetic.",
    details: {
      "Flower Type": "Mini Rose",
      "Color": "Fairy White",
      "Stems": "20 stems",
      "Freshness": "5–7 days",
      "Occasion": "Wedding, Purity, Elegance",
      "Fragrance": "Clean & delicate",
    }
  }
};

// ============================================================
// ALL PRODUCTS — ONLY these 6 mini roses
// ============================================================
const allProducts = [
  { id: "minirose-crimson",      title: "Crimson Mini Rose Bouquet", kurdishTitle: "گولی مینی ڕۆز کریمسۆن",   price: "$32",  oldPrice: "$40",  image: "assets/img/items/minirose/redminirose.jpg",      image2: "assets/img/items/minirose/redminirose.jpg",      badge: "Hot",     category: "Mini Roses" },
  { id: "minirose-pinky-baby",   title: "Pinky Baby Rose Wrap", kurdishTitle: "گولی مینی پینکی منداڵ",      price: "$28",  oldPrice: "$35",  image: "assets/img/items/minirose/pinkybabyrosie.jpg",   image2: "assets/img/items/minirose/pinkybabyrosie.jpg",   badge: "New",     category: "Mini Roses" },
  { id: "minirose-pretty-pink",  title: "Pretty Pink Rosie Bunch", kurdishTitle: "گولی مینی پینکی جوان",   price: "$36",  oldPrice: "$45",  image: "assets/img/items/minirose/prettypinkyrosie.jpg", image2: "assets/img/items/minirose/prettypinkyrosie.jpg", badge: "Premium", category: "Mini Roses" },
  { id: "minirose-ocean-peach",  title: "Ocean Peach Rosie Bouquet", kurdishTitle: "گولی مینی پێچی ئۆقیانوس", price: "$34",  oldPrice: "$42",  image: "assets/img/items/minirose/oceanrosie.jpg",       image2: "assets/img/items/minirose/oceanrosie.jpg",       badge: "Hot",     category: "Mini Roses" },
  { id: "minirose-golden-sunset",title: "Golden Sunset Rosie", kurdishTitle: "گولی مینی زێڕینی غرووبی خۆر",       price: "$38",  oldPrice: "$48",  image: "assets/img/items/minirose/goldenrosie.jpg",      image2: "assets/img/items/minirose/goldenrosie.jpg",      badge: "Premium", category: "Mini Roses" },
  { id: "minirose-fairy-white",  title: "Fairy White Rosie Bouquet", kurdishTitle: "گولی مینی سپی پەری", price: "$30",  oldPrice: "$38",  image: "assets/img/items/minirose/fairywhiterosie.jpg",  image2: "assets/img/items/minirose/fairywhiterosie.jpg",  badge: "New",     category: "Mini Roses" }
];

// ============================================================
// INIT — read ?id= from URL and render page
// ============================================================
const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") || "minirose-crimson";
const flower = flowerData[currentId] || flowerData["minirose-crimson"];

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