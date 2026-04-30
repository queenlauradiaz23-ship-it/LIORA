<?php
$page_title = 'Delivery Tracking - Liora';
require_once 'includes/header.php';
require_once 'includes/functions.php';
requireLogin();

$user_id = $_SESSION['user_id'];
$order_id = $_GET['order_id'] ?? null;

$delivery = null;
if ($order_id) {
    $db = getDB();
    $stmt = $db->prepare("
        SELECT d.*, o.status as order_status
        FROM deliveries d
        JOIN orders o ON d.order_id = o.id
        WHERE d.order_id = ? AND o.user_id = ?
    ");
    $stmt->execute([$order_id, $user_id]);
    $delivery = $stmt->fetch();
}
?>

<main class="main">
  <section class="delivery section--lg">
    <div class="delivery__container container">
      <h1 class="delivery__title">Delivery Tracking</h1>

      <?php if ($delivery): ?>
        <div class="delivery__status">
          <h2>Order #<?php echo $order_id; ?></h2>
          <p>Status: <?php echo htmlspecialchars($delivery['status']); ?></p>
          <p>Order Status: <?php echo htmlspecialchars($delivery['order_status']); ?></p>
          <p>Last Updated: <?php echo $delivery['updated_at']; ?></p>
        </div>
      <?php else: ?>
        <p>Select an order to track delivery.</p>
      <?php endif; ?>
    </div>
  </section>
</main>

<?php require_once 'includes/footer.php'; ?>