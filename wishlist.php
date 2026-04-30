<?php
$page_title = 'Wishlist - Liora';
require_once 'includes/header.php';
require_once 'includes/functions.php';
requireLogin();

$user_id = $_SESSION['user_id'];
$db = getDB();
$stmt = $db->prepare("SELECT w.*, p.name, p.price, p.image FROM wishlist_items w JOIN products p ON w.product_id = p.id WHERE w.user_id = ?");
$stmt->execute([$user_id]);
$wishlist_items = $stmt->fetchAll();
?>

<main class="main">
  <section class="wishlist section--lg">
    <div class="wishlist__container container">
      <h1 class="wishlist__title">My Wishlist</h1>

      <div class="wishlist__content" id="wishlist-items">
        <?php if (empty($wishlist_items)): ?>
          <p id="wishlist-empty">Your wishlist is empty.</p>
        <?php else: ?>
          <?php foreach ($wishlist_items as $item): ?>
            <div class="product__item">
              <div class="product__banner">
                <a href="details.php?id=<?php echo $item['product_id']; ?>" class="product__images">
                  <img src="<?php echo htmlspecialchars($item['image']); ?>" class="product__img default">
                  <img src="<?php echo htmlspecialchars($item['image']); ?>" class="product__img hover">
                </a>
                <div class="product__actions">
                  <button class="action__btn remove-item" data-id="<?php echo $item['product_id']; ?>" title="Remove">
                    <i class="fi fi-rs-trash"></i>
                  </button>
                </div>
              </div>
              <div class="product__content">
                <h3 class="product__title"><?php echo htmlspecialchars($item['name']); ?></h3>
                <div class="product__price flex">
                  <span class="new__price">$<?php echo number_format($item['price'], 2); ?></span>
                </div>
                <button class="action__btn cart__btn" onclick="addToCartFromWishlist(<?php echo $item['product_id']; ?>)">
                  <i class="fi fi-rs-shopping-bag-add"></i>
                </button>
              </div>
            </div>
          <?php endforeach; ?>
        <?php endif; ?>
      </div>
    </div>
  </section>
</main>

<script>
function addToCartFromWishlist(productId) {
  fetch('/api/cart.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'add',
      product_id: productId,
      quantity: 1
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Added to cart!');
    } else {
      alert(data.message);
    }
  });
}
</script>

<?php require_once 'includes/footer.php'; ?>