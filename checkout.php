<?php
$page_title = 'Checkout - Liora';
require_once 'includes/header.php';
require_once 'includes/functions.php';
requireLogin();

$user_id = $_SESSION['user_id'];
$user = getUserData($user_id);
$cart_total = getCartTotal($user_id);

if ($cart_total == 0) {
    header('Location: cart.php');
    exit();
}
?>

<main class="main">
  <section class="checkout section--lg">
    <div class="checkout__container container">
      <h1 class="checkout__title">Checkout</h1>

      <form id="checkout-form" method="POST">
        <div class="checkout__grid">
          <div class="checkout__info">
            <h3>Shipping Information</h3>
            <div class="form__group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" value="<?php echo htmlspecialchars($user['name']); ?>" required>
            </div>
            <div class="form__group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($user['email']); ?>" required>
            </div>
            <div class="form__group">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone" value="<?php echo htmlspecialchars($user['phone'] ?? ''); ?>" required>
            </div>
            <div class="form__group">
              <label for="address">Delivery Address</label>
              <textarea id="address" name="address" required><?php echo htmlspecialchars($user['address'] ?? ''); ?></textarea>
            </div>

            <h3>Payment Information</h3>
            <div class="form__group">
              <label for="payment_method">Payment Method</label>
              <select id="payment_method" name="payment_method" required>
                <option value="cash_on_delivery">Cash on Delivery</option>
                <option value="card">Credit/Debit Card (Coming Soon)</option>
                <option value="paypal">PayPal (Coming Soon)</option>
              </select>
            </div>
            <div id="card_fields" style="display: none;">
              <div class="form__group">
                <label for="card_number">Card Number</label>
                <input type="text" id="card_number" name="card_number" placeholder="1234 5678 9012 3456">
              </div>
              <div class="form__group">
                <label for="expiry">Expiry Date</label>
                <input type="text" id="expiry" name="expiry" placeholder="MM/YY">
              </div>
              <div class="form__group">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="123">
              </div>
            </div>
          </div>

          <div class="checkout__summary">
            <h3>Order Summary</h3>
            <p>Total: $<?php echo number_format($cart_total, 2); ?></p>
            <button type="submit" class="btn">Place Order</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</main>

<script>
document.getElementById('payment_method').addEventListener('change', function() {
  const cardFields = document.getElementById('card_fields');
  if (this.value === 'card') {
    cardFields.style.display = 'block';
  } else {
    cardFields.style.display = 'none';
  }
});

document.getElementById('checkout-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const address = formData.get('address');

  fetch('/api/checkout.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'checkout',
      address: address
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Order placed successfully!');
      window.location.href = 'deliveryMap.php?order_id=' + data.order_id;
    } else {
      alert(data.message);
    }
  });
});
</script>

<?php require_once 'includes/footer.php'; ?>