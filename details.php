<?php
$page_title = 'Product Details - Liora';
require_once 'includes/header.php';
require_once 'includes/functions.php';

$product_id = $_GET['id'] ?? 0;
$product = getProduct($product_id);

if (!$product) {
    header('Location: index.php');
    exit();
}
?>

<main class="main">
  <section class="details section--lg">
    <div class="details__container container grid">
      <div class="details__images">
        <img src="<?php echo htmlspecialchars($product['image']); ?>" alt="<?php echo htmlspecialchars($product['name']); ?>" class="details__img" />
      </div>

      <div class="details__content">
        <h1 class="details__title"><?php echo htmlspecialchars($product['name']); ?></h1>
        <p class="details__subtitle"><?php echo htmlspecialchars($product['kurdish_name']); ?></p>
        <span class="details__category"><?php echo htmlspecialchars($product['category']); ?></span>
        <p class="details__description"><?php echo htmlspecialchars($product['description'] ?? 'Beautiful fresh flowers for any occasion.'); ?></p>
        <div class="details__price">
          <span class="new__price">$<?php echo number_format($product['price'], 2); ?></span>
        </div>
        <div class="details__quantity">
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" value="1" min="1" max="10">
        </div>
        <div class="details__actions">
          <button class="btn" onclick="addToCart(<?php echo $product['id']; ?>)">Add to Cart</button>
          <button class="btn btn--secondary" onclick="addToWishlist(<?php echo $product['id']; ?>)">Add to Wishlist</button>
        </div>
      </div>
    </div>
  </section>
</main>

<script>
function addToCart(productId) {
  const quantity = document.getElementById('quantity').value;
  fetch('/api/cart.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'add',
      product_id: productId,
      quantity: quantity
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Added to cart!');
      location.reload();
    } else {
      alert(data.message);
    }
  });
}

function addToWishlist(productId) {
  fetch('/api/wishlist.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'add',
      product_id: productId
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Added to wishlist!');
    } else {
      alert(data.message);
    }
  });
}
</script>

<?php require_once 'includes/footer.php'; ?>