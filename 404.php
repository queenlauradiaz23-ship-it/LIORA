<?php
$page_title = 'Page Not Found - Liora';
require_once 'includes/header.php';
?>

<main class="main">
  <section class="error section--lg">
    <div class="error__container container">
      <div class="error__content">
        <h1 class="error__title">404</h1>
        <h2 class="error__subtitle">Page Not Found</h2>
        <p class="error__description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="index.php" class="btn">Go Home</a>
      </div>
    </div>
  </section>
</main>

<?php require_once 'includes/footer.php'; ?>