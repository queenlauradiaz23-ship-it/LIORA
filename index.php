<?php
$page_title = 'Liora — Modern Online Flower Shopping';
require_once 'includes/header.php';
?>

  <!--=============== MAIN ===============-->
  <main class="main">
    <!--=============== HOME ===============-->
    <section class="home hero-home">
      <div class="hero-home__container container">

        <div class="hero-home__content">
          <h1 class="hero-home__title">LIORA</h1>
          <p class="hero-home__description">
            Discover beautiful bouquets you can order online and schedule for delivery
            on any date you choose, perfect for birthdays, anniversaries, and every
            special moment in between. Browse a wide collection of fresh, handpicked
            flowers and personalize your order with ease. Not sure what to choose?
            Our smart AI assistant is here to guide you to the perfect arrangement in seconds.
          </p>

          <a href="flower.php" class="hero-home__btn">Shop Now</a>
        </div>

        <div class="hero-home__image"></div>

      </div>
    </section>
    <!--=============== populer flowers ===============-->
    <section class="categories container section">
      <div class="categories__container swiper">
        <div class="swiper-wrapper">
          <a href="rose.php" class="category__item swiper-slide">
            <img src="assets/img/items/roses/rose_1.jpg" alt="" class="category__img" />
            <h3 class="category__title">Roses</h3>
          </a>
          <a href="tulip.php" class="category__item swiper-slide">
            <img src="assets/img/items/tulips/tulip_8.jpg" alt="" class="category__img" />
            <h3 class="category__title">Tulips</h3>
          </a>
          <a href="minirose.php" class="category__item swiper-slide">
            <img src="assets/img/items/minirose/oceanrosie.jpg" alt="" class="category__img" />
            <h3 class="category__title">MiniRose</h3>
          </a>
          <a href="orchids.php" class="category__item swiper-slide">
            <img src="assets/img/items/orchids/orchid_5.jpg" alt="" class="category__img" />
            <h3 class="category__title">Orchids</h3>
          </a>
          <a href="mixed_flower.php" class="category__item swiper-slide">
            <img src="assets/img/items/mixed/mixed_1.jpg" alt="" class="category__img" />
            <h3 class="category__title">Mixed Flowers</h3>
          </a>
          <a href="sunflower.php" class="category__item swiper-slide">
            <img src="assets/img/items/sunflowers/sunflower_2.jpg" alt="" class="category__img" />
            <h3 class="category__title">Sunflowers </h3>
          </a>
          <a href="lily.php" class="category__item swiper-slide">
            <img src="assets/img/items/lilys/lily_10.jpg" alt="" class="category__img" />
            <h3 class="category__title">Lilies</h3>
          </a>
          <a href="daisies.php" class="category__item swiper-slide">
            <img src="assets/img/items/daisies/daisy.jpg" alt="" class="category__img" />
            <h3 class="category__title">Daisies</h3>
          </a>
          <a href="daffodils.php" class="category__item swiper-slide">
            <img src="assets/img/items/daffodils/daffoldilsss.jpg" alt="" class="category__img" />
            <h3 class="category__title">daffodils</h3>
          </a>
          <a href="buttercup.php" class="category__item swiper-slide">
            <img src="assets/img/items/buttercup/modernbuttercup.jpg" alt="" class="category__img" />
            <h3 class="category__title">Butercup</h3>
          </a>
        </div>
        <div class="swiper-button-prev">
          <i class="fi fi-rs-angle-left"></i>
        </div>
        <div class="swiper-button-next">
          <i class="fi fi-rs-angle-right"></i>
        </div>
      </div>
    </section>

    <!--=============== REWARD POSTER ===============-->
    <section class="poster-section container section">
      <div class="offer-banner reward-banner">
        <div class="offer-content">
          <span class="offer-subtitle">Loyalty Rewards</span>
          <h2 class="offer-title">Earn Flower Points with Every Order 🎁</h2>
          <p class="offer-text">
            Collect points every time you shop and redeem them for discounts,
            premium wrapping, and surprise bouquets.
          </p>
          <a href="accounts.php" class="btn">View Rewards</a>
        </div>

        <div class="offer-image">
          <img src="assets/img/point.png" alt="Reward Points Banner" class="poster-img">
        </div>
      </div>
    </section>

    <!--=============== NEW ARRIVALS PRODUCTS ===============-->
    <section class="products container section new__arrivals">
      <div class="section__header">
        <h2 class="section__title vip-title">
          <span>NEW</span> ARRIVALS
        </h2>
      </div>

      <div class="tab__items">
        <div class="tab__item active-tab" content id="popular">
          <div class="products__container grid">
            <!-- Products will be loaded dynamically or kept static for now -->
            <div class="product__item">
              <div class="product__banner">
                <a href="details.php?id=rose-ruby-red" class="product__images">
                  <img src="assets/img/items/roses/rose_5.jpg" alt="Ruby Red Romance" class="product__img default" />
                  <img src="assets/img/items/roses/rose_5.jpg" alt="Ruby Red Romance hover" class="product__img hover" />
                </a>
                <div class="product__actions">
                  <div class="share-menu">
                    <a class="share-link fb">Facebook</a>
                    <a class="share-link wa">WhatsApp</a>
                    <a class="share-link tg">Telegram</a>
                  </div>
                  <a class="action__btn" aria-label="Add to Wishlist">
                    <i class="fi fi-rs-heart"></i>
                  </a>
                  <a class="action__btn share__btn" aria-label="share">
                    <i class="fi fi-rs-shuffle"></i>
                  </a>
                </div>
                <div class="product__badge light-pink">-15%</div>
              </div>
              <div class="product__content">
                <span class="product__category">Roses</span>
                <a href="details.php?id=rose-ruby-red">
                  <h3 class="product__title">Ruby Red Romance</h3>
                  <p class="product__subtitle">گولی ڕوبی سوور ڕۆمانس</p>
                </a>
                <div class="product__price flex">
                  <span class="new__price">$45</span>
                  <span class="old__price">$55</span>
                </div>
                <a class="action__btn cart__btn" aria-label="Add To Cart">
                  <i class="fi fi-rs-shopping-bag-add"></i>
                </a>
              </div>
            </div>
            <!-- Add more products similarly, changing links to .php -->
          </div>
        </div>
      </div>
    </section>

    <!--=============== AI ASSISTANT OFFER ===============-->
    <section class="poster-section container section">
      <div class="offer-banner robot-banner">
        <div class="offer-image">
          <img src="assets/img/AI.JPG" alt="Liora Assistant" class="poster-img">
        </div>
        <div class="offer-content">
          <span class="offer-subtitle">AI Florist Assistant</span>
          <h2 class="offer-title">Need Help Choosing Flowers? 🤖🌷</h2>
          <p class="offer-text">
            Let Liora Assistant help you choose the perfect bouquet for birthdays,
            Mother's Day, Valentine, funerals, and special occasions.
          </p>
          <a href="chatbot.php" class="btn">Chat Now</a>
        </div>
      </div>
    </section>

    <!--=============== VIP ===============-->
    <section class="new__arrivals container section">
      <h3 class="section__title"><span> VIP</span> FLOWERS</h3>
      <div class="new__container swiper">
        <div class="swiper-wrapper">
          <!-- VIP products with .php links -->
        </div>
        <div class="swiper-button-prev">
          <i class="fi fi-rs-angle-left"></i>
        </div>
        <div class="swiper-button-next">
          <i class="fi fi-rs-angle-right"></i>
        </div>
      </div>
    </section>

    <!--=============== ADMIN ENTRY (HIDDEN FOR NOW) ===============-->
    <section class="container section" style="display: none;" id="admin-dashboard-entry">
      <h3 class="section__title"><span>Admin</span> Dashboard</h3>
      <a href="admin-dashboard.php" class="btn">Open Dashboard</a>
    </section>
  </main>

<?php require_once 'includes/footer.php'; ?>