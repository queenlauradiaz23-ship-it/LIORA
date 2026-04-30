<?php
$page_title = 'My Account - Liora';
require_once 'includes/header.php';
require_once 'includes/functions.php';
requireLogin();

$user_id = $_SESSION['user_id'];
$user = getUserData($user_id);

// Handle profile update
$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update_profile'])) {
    $name = sanitize($_POST['name'] ?? '');
    $email = sanitize($_POST['email'] ?? '');
    $phone = sanitize($_POST['phone'] ?? '');
    $address = sanitize($_POST['address'] ?? '');

    if (empty($name) || empty($email)) {
        $message = 'Name and email are required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message = 'Invalid email format';
    } else {
        $db = getDB();
        $stmt = $db->prepare("UPDATE users SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?");
        if ($stmt->execute([$name, $email, $phone, $address, $user_id])) {
            $message = 'Profile updated successfully';
            $_SESSION['name'] = $name;
            $user = getUserData($user_id); // Refresh data
        } else {
            $message = 'Update failed';
        }
    }
}

// Get order history
$db = getDB();
$stmt = $db->prepare("
    SELECT o.*, GROUP_CONCAT(p.name SEPARATOR ', ') as products
    FROM orders o
    LEFT JOIN order_items oi ON o.id = oi.order_id
    LEFT JOIN products p ON oi.product_id = p.id
    WHERE o.user_id = ?
    GROUP BY o.id
    ORDER BY o.created_at DESC
");
$stmt->execute([$user_id]);
$orders = $stmt->fetchAll();
?>

<main class="main">
  <section class="account section--lg">
    <div class="account__container container">
      <h1 class="account__title">My Account</h1>

      <?php if ($message): ?>
        <div class="message"><?php echo htmlspecialchars($message); ?></div>
      <?php endif; ?>

      <div class="account__grid">
        <!-- Profile Section -->
        <div class="account__card">
          <h2>Profile Information</h2>
          <form method="POST" class="account__form">
            <input type="hidden" name="update_profile" value="1">
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
              <input type="tel" id="phone" name="phone" value="<?php echo htmlspecialchars($user['phone'] ?? ''); ?>">
            </div>
            <div class="form__group">
              <label for="address">Address</label>
              <textarea id="address" name="address"><?php echo htmlspecialchars($user['address'] ?? ''); ?></textarea>
            </div>
            <button type="submit" class="btn">Update Profile</button>
          </form>
        </div>

        <!-- Points Section -->
        <div class="account__card">
          <h2>Flower Points</h2>
          <div class="points__display">
            <span class="points__number"><?php echo $user['points']; ?></span>
            <span class="points__label">Points</span>
          </div>
          <p>Redeem points for discounts and special offers!</p>
        </div>

        <!-- Order History -->
        <div class="account__card account__card--full">
          <h2>Order History</h2>
          <?php if (empty($orders)): ?>
            <p>No orders yet.</p>
          <?php else: ?>
            <div class="orders__list">
              <?php foreach ($orders as $order): ?>
                <div class="order__item">
                  <div class="order__header">
                    <span class="order__id">Order #<?php echo $order['id']; ?></span>
                    <span class="order__status"><?php echo htmlspecialchars($order['status']); ?></span>
                    <span class="order__date"><?php echo date('M d, Y', strtotime($order['created_at'])); ?></span>
                  </div>
                  <div class="order__details">
                    <span class="order__products"><?php echo htmlspecialchars($order['products']); ?></span>
                    <span class="order__total">$<?php echo number_format($order['total'], 2); ?></span>
                  </div>
                </div>
              <?php endforeach; ?>
            </div>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </section>
</main>

<?php require_once 'includes/footer.php'; ?>