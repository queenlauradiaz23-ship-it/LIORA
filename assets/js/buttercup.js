// ============================================================
// BUTTERCUP DATA — ONLY these 5 flowers
// ============================================================
const flowerData = {

  "buttercup-golden": {
    title: "Golden Buttercup Bouquet", kurdishTitle: "گولی باتەرکاپ زێڕین",
    category: "Buttercup",
    badge: "Hot",
    price: "$25",
    oldPrice: "$32",
    discount: "22% Off",
    image: "assets/img/items/buttercup/buttercup.jpg",
    images: ["assets/img/items/buttercup/buttercup.jpg", "assets/img/items/buttercup/buttercup.jpg"],
    description: "Radiant golden buttercups arranged in a fresh bouquet that brings sunshine and joy to any moment. Their bright yellow petals symbolize happiness and new beginnings.",
    details: {
      "Flower Type": "Buttercup",
      "Color": "Golden Yellow",
      "Stems": "20 stems",
      "Freshness": "5–7 days",
      "Occasion": "Birthday, Cheer-up, Everyday joy",
      "Fragrance": "Light & fresh",
    }
  },

  "buttercup-cream": {
    title: "Cream & Gold Buttercup Wrap", kurdishTitle: "گولی باتەرکاپ کریم و زێڕ",
    category: "Buttercup",
    badge: "New",
    price: "$28",
    oldPrice: "$35",
    discount: "20% Off",
    image: "assets/img/items/buttercup/buttercup6.jpg",
    images: ["assets/img/items/buttercup/buttercup6.jpg", "assets/img/items/buttercup/buttercup6.jpg"],
    description: "Elegant cream and gold buttercup wrap featuring soft cream petals with golden accents. Sophisticated and luxurious — perfect for special celebrations.",
    details: {
      "Flower Type": "Buttercup",
      "Color": "Cream & Gold",
      "Stems": "18 stems",
      "Freshness": "6–8 days",
      "Occasion": "Anniversary, Elegant events",
      "Fragrance": "Delicate & sweet",
    }
  },

  "buttercup-modern": {
    title: "Modern Buttercup Arrangement", kurdishTitle: "گولی باتەرکاپ مۆدێرن",
    category: "Buttercup",
    badge: "Hot",
    price: "$38",
    oldPrice: "$48",
    discount: "21% Off",
    image: "assets/img/items/buttercup/modernbuttercup.jpg",
    images: ["assets/img/items/buttercup/modernbuttercup.jpg", "assets/img/items/buttercup/modernbuttercup.jpg"],
    description: "Contemporary modern buttercup arrangement with stylish presentation. A fresh take on classic beauty, ideal for modern homes and contemporary tastes.",
    details: {
      "Flower Type": "Buttercup",
      "Color": "Bright Yellow",
      "Stems": "25 stems",
      "Freshness": "5–7 days",
      "Occasion": "Home decor, Modern gifts",
      "Fragrance": "Fresh",
    }
  },

  "buttercup-sunset": {
    title: "Sunset Orange Buttercup", kurdishTitle: "گولی باتەرکاپ ئۆرنجی غرووب",
    category: "Buttercup",
    badge: "New",
    price: "$32",
    oldPrice: "$40",
    discount: "20% Off",
    image: "assets/img/items/buttercup/orangebuttercup.jpg",
    images: ["assets/img/items/buttercup/orangebuttercup.jpg", "assets/img/items/buttercup/orangebuttercup.jpg"],
    description: "Warm sunset orange buttercups that capture the beauty of a glowing evening sky. Bold and vibrant — perfect for those who love energetic arrangements.",
    details: {
      "Flower Type": "Buttercup",
      "Color": "Sunset Orange",
      "Stems": "22 stems",
      "Freshness": "5–7 days",
      "Occasion": "Any occasion, Bold gifts",
      "Fragrance": "Mild & fresh",
    }
  },

  "buttercup-rosy": {
    title: "Rosy Pink Buttercup Bundle", kurdishTitle: "گولی باتەرکاپ پینکی ڕۆزی",
    category: "Buttercup",
    badge: "-20%",
    price: "$27",
    oldPrice: "$34",
    discount: "21% Off",
    image: "assets/img/items/buttercup/pinkbuttercup.jpg",
    images: ["assets/img/items/buttercup/pinkbuttercup.jpg", "assets/img/items/buttercup/pinkbuttercup.jpg"],
    description: "Soft rosy pink buttercups bundled together for a romantic and gentle touch. Beautiful for feminine gifts, spring celebrations, and sweet surprises.",
    details: {
      "Flower Type": "Buttercup",
      "Color": "Rosy Pink",
      "Stems": "20 stems",
      "Freshness": "6–8 days",
      "Occasion": "Valentine, Birthday, Spring",
      "Fragrance": "Gentle & floral",
    }
  }
};

// ============================================================
// ALL PRODUCTS — ONLY these 5 buttercups
// ============================================================
const allProducts = [
  { id: "buttercup-golden", title: "Golden Buttercup Bouquet", kurdishTitle: "گولی باتەرکاپ زێڕین",    price: "$25",  oldPrice: "$32",  image: "assets/img/items/buttercup/buttercup.jpg",    image2: "assets/img/items/buttercup/buttercup.jpg",    badge: "Hot",     category: "Buttercup" },
  { id: "buttercup-cream",  title: "Cream & Gold Buttercup Wrap", kurdishTitle: "گولی باتەرکاپ کریم و زێڕ", price: "$28",  oldPrice: "$35",  image: "assets/img/items/buttercup/buttercup6.jpg",   image2: "assets/img/items/buttercup/buttercup6.jpg",   badge: "New",     category: "Buttercup" },
  { id: "buttercup-modern", title: "Modern Buttercup Arrangement", kurdishTitle: "گولی باتەرکاپ مۆدێرن",price: "$38",  oldPrice: "$48",  image: "assets/img/items/buttercup/modernbuttercup.jpg",image2: "assets/img/items/buttercup/modernbuttercup.jpg",badge: "Hot",     category: "Buttercup" },
  { id: "buttercup-sunset", title: "Sunset Orange Buttercup", kurdishTitle: "گولی باتەرکاپ ئۆرنجی غرووب",     price: "$32",  oldPrice: "$40",  image: "assets/img/items/buttercup/orangebuttercup.jpg", image2: "assets/img/items/buttercup/orangebuttercup.jpg", badge: "New",     category: "Buttercup" },
  { id: "buttercup-rosy",   title: "Rosy Pink Buttercup Bundle", kurdishTitle: "گولی باتەرکاپ پینکی ڕۆزی",  price: "$27",  oldPrice: "$34",  image: "assets/img/items/buttercup/pinkbuttercup.jpg",   image2: "assets/img/items/buttercup/pinkbuttercup.jpg",   badge: "-20%",    category: "Buttercup" }
];

// ============================================================
// INIT — read ?id= from URL and render page
// ============================================================
const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") || "buttercup-golden";
const flower = flowerData[currentId] || flowerData["buttercup-golden"];

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
// ====================== AUTO INJECT REVIEWS SECTION ======================
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for the main content to load
    setTimeout(() => {
        const mainContent = document.querySelector('.detail__content') || 
                           document.querySelector('main') || 
                           document.getElementById('detail-page');

        if (!mainContent) return;

        const reviewsHTML = `
            <!--=============== REVIEWS ===============-->
            <section class="reviews-section container section--lg">
              <h3 class="section__title"><span>Customer</span> Reviews</h3>

              <!-- Write a Review Box -->
              <div class="review-box">
                <h4>💌 Write a Review</h4>
                
                <div class="star-rating-input" id="star-rating-input">
                  <span data-value="1">★</span>
                  <span data-value="2">★</span>
                  <span data-value="3">★</span>
                  <span data-value="4">★</span>
                  <span data-value="5">★</span>
                </div>

                <textarea 
                  id="review-text" 
                  class="review-textarea" 
                  placeholder="Tell us how you loved your flowers... 🌸"
                ></textarea>

                <button class="review-submit-btn" onclick="submitReview()">
                  Post Review 🌷
                </button>
              </div>

              <!-- Reviews List -->
              <div class="reviews-list" id="reviews-list">
                <!-- Reviews injected here by JS -->
              </div>
            </section>
        `;

        mainContent.insertAdjacentHTML('beforeend', reviewsHTML);

        // Re-initialize stars and load reviews after injection
        initStars();
        loadReviews();
    }, 800); // Small delay to ensure DOM is ready
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