// ============================================================
// DAISY DATA — ONLY these 6 flowers
// ============================================================
const flowerData = {

  "daisy-golden": {
    title: "Golden Daisy Sunshine", kurdishTitle: "گولی دەیزی زێڕینی خۆر",
    category: "Daisies",
    badge: "Hot",
    price: "$34",
    oldPrice: "$42",
    discount: "19% Off",
    image: "assets/img/items/daisies/beautifuldaisy.jpg",
    images: ["assets/img/items/daisies/beautifuldaisy.jpg", "assets/img/items/daisies/beautifuldaisy.jpg"],
    description: "Bright and cheerful golden daisies that radiate warmth and happiness. Perfect for bringing sunshine into any room and lifting spirits on any day.",
    details: {
      "Flower Type": "Daisy",
      "Color": "Golden Yellow",
      "Stems": "18 stems",
      "Freshness": "5–7 days",
      "Occasion": "Birthday, Cheer-up, Get Well",
      "Fragrance": "Light & fresh",
    }
  },

  "daisy-pure-white": {
    title: "Pure White Daisy Bloom", kurdishTitle: "گولی دەیزی سپی پاک",
    category: "Daisies",
    badge: "New",
    price: "$36",
    oldPrice: "$45",
    discount: "20% Off",
    image: "assets/img/items/daisies/daisies.jpg",
    images: ["assets/img/items/daisies/daisies.jpg", "assets/img/items/daisies/daisies.jpg"],
    description: "Elegant pure white daisies symbolizing innocence and purity. A timeless classic that brings calm and serenity to any space or celebration.",
    details: {
      "Flower Type": "Daisy",
      "Color": "Pure White",
      "Stems": "20 stems",
      "Freshness": "6–8 days",
      "Occasion": "Wedding, Sympathy, New Baby",
      "Fragrance": "Delicate & clean",
    }
  },

  "daisy-soft-charm": {
    title: "Soft Daisy Charm", kurdishTitle: "گولی دەیزی نەرم و جوانی",
    category: "Daisies",
    badge: "Premium",
    price: "$38",
    oldPrice: "$48",
    discount: "21% Off",
    image: "assets/img/items/daisies/daisy.jpg",
    images: ["assets/img/items/daisies/daisy.jpg", "assets/img/items/daisies/daisy.jpg"],
    description: "Delicate soft daisies with a gentle charm that captures hearts. Their subtle beauty makes them perfect for intimate gatherings and thoughtful gestures.",
    details: {
      "Flower Type": "Daisy",
      "Color": "Soft White & Yellow",
      "Stems": "22 stems",
      "Freshness": "6–8 days",
      "Occasion": "Anniversary, Romantic, Home decor",
      "Fragrance": "Gentle & sweet",
    }
  },

  "daisy-blue-magic": {
    title: "Blue Daisy Magic", kurdishTitle: "گولی دەیزی شینی جادوویی",
    category: "Daisies",
    badge: "Premium",
    price: "$40",
    oldPrice: "$49",
    discount: "18% Off",
    image: "assets/img/items/daisies/prettybluedaisy.jpg",
    images: ["assets/img/items/daisies/prettybluedaisy.jpg", "assets/img/items/daisies/prettybluedaisy.jpg"],
    description: "Enchanting blue daisies that bring a touch of magic and wonder. Their unique color makes them a standout choice for those who love something different.",
    details: {
      "Flower Type": "Daisy",
      "Color": "Sky Blue & White",
      "Stems": "20 stems",
      "Freshness": "5–7 days",
      "Occasion": "Unique gifts, Modern decor",
      "Fragrance": "Mild & fresh",
    }
  },

  "daisy-rosy-garden": {
    title: "Rosy Daisy Garden", kurdishTitle: "گولی دەیزی ڕۆزی باخچە",
    category: "Daisies",
    badge: "New",
    price: "$37",
    oldPrice: "$46",
    discount: "20% Off",
    image: "assets/img/items/daisies/rosiedaisie.jpg",
    images: ["assets/img/items/daisies/rosiedaisie.jpg", "assets/img/items/daisies/rosiedaisie.jpg"],
    description: "A beautiful garden-inspired mix of rosy daisies with hints of pink. Like walking through a blooming garden, this bouquet brings nature's beauty indoors.",
    details: {
      "Flower Type": "Daisy",
      "Color": "Rosy Pink & White",
      "Stems": "24 stems",
      "Freshness": "6–8 days",
      "Occasion": "Spring, Mother's Day, Garden party",
      "Fragrance": "Floral & fresh",
    }
  },

  "daisy-simple-white": {
    title: "Simple White Daisy Wrap", kurdishTitle: "گولی دەیزی سپی سادە",
    category: "Daisies",
    badge: "Hot",
    price: "$32",
    oldPrice: "$40",
    discount: "20% Off",
    image: "assets/img/items/daisies/whitedaisy.jpg",
    images: ["assets/img/items/daisies/whitedaisy.jpg", "assets/img/items/daisies/whitedaisy.jpg"],
    description: "Simply elegant white daisies wrapped beautifully for a clean and minimalist look. Perfect for those who appreciate understated beauty and classic style.",
    details: {
      "Flower Type": "Daisy",
      "Color": "Crisp White",
      "Stems": "16 stems",
      "Freshness": "5–7 days",
      "Occasion": "Everyday, Minimalist, Thank you",
      "Fragrance": "Light & airy",
    }
  }
};

// ============================================================
// ALL PRODUCTS — ONLY these 6 daisies
// ============================================================
const allProducts = [
  { id: "daisy-golden",      title: "Golden Daisy Sunshine", kurdishTitle: "گولی دەیزی زێڕینی خۆر",      price: "$34",  oldPrice: "$42",  image: "assets/img/items/daisies/beautifuldaisy.jpg",    image2: "assets/img/items/daisies/beautifuldaisy.jpg",    badge: "Hot",     category: "Daisies" },
  { id: "daisy-pure-white",  title: "Pure White Daisy Bloom", kurdishTitle: "گولی دەیزی سپی پاک",     price: "$36",  oldPrice: "$45",  image: "assets/img/items/daisies/daisies.jpg",           image2: "assets/img/items/daisies/daisies.jpg",           badge: "New",     category: "Daisies" },
  { id: "daisy-soft-charm",  title: "Soft Daisy Charm", kurdishTitle: "گولی دەیزی نەرم و جوانی",           price: "$38",  oldPrice: "$48",  image: "assets/img/items/daisies/daisy.jpg",             image2: "assets/img/items/daisies/daisy.jpg",             badge: "Premium", category: "Daisies" },
  { id: "daisy-blue-magic",  title: "Blue Daisy Magic", kurdishTitle: "گولی دەیزی شینی جادوویی",           price: "$40",  oldPrice: "$49",  image: "assets/img/items/daisies/prettybluedaisy.jpg",   image2: "assets/img/items/daisies/prettybluedaisy.jpg",   badge: "Premium", category: "Daisies" },
  { id: "daisy-rosy-garden", title: "Rosy Daisy Garden", kurdishTitle: "گولی دەیزی ڕۆزی باخچە",          price: "$37",  oldPrice: "$46",  image: "assets/img/items/daisies/rosiedaisie.jpg",       image2: "assets/img/items/daisies/rosiedaisie.jpg",       badge: "New",     category: "Daisies" },
  { id: "daisy-simple-white",title: "Simple White Daisy Wrap", kurdishTitle: "گولی دەیزی سپی سادە",    price: "$32",  oldPrice: "$40",  image: "assets/img/items/daisies/whitedaisy.jpg",        image2: "assets/img/items/daisies/whitedaisy.jpg",        badge: "Hot",     category: "Daisies" }
];

// ============================================================
// INIT — read ?id= from URL and render page
// ============================================================
const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") || "daisy-golden";
const flower = flowerData[currentId] || flowerData["daisy-golden"];

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