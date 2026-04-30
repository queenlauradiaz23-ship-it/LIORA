<?php
$page_title = 'Search - Liora';
require_once 'includes/header.php';
require_once 'includes/functions.php';

$search_query = $_GET['q'] ?? '';
$results = [];

if (!empty($search_query)) {
    $db = getDB();
    $stmt = $db->prepare("SELECT * FROM products WHERE name LIKE ? OR kurdish_name LIKE ? OR category LIKE ?");
    $search_term = '%' . $search_query . '%';
    $stmt->execute([$search_term, $search_term, $search_term]);
    $results = $stmt->fetchAll();
}
?>

<main class="main">
  <section class="search section--lg">
    <div class="search__container container">
      <h1 class="search__title">Search Results</h1>

      <form method="GET" class="search__form">
        <input type="text" name="q" value="<?php echo htmlspecialchars($search_query); ?>" placeholder="Search flowers..." required>
        <button type="submit" class="btn">Search</button>
      </form>

      <?php if (!empty($search_query)): ?>
        <div class="search__results">
          <?php if (empty($results)): ?>
            <p>No products found for "<?php echo htmlspecialchars($search_query); ?>"</p>
          <?php else: ?>
            <div class="products__container grid">
              <?php foreach ($results as $product): ?>
                <div class="product__item" data-id="<?php echo $product['id']; ?>" data-name="<?php echo htmlspecialchars($product['name']); ?>" data-price="<?php echo $product['price']; ?>" data-image="<?php echo htmlspecialchars($product['image']); ?>" data-category="<?php echo htmlspecialchars($product['category']); ?>">
                  <div class="product__banner">
                    <a href="details.php?id=<?php echo $product['id']; ?>" class="product__images">
                      <img src="<?php echo htmlspecialchars($product['image']); ?>" alt="<?php echo htmlspecialchars($product['name']); ?>" class="product__img default" />
                      <img src="<?php echo htmlspecialchars($product['image']); ?>" alt="<?php echo htmlspecialchars($product['name']); ?>" class="product__img hover" />
                    </a>
                    <div class="product__actions">
                      <a class="action__btn" aria-label="Add to Wishlist">
                        <i class="fi fi-rs-heart"></i>
                      </a>
                      <a class="action__btn share__btn" aria-label="share">
                        <i class="fi fi-rs-share"></i>
                      </a>
                    </div>
                  </div>
                  <div class="product__content">
                    <span class="product__category"><?php echo htmlspecialchars($product['category']); ?></span>
                    <a href="details.php?id=<?php echo $product['id']; ?>">
                      <h3 class="product__title"><?php echo htmlspecialchars($product['name']); ?></h3>
                      <p class="product__subtitle"><?php echo htmlspecialchars($product['kurdish_name']); ?></p>
                    </a>
                    <div class="product__price flex">
                      <span class="new__price">$<?php echo number_format($product['price'], 2); ?></span>
                    </div>
                    <a class="action__btn cart__btn" aria-label="Add To Cart">
                      <i class="fi fi-rs-shopping-bag-add"></i>
                    </a>
                  </div>
                </div>
              <?php endforeach; ?>
            </div>
          <?php endif; ?>
        </div>
      <?php endif; ?>
    </div>
  </section>
</main>

<?php require_once 'includes/footer.php'; ?>