<?php
$page_title = 'Shopping Cart - Liora';
require_once 'includes/header.php';
require_once 'includes/functions.php';
requireLogin();

$user_id = $_SESSION['user_id'];
$db = getDB();
$stmt = $db->prepare("SELECT c.*, p.name, p.price, p.image FROM cart_items c JOIN products p ON c.product_id = p.id WHERE c.user_id = ?");
$stmt->execute([$user_id]);
$cart_items = $stmt->fetchAll();

$total = 0;
foreach ($cart_items as $item) {
    $total += $item['price'] * $item['quantity'];
}
?>

<main class="main">
  <section class="cart section--lg">
    <div class="cart__container container">
      <h1 class="cart__title">Shopping Cart</h1>

      <div class="cart__content">
        <div class="cart__items" id="cart-items-container">
          <?php if (empty($cart_items)): ?>
            <p>Your cart is empty.</p>
          <?php else: ?>
            <?php foreach ($cart_items as $item): ?>
              <div class="cart__item">
                <img src="<?php echo htmlspecialchars($item['image']); ?>" alt="<?php echo htmlspecialchars($item['name']); ?>">
                <div class="cart__item-info">
                  <h3><?php echo htmlspecialchars($item['name']); ?></h3>
                  <p>$<?php echo number_format($item['price'], 2); ?></p>
                  <div class="quantity-controls">
                    <button onclick="changeQty(<?php echo $item['product_id']; ?>, -1)">-</button>
                    <span><?php echo $item['quantity']; ?></span>
                    <button onclick="changeQty(<?php echo $item['product_id']; ?>, 1)">+</button>
                  </div>
                </div>
                <button onclick="removeFromCart(<?php echo $item['product_id']; ?>)">Remove</button>
              </div>
            <?php endforeach; ?>
          <?php endif; ?>
        </div>

        <div class="cart__summary">
          <h3>Total: $<?php echo number_format($total, 2); ?></h3>
          <a href="checkout.php" class="btn">Proceed to Checkout</a>
        </div>
      </div>
    </div>
  </section>
</main>

<?php require_once 'includes/footer.php'; ?>