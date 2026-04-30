<?php
require_once 'includes/session.php';
require_once 'includes/functions.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!--=============== FLATICON ===============-->
  <link rel="stylesheet"
    href="https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-straight/css/uicons-regular-straight.css" />
  <!--=============== SWIPER CSS ===============-->
  <link rel="stylesheet" href="assets/css/swiper.css">
  <!--=============== SEARCH CSS ===============-->
  <link rel="stylesheet" href="assets/css/search.css">
  <!--=============== CSS ===============-->
  <link rel="stylesheet" href="assets/css/styles.css" />

  <title><?php echo $page_title ?? 'Liora — Modern Online Flower Shopping'; ?></title>
</head>

<body>
  <!--=============== HEADER ===============-->
  <header class="header">
    <div class="header__top">
      <div class="header__container container">
        <div class="header__contact">
          <span>Fresh flowers for every special moment 🌷</span>
        </div>

        <div class="header__top-action">
          <?php if (isLoggedIn()): ?>
            <span>Welcome, <?php echo htmlspecialchars($_SESSION['name'] ?? 'User'); ?> | </span>
            <a href="logout.php">Logout</a>
          <?php else: ?>
            <a href="login-register.php">Log In / Sign Up</a>
          <?php endif; ?>
        </div>
      </div>
    </div>

    <nav class="nav container">
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list custom-nav">
          <li class="nav__item brand-item">
            <a href="index.php" class="nav__link brand-logo">LIORA</a>
          </li>

          <li class="nav__item">
            <a href="mother.php" class="nav__link">Mother’s Day</a>
          </li>
          <li class="nav__item">
            <a href="birthday.php" class="nav__link">Birthday</a>
          </li>

          <li class="nav__item search-center">
            <div class="header__search custom-search">
              <input type="text" placeholder="Search flowers..." class="form__input search-input" />
              <button class="search__btn">
                <img src="assets/img/search.svg" alt="search icon" />
              </button>
              <div id="search-history" class="search-history-box"></div>
            </div>
          </li>

          <li class="nav__item">
            <a href="newyear.php" class="nav__link">New Year</a>
          </li>
          <li class="nav__item">
            <a href="valentine.php" class="nav__link">Valentine</a>
          </li>
          <li class="nav__item">
            <a href="occasions.php" class="nav__link">Occasions</a>
          </li>
        </ul>
      </div>

      <div class="header__user-actions">
        <a href="wishlist.php" class="header__action-btn" title="Wishlist">
          <img src="assets/img/heart-pink.svg" alt="Wishlist" />
          <?php if (isLoggedIn()): ?>
            <span class="action-count" id="wishlist-count"><?php echo getWishlistCount($_SESSION['user_id']); ?></span>
          <?php endif; ?>
        </a>

        <a href="cart.php" class="header__action-btn" title="Cart">
          <img src="assets/img/cart-pink.svg" alt="Cart" />
          <?php if (isLoggedIn()): ?>
            <span class="action-count" id="cart-count"><?php echo getCartCount($_SESSION['user_id']); ?></span>
          <?php endif; ?>
        </a>

        <a href="chatbot.php" class="header__action-btn" title="AI Assistant">
          <img src="assets/img/robot-pink.svg" alt="AI Assistant" class="robot-icon" />
        </a>

        <div class="user-menu-container">
          <a href="#" class="header__action-btn user-menu-btn" title="My Liora Menu">
            <img src="assets/img/menu-pink.svg" alt="Menu" />
          </a>

          <div class="user-dropdown">
            <ul>
              <?php if (!isLoggedIn()): ?>
                <li><a href="login-register.php">🌸 Log In / Sign Up</a></li>
              <?php else: ?>
                <li><a href="accounts.php">👤 My Account</a></li>
                <li><a href="calendar.php">📅 Calendar & Schedule Delivery</a></li>
                <li><a href="deliveryMap.php">📍 Locate My Delivery</a></li>
                <li><a href="accounts.php">🎁 Flower Points & Rewards</a></li>
                <li><a href="wishlist.php">❤️ My Wishlist</a></li>
                <li><a href="cart.php">🛒 My Cart</a></li>
                <li class="divider"></li>
              <?php endif; ?>
              <li><a href="flower.php">🌷 Browse All Flowers</a></li>
              <li><a href="occasions.php">🎉 Special Occasions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>