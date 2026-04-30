// ============================================================
// ROSE DATA — ONLY these 8 flowers
// ============================================================
const flowerData = {

  "rose-blue-sapphire": {
    title: "Blue Sapphire Roses", kurdishTitle: "گولی سەفیر شین",
    category: "Roses",
    badge: "Premium",
    price: "$42",
    oldPrice: "$50",
    discount: "16% Off",
    image: "assets/img/items/roses/rose_1.jpg",
    images: ["assets/img/items/roses/rose_1.jpg", "assets/img/items/roses/rose_1.jpg"],
    description: "Stunning blue sapphire roses with a rare and captivating hue. These exotic blooms bring a touch of mystery and elegance to any occasion, perfect for those who appreciate the extraordinary.",
    details: {
      "Flower Type": "Rose",
      "Color": "Blue Sapphire",
      "Stems": "12 stems",
      "Freshness": "7–10 days",
      "Occasion": "Luxury gifts, Anniversaries, Special moments",
      "Fragrance": "Rich & romantic",
    }
  },

  "rose-rainbow-romance": {
    title: "Rainbow Romance Roses", kurdishTitle: "گولی ڕەنگاو ڕۆمانس",
    category: "Roses",
    badge: "New",
    price: "$48",
    oldPrice: "$55",
    discount: "13% Off",
    image: "assets/img/items/roses/rose_2.jpg",
    images: ["assets/img/items/roses/rose_2.jpg", "assets/img/items/roses/rose_2.jpg"],
    description: "Vibrant rainbow romance roses featuring a mesmerizing blend of colors. Each petal tells a story of love and joy, making this bouquet a truly unforgettable gift.",
    details: {
      "Flower Type": "Rose",
      "Color": "Rainbow Mix",
      "Stems": "15 stems",
      "Freshness": "6–8 days",
      "Occasion": "Birthday, Celebration, Just Because",
      "Fragrance": "Sweet & vibrant",
    }
  },

  "rose-golden-sunshine": {
    title: "Golden Sunshine Roses", kurdishTitle: "گولی زێڕینی خۆر",
    category: "Roses",
    badge: "Hot",
    price: "$35",
    oldPrice: "$42",
    discount: "17% Off",
    image: "assets/img/items/roses/rose_3.jpg",
    images: ["assets/img/items/roses/rose_3.jpg", "assets/img/items/roses/rose_3.jpg"],
    description: "Bright golden sunshine roses that radiate warmth and happiness. Their cheerful yellow petals are like capturing sunlight in a bouquet — perfect for lifting spirits and spreading joy.",
    details: {
      "Flower Type": "Rose",
      "Color": "Golden Yellow",
      "Stems": "18 stems",
      "Freshness": "6–8 days",
      "Occasion": "Cheer-up, Friendship, Everyday",
      "Fragrance": "Fresh & bright",
    }
  },

  "rose-ruby-red": {
    title: "Ruby Red Romance", kurdishTitle: "گولی ڕوبی سوور ڕۆمانس",
    category: "Roses",
    badge: "-15%",
    price: "$45",
    oldPrice: "$55",
    discount: "18% Off",
    image: "assets/img/items/roses/rose_5.jpg",
    images: ["assets/img/items/roses/rose_5.jpg", "assets/img/items/roses/rose_5.jpg"],
    description: "Deep ruby red roses that embody passion and timeless romance. Their velvety petals and rich color make them the ultimate expression of love and devotion.",
    details: {
      "Flower Type": "Rose",
      "Color": "Ruby Red",
      "Stems": "20 stems",
      "Freshness": "7–10 days",
      "Occasion": "Valentine, Anniversary, Romance",
      "Fragrance": "Classic & sweet",
    }
  },

  "rose-peach-paradise": {
    title: "Peach Paradise Roses", kurdishTitle: "گولی پێچ پارادایز",
    category: "Roses",
    badge: "Premium",
    price: "$38",
    oldPrice: "$45",
    discount: "16% Off",
    image: "assets/img/items/roses/rose_6.jpg",
    images: ["assets/img/items/roses/rose_6.jpg", "assets/img/items/roses/rose_6.jpg"],
    description: "Soft peach paradise roses with a delicate, dreamy hue. Their gentle color and elegant form create a sophisticated bouquet perfect for refined tastes and special celebrations.",
    details: {
      "Flower Type": "Rose",
      "Color": "Peach",
      "Stems": "16 stems",
      "Freshness": "6–8 days",
      "Occasion": "Elegant events, Thank you, Spring",
      "Fragrance": "Delicate & floral",
    }
  },

  "rose-blush-pink": {
    title: "Blush Pink Dream", kurdishTitle: "گولی پینکی بلاش درێم",
    category: "Roses",
    badge: "Hot",
    price: "$40",
    oldPrice: "$48",
    discount: "17% Off",
    image: "assets/img/items/roses/rose_7.jpg",
    images: ["assets/img/items/roses/rose_7.jpg", "assets/img/items/roses/rose_7.jpg"],
    description: "Romantic blush pink roses that capture the softness of a dream. Their tender hue and delicate beauty make them ideal for expressing gentle affection and sweet sentiments.",
    details: {
      "Flower Type": "Rose",
      "Color": "Blush Pink",
      "Stems": "18 stems",
      "Freshness": "6–8 days",
      "Occasion": "Romance, Birthday, New Baby",
      "Fragrance": "Soft & romantic",
    }
  },

  "rose-pure-white": {
    title: "Pure White Elegance", kurdishTitle: "گولی سپی پاک و جوان",
    category: "Roses",
    badge: "Premium",
    price: "$52",
    oldPrice: "$60",
    discount: "13% Off",
    image: "assets/img/items/roses/rose_9.jpg",
    images: ["assets/img/items/roses/rose_9.jpg", "assets/img/items/roses/rose_9.jpg"],
    description: "Impeccable pure white roses representing purity, innocence, and elegance. Their pristine beauty and classic appeal make them a timeless choice for weddings and sophisticated occasions.",
    details: {
      "Flower Type": "Rose",
      "Color": "Pure White",
      "Stems": "20 stems",
      "Freshness": "7–10 days",
      "Occasion": "Wedding, Sympathy, Purity",
      "Fragrance": "Clean & elegant",
    }
  },

  "rose-soft-pink": {
    title: "Soft Pink Ribbon Roses", kurdishTitle: "گولی پینکی نەرم و ڕیبۆن",
    category: "Roses",
    badge: "-20%",
    price: "$36",
    oldPrice: "$45",
    discount: "20% Off",
    image: "assets/img/items/roses/rose_10.jpg",
    images: ["assets/img/items/roses/rose_10.jpg", "assets/img/items/roses/rose_10.jpg"],
    description: "Charming soft pink roses wrapped with delicate ribbon. Their sweet presentation and lovely color make them a delightful gift for any occasion that calls for a touch of femininity and grace.",
    details: {
      "Flower Type": "Rose",
      "Color": "Soft Pink",
      "Stems": "15 stems",
      "Freshness": "6–8 days",
      "Occasion": "Gift, Spring, Friendship",
      "Fragrance": "Light & sweet",
    }
  }
};

// ============================================================
// ALL PRODUCTS — ONLY these 8 roses
// ============================================================
const allProducts = [
  { id: "rose-blue-sapphire",  title: "Blue Sapphire Roses", kurdishTitle: "گولی سەفیر شین",         price: "$42",  oldPrice: "$50",  image: "assets/img/items/roses/rose_1.jpg",  image2: "assets/img/items/roses/rose_1.jpg",  badge: "Premium", category: "Roses" },
  { id: "rose-rainbow-romance",title: "Rainbow Romance Roses", kurdishTitle: "گولی ڕەنگاو ڕۆمانس",       price: "$48",  oldPrice: "$55",  image: "assets/img/items/roses/rose_2.jpg",  image2: "assets/img/items/roses/rose_2.jpg",  badge: "New",     category: "Roses" },
  { id: "rose-golden-sunshine",title: "Golden Sunshine Roses", kurdishTitle: "گولی زێڕینی خۆر",       price: "$35",  oldPrice: "$42",  image: "assets/img/items/roses/rose_3.jpg",  image2: "assets/img/items/roses/rose_3.jpg",  badge: "Hot",     category: "Roses" },
  { id: "rose-ruby-red",       title: "Ruby Red Romance", kurdishTitle: "گولی ڕوبی سوور ڕۆمانس",            price: "$45",  oldPrice: "$55",  image: "assets/img/items/roses/rose_5.jpg",  image2: "assets/img/items/roses/rose_5.jpg",  badge: "-15%",    category: "Roses" },
  { id: "rose-peach-paradise", title: "Peach Paradise Roses", kurdishTitle: "گولی پێچ پارادایز",        price: "$38",  oldPrice: "$45",  image: "assets/img/items/roses/rose_6.jpg",  image2: "assets/img/items/roses/rose_6.jpg",  badge: "Premium", category: "Roses" },
  { id: "rose-blush-pink",     title: "Blush Pink Dream", kurdishTitle: "گولی پینکی بلاش درێم",            price: "$40",  oldPrice: "$48",  image: "assets/img/items/roses/rose_7.jpg",  image2: "assets/img/items/roses/rose_7.jpg",  badge: "Hot",     category: "Roses" },
  { id: "rose-pure-white",     title: "Pure White Elegance", kurdishTitle: "گولی سپی پاک و جوان",         price: "$52",  oldPrice: "$60",  image: "assets/img/items/roses/rose_9.jpg",  image2: "assets/img/items/roses/rose_9.jpg",  badge: "Premium", category: "Roses" },
  { id: "rose-soft-pink",      title: "Soft Pink Ribbon Roses", kurdishTitle: "گولی پینکی نەرم و ڕیبۆن",      price: "$36",  oldPrice: "$45",  image: "assets/img/items/roses/rose_10.jpg", image2: "assets/img/items/roses/rose_10.jpg", badge: "-20%",    category: "Roses" }
];

// ============================================================
// INIT — read ?id= from URL and render page
// ============================================================
const params = new URLSearchParams(window.location.search);
const currentId = params.get("id") || "rose-blue-sapphire";
const flower = flowerData[currentId] || flowerData["rose-blue-sapphire"];

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
initStars();
loadReviews();

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