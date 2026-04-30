// ============================================================
// LILY DATA — ONLY these 6 flowers
// ============================================================
const flowerData = {

  "lily-sunset-orange": {
    title: "Sunset Orange Tiger Lilies", kurdishTitle: "گولی لیلیی ئۆرنجی غرووبی خۆر",
    category: "Lilies",
    badge: "New",
    price: "$42",
    oldPrice: "$52",
    discount: "19% Off",
    image: "assets/img/items/lilys/lily_2.jpg",
    images: ["assets/img/items/lilys/lily_2.jpg", "assets/img/items/lilys/lily_2.jpg"],
    description: "Vibrant sunset orange tiger lilies with bold spotted petals that command attention. Their fiery beauty brings warmth and energy to any space, perfect for making a statement.",
    details: {
      "Flower Type": "Tiger Lily",
      "Color": "Sunset Orange",
      "Stems": "12 stems",
      "Freshness": "7–10 days",
      "Occasion": "Bold gifts, Autumn, Celebrations",
      "Fragrance": "Sweet & spicy",
    }
  },

  "lily-pink-galaxy": {
    title: "Pink Galaxy Stargazer Lilies", kurdishTitle: "گولی لیلیی پینکی گەلاکسی",
    category: "Lilies",
    badge: "Hot",
    price: "$40",
    oldPrice: "$50",
    discount: "20% Off",
    image: "assets/img/items/lilys/lily_4.jpg",
    images: ["assets/img/items/lilys/lily_4.jpg", "assets/img/items/lilys/lily_4.jpg"],
    description: "Stunning pink stargazer lilies with mesmerizing galaxy-like patterns. Their intoxicating fragrance and dramatic blooms make them the star of any floral arrangement.",
    details: {
      "Flower Type": "Stargazer Lily",
      "Color": "Pink & White",
      "Stems": "10 stems",
      "Freshness": "7–10 days",
      "Occasion": "Anniversary, Romance, Luxury",
      "Fragrance": "Intensely sweet",
    }
  },

  "lily-blush-pink": {
    title: "Blush Pink Bouquet Lilies", kurdishTitle: "گولی لیلیی پینکی بلاش",
    category: "Lilies",
    badge: "Premium",
    price: "$48",
    oldPrice: "$58",
    discount: "17% Off",
    image: "assets/img/items/lilys/lily_6.jpg",
    images: ["assets/img/items/lilys/lily_6.jpg", "assets/img/items/lilys/lily_6.jpg"],
    description: "Delicate blush pink lilies arranged in an elegant bouquet. Their soft, romantic hue and graceful form make them perfect for weddings, bridal showers, and tender moments.",
    details: {
      "Flower Type": "Oriental Lily",
      "Color": "Blush Pink",
      "Stems": "14 stems",
      "Freshness": "7–10 days",
      "Occasion": "Wedding, Bridal, Romance",
      "Fragrance": "Soft & romantic",
    }
  },

  "lily-white-heaven": {
    title: "White Heaven Lilies", kurdishTitle: "گولی لیلیی سپی بەهەشت",
    category: "Lilies",
    badge: "New",
    price: "$36",
    oldPrice: "$45",
    discount: "20% Off",
    image: "assets/img/items/lilys/lily_7.jpg",
    images: ["assets/img/items/lilys/lily_7.jpg", "assets/img/items/lilys/lily_7.jpg"],
    description: "Pure white lilies that embody elegance and serenity. Like a piece of heaven on earth, these pristine blooms bring peace, purity, and sophistication to any setting.",
    details: {
      "Flower Type": "Oriental Lily",
      "Color": "Pure White",
      "Stems": "12 stems",
      "Freshness": "7–10 days",
      "Occasion": "Sympathy, Wedding, Purity",
      "Fragrance": "Clean & fresh",
    }
  },

  "lily-ocean-blue": {
    title: "Ocean Blue Magic Lilies", kurdishTitle: "گولی لیلیی شینی ئۆقیانوس",
    category: "Lilies",
    badge: "Hot",
    price: "$44",
    oldPrice: "$54",
    discount: "19% Off",
    image: "assets/img/items/lilys/lily_9.jpg",
    images: ["assets/img/items/lilys/lily_9.jpg", "assets/img/items/lilys/lily_9.jpg"],
    description: "Enchanting ocean blue lilies that capture the mystery and depth of the sea. Their unique coloration makes them a captivating choice for those who dare to be different.",
    details: {
      "Flower Type": "Dyed Oriental Lily",
      "Color": "Ocean Blue",
      "Stems": "10 stems",
      "Freshness": "6–8 days",
      "Occasion": "Unique gifts, Modern decor",
      "Fragrance": "Mild & fresh",
    }
  },

  "lily-pastel-dream": {
    title: "Pastel Pink Dream Lilies", kurdishTitle: "گولی لیلیی پاستێلی پینکی خەون",
    category: "Lilies",
    badge: "Premium",
    price: "$50",
    oldPrice: "$60",
    discount: "17% Off",
    image: "assets/img/items/lilys/lily_10.jpg",
    images: ["assets/img/items/lilys/lily_10.jpg", "assets/img/items/lilys/lily_10.jpg"],
    description: "Dreamy pastel pink lilies with an ethereal, soft beauty. Their gentle color palette creates a calming, dreamy atmosphere perfect for relaxation and reflection.",
    details: {
      "Flower Type": "Oriental Lily",
      "Color": "Pastel Pink",
      "Stems": "12 stems",
      "Freshness": "7–10 days",
      "Occasion": "Spring, Home decor, Self-care",
      "Fragrance": "Delicate & soothing",
    }
  }
};

// ============================================================
// ALL PRODUCTS — ONLY these 6 lilies
// ============================================================
const allProducts = [
  { id: "lily-sunset-orange", title: "Sunset Orange Tiger Lilies", kurdishTitle: "گولی لیلیی ئۆرنجی غرووبی خۆر",      price: "$42",  oldPrice: "$52",  image: "assets/img/items/lilys/lily_2.jpg",   image2: "assets/img/items/lilys/lily_2.jpg",   badge: "New",     category: "Lilies" },
  { id: "lily-pink-galaxy",   title: "Pink Galaxy Stargazer Lilies", kurdishTitle: "گولی لیلیی پینکی گەلاکسی",    price: "$40",  oldPrice: "$50",  image: "assets/img/items/lilys/lily_4.jpg",   image2: "assets/img/items/lilys/lily_4.jpg",   badge: "Hot",     category: "Lilies" },
  { id: "lily-blush-pink",    title: "Blush Pink Bouquet Lilies", kurdishTitle: "گولی لیلیی پینکی بلاش",       price: "$48",  oldPrice: "$58",  image: "assets/img/items/lilys/lily_6.jpg",   image2: "assets/img/items/lilys/lily_6.jpg",   badge: "Premium", category: "Lilies" },
  { id: "lily-white-heaven",  title: "White Heaven Lilies", kurdishTitle: "گولی لیلیی سپی بەهەشت",             price: "$36",  oldPrice: "$45",  image: "assets/img/items/lilys/lily_7.jpg",   image2: "assets/img/items/lilys/lily_7.jpg",   badge: "New",     category: "Lilies" },
  { id: "lily-ocean-blue",    title: "Ocean Blue Magic Lilies", kurdishTitle: "گولی لیلیی شینی ئۆقیانوس",         price: "$44",  oldPrice: "$54",  image: "assets/img/items/lilys/lily_9.jpg",   image2: "assets/img/items/lilys/lily_9.jpg",   badge: "Hot",     category: "Lilies" },
  { id: "lily-pastel-dream",  title: "Pastel Pink Dream Lilies", kurdishTitle: "گولی لیلیی پاستێلی پینکی خەون",        price: "$50",  oldPrice: "$60",  image: "assets/img/items/lilys/lily_10.jpg",  image2: "assets/img/items/lilys/lily_10.jpg",  badge: "Premium", category: "Lilies" }
];

// ============================================================
// INIT — read ?id= from URL and render page
// ============================================================
const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") || "lily-sunset-orange";
const flower = flowerData[currentId] || flowerData["lily-sunset-orange"];

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
if (infoTable) {  // Add this check
  let tableHTML = '<table class="flower-info-table"><tbody>';
  for (const [key, val] of Object.entries(flower.details)) {
    tableHTML += `<tr><td class="info-key">${key}</td><td class="info-val">${val}</td></tr>`;
  }
  tableHTML += '</tbody></table>';
  infoTable.innerHTML = tableHTML;
}
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