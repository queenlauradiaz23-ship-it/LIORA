<?php
$page_title = 'Server Error - Liora';
require_once 'includes/header.php';
?>

<main class="main">
  <section class="error section--lg">
    <div class="error__container container">
      <div class="error__content">
        <h1 class="error__title">500</h1>
        <h2 class="error__subtitle">Internal Server Error</h2>
        <p class="error__description">
          Something went wrong on our end. Please try again later.
        </p>
        <a href="index.php" class="btn">Go Home</a>
      </div>
    </div>
  </section>
</main>

<?php require_once 'includes/footer.php'; ?>