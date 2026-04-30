<?php
$page_title = 'Product Management - Liora';
require_once 'includes/header.php';
require_once 'includes/functions.php';

requireAdmin();

$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    $db = getDB();

    if ($action === 'add_product') {
        $name = sanitize($_POST['name']);
        $kurdish_name = sanitize($_POST['kurdish_name']);
        $price = (float)$_POST['price'];
        $category = sanitize($_POST['category']);
        $description = sanitize($_POST['description']);
        $image = sanitize($_POST['image']);

        $stmt = $db->prepare("INSERT INTO products (name, kurdish_name, price, category, description, image) VALUES (?, ?, ?, ?, ?, ?)");
        if ($stmt->execute([$name, $kurdish_name, $price, $category, $description, $image])) {
            $message = 'Product added successfully!';
        } else {
            $message = 'Failed to add product.';
        }
    }
}

// Get all products
$db = getDB();
$stmt = $db->query("SELECT * FROM products ORDER BY id DESC");
$products = $stmt->fetchAll();
?>

<main class="main">
  <section class="admin-dashboard section--lg">
    <div class="admin__container container">
      <h1 class="admin__title">Product Management</h1>

      <?php if ($message): ?>
        <div class="message message--<?php echo strpos($message, 'success') !== false ? 'success' : 'error'; ?>">
          <?php echo $message; ?>
        </div>
      <?php endif; ?>

      <div class="admin__grid">
        <!-- Add Product Form -->
        <div class="admin__card">
          <h2>Add New Product</h2>
          <form method="POST">
            <input type="hidden" name="action" value="add_product">
            <div class="form-group">
              <label>Name:</label>
              <input type="text" name="name" required>
            </div>
            <div class="form-group">
              <label>Kurdish Name:</label>
              <input type="text" name="kurdish_name">
            </div>
            <div class="form-group">
              <label>Price:</label>
              <input type="number" step="0.01" name="price" required>
            </div>
            <div class="form-group">
              <label>Category:</label>
              <input type="text" name="category" required>
            </div>
            <div class="form-group">
              <label>Description:</label>
              <textarea name="description"></textarea>
            </div>
            <div class="form-group">
              <label>Image URL:</label>
              <input type="url" name="image" required>
            </div>
            <button type="submit" class="btn">Add Product</button>
          </form>
        </div>

        <!-- Products List -->
        <div class="admin__card">
          <h2>Existing Products</h2>
          <div class="products-list">
            <?php foreach ($products as $product): ?>
              <div class="product-item">
                <img src="<?php echo htmlspecialchars($product['image']); ?>" alt="<?php echo htmlspecialchars($product['name']); ?>" style="width: 50px; height: 50px;">
                <div>
                  <strong><?php echo htmlspecialchars($product['name']); ?></strong><br>
                  $<?php echo number_format($product['price'], 2); ?> - <?php echo htmlspecialchars($product['category']); ?>
                </div>
                <button onclick="editProduct(<?php echo $product['id']; ?>)" class="btn btn--small">Edit</button>
                <button onclick="deleteProduct(<?php echo $product['id']; ?>)" class="btn btn--small btn--danger">Delete</button>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<script>
function editProduct(id) {
  // Implement edit functionality
  alert('Edit product: ' + id);
}

function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    fetch('/api/admin/products.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'delete',
        product_id: id
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        location.reload();
      } else {
        alert('Error deleting product');
      }
    });
  }
}
</script>

<?php require_once 'includes/footer.php'; ?>