// ============================================================
// BEAR + CHOCOLATE — SINGLE IMAGE + BEAUTIFUL DETAIL BOX
// Updated: Chocolates now clean (no Category / no Type)
// ============================================================

const flowerData = {
  // BEARS
  "bear_1": { title: "Soft Classic Teddy Bear", category: "Gifts", badge: "Cute", price: "$45", oldPrice: "$55", discount: "18% Off", image: "assets/img/items/bear/bear_1.jpg", description: "Soft and adorable teddy bear perfect for romantic gifts.", details: { "Type": "Teddy Bear", "Color": "Beige", "Size": "Medium", "Occasion": "Valentine, Birthday", "Material": "Plush" } },
  "bear_2": { title: "Elegant Pink Dress Bear", category: "Gifts", badge: "Lovely", price: "$52", oldPrice: "$65", discount: "20% Off", image: "assets/img/items/bear/bear_2.jpg", description: "Elegant teddy bear with a cute pink dress.", details: { "Type": "Teddy Bear", "Color": "Pink", "Size": "Medium", "Occasion": "Romantic", "Material": "Plush" } },
  "bear_3": { title: "Mini Cute Bear", category: "Gifts", badge: "Mini", price: "$38", oldPrice: "$45", discount: "15% Off", image: "assets/img/items/bear/bear_3.jpg", description: "Small adorable teddy bear gift.", details: { "Type": "Mini Bear", "Size": "Small", "Occasion": "Gift Add-on" } },
  "bear_6": { title: "Pink Love Bear", category: "Gifts", badge: "Sweet", price: "$55", oldPrice: "$70", discount: "22% Off", image: "assets/img/items/bear/bear_6.jpg", description: "Perfect pink teddy for love occasions.", details: { "Color": "Pink", "Occasion": "Valentine" } },
  "bear_7": { title: "Classic Brown Bear", category: "Gifts", badge: "Classic", price: "$49", oldPrice: "$60", discount: "18% Off", image: "assets/img/items/bear/bear_7.jpg", description: "Classic teddy bear everyone loves.", details: { "Color": "Brown", "Occasion": "All" } },

  // CHOCOLATES
  "chocolate_1": { title: "Luxury Chocolate Box", category: "Chocolates", badge: "Sweet", price: "$48", oldPrice: "$60", discount: "20% Off", image: "assets/img/items/chocolate/chocolate_1.jpg", description: "Premium chocolate selection.", details: { "Type": "Chocolate Box" } },
  "chocolate_2": { title: "Heart Chocolate Box", category: "Chocolates", badge: "Romantic", price: "$52", oldPrice: "$65", discount: "20% Off", image: "assets/img/items/chocolate/chocolate_2.jpg", description: "Heart-shaped romantic chocolate set.", details: { "Shape": "Heart" } },
  "chocolate_3": { title: "Strawberry Chocolate Set", category: "Chocolates", badge: "Love", price: "$60", oldPrice: "$75", discount: "20% Off", image: "assets/img/items/chocolate/chocolate_3.jpg", description: "Chocolate-covered strawberries set.", details: { "Flavor": "Strawberry" } },
  "chocolate_4": { title: "Premium Chocolate Collection", category: "Chocolates", badge: "Sweet Box", price: "$55", oldPrice: "$70", discount: "21% Off", image: "assets/img/items/chocolate/chocolate_4.jpg", description: "Mixed premium chocolate collection.", details: { "Type": "Assorted" } },
  "chocolate_5": { title: "Luxury Valentine Chocolate", category: "Chocolates", badge: "Luxury", price: "$58", oldPrice: "$72", discount: "19% Off", image: "assets/img/items/chocolate/chocolate_5.jpg", description: "Luxury chocolate gift for Valentine.", details: { "Occasion": "Valentine" } }
};

// Helper for thumbnail (kept for future use)
function changeMainImage(thumb) {
  document.getElementById("detail-img-main").src = thumb.src;
  document.querySelectorAll('.details__thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// Load product
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = flowerData[id];

if (product) {
  // Basic info
  document.getElementById("detail-title").textContent = product.title;
  document.getElementById("detail-price").textContent = product.price;
  document.getElementById("detail-old-price").textContent = product.oldPrice || "";
  document.getElementById("detail-discount").textContent = product.discount || "";
  document.getElementById("detail-description").textContent = product.description;
  document.getElementById("detail-img-main").src = product.image;
  document.getElementById("detail-badge").textContent = product.badge || "Gift";
  document.getElementById("breadcrumb-name").textContent = product.title;

  // Single image mode (no thumbnails)
  const thumbsContainer = document.getElementById("detail-thumbnails");
  if (thumbsContainer) thumbsContainer.style.display = "none";

  // === BEAUTIFUL DETAIL BOX (bears full, chocolates cleaned) ===
  const tableContainer = document.getElementById("detail-info-table");
  if (tableContainer && product.details) {
    let rows = [];

    // Only show Category for bears/gifts
    if (product.category !== "Chocolates") {
      rows.push(`<tr><th>Category</th><td>${product.category}</td></tr>`);
    }

    // Add other details, but skip "Type" for chocolates
    Object.entries(product.details).forEach(([key, value]) => {
      if (product.category === "Chocolates" && key.toLowerCase() === "type") return;
      rows.push(`<tr><th>${key}</th><td>${value}</td></tr>`);
    });

    // Only render the box if there is something to show
    if (rows.length > 0) {
      const html = `
        <div class="detail-box">
          <table class="details__table gift-table">
            ${rows.join('')}
          </table>
        </div>`;
      tableContainer.innerHTML = html;
    } else {
      tableContainer.innerHTML = ""; // clean look for simple chocolates
    }
  }
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
  if (relatedContainer) {
    relatedContainer.innerHTML = `
      <div class="product__item">
        <div class="product__banner">
          <a href="giftdetail.html?id=bear_2" class="product__images">
            <img src="assets/img/items/bear/bear_2.jpg" class="product__img default">
            <img src="assets/img/items/bear/bear_2.jpg" class="product__img hover">
          </a>
          <div class="product__badge light-pink">Valentine</div>
        </div>
        <div class="product__content">
          <span class="product__category">Gifts</span>
          <h3 class="product__title">Elegant Pink Dress Bear</h3>
          <div class="product__price flex"><span class="new__price">$52</span></div>
        </div>
      </div>
      <div class="product__item">
        <div class="product__banner">
          <a href="giftdetail.html?id=chocolate_2" class="product__images">
            <img src="assets/img/items/chocolate/chocolate_2.jpg" class="product__img default">
            <img src="assets/img/items/chocolate/chocolate_2.jpg" class="product__img hover">
          </a>
          <div class="product__badge light-orange">Romantic</div>
        </div>
        <div class="product__content">
          <span class="product__category">Chocolates</span>
          <h3 class="product__title">Heart Chocolate Box</h3>
          <div class="product__price flex"><span class="new__price">$52</span></div>
        </div>
      </div>
      <div class="product__item">
        <div class="product__banner">
          <a href="giftdetail.html?id=bear_6" class="product__images">
            <img src="assets/img/items/bear/bear_6.jpg" class="product__img default">
            <img src="assets/img/items/bear/bear_6.jpg" class="product__img hover">
          </a>
          <div class="product__badge light-pink">Sweet</div>
        </div>
        <div class="product__content">
          <span class="product__category">Gifts</span>
          <h3 class="product__title">Pink Love Bear</h3>
          <div class="product__price flex"><span class="new__price">$55</span></div>
        </div>
      </div>
      <div class="product__item">
        <div class="product__banner">
          <a href="giftdetail.html?id=chocolate_3" class="product__images">
            <img src="assets/img/items/chocolate/chocolate_3.jpg" class="product__img default">
            <img src="assets/img/items/chocolate/chocolate_3.jpg" class="product__img hover">
          </a>
          <div class="product__badge light-orange">Love</div>
        </div>
        <div class="product__content">
          <span class="product__category">Chocolates</span>
          <h3 class="product__title">Strawberry Chocolate Set</h3>
          <div class="product__price flex"><span class="new__price">$60</span></div>
        </div>
      </div>`;
  }
}