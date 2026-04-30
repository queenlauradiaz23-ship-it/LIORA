<?php
$page_title = 'Admin Dashboard - Liora';
require_once 'includes/header.php';
require_once 'includes/functions.php';
requireAdmin();
?>

<main class="main">
  <section class="admin-dashboard section--lg">
    <div class="admin__container container">
      <h1 class="admin__title">Admin Dashboard</h1>

      <div class="admin__grid">
        <!-- Orders Management -->
        <div class="admin__card">
          <h2>Order Management</h2>
          <div id="orders-list">
            <!-- Orders will be loaded here -->
          </div>
        </div>

        <!-- Analytics -->
        <div class="admin__card">
          <h2>Most Selling Flowers</h2>
          <canvas id="salesChart"></canvas>
        </div>

        <!-- Product Management -->
        <div class="admin__card">
          <h2>Product Management</h2>
          <a href="admin-products.php" class="btn">Manage Products</a>
        </div>

        <!-- User Management -->
        <div class="admin__card">
          <h2>User Management</h2>
          <a href="admin-users.php" class="btn">Manage Users</a>
        </div>
      </div>
    </div>
  </section>
</main>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  loadOrders();
  loadAnalytics();
});

function loadOrders() {
  fetch('/api/checkout.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'get_orders' })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      const ordersList = document.getElementById('orders-list');
      ordersList.innerHTML = data.orders.map(order => `
        <div class="order-item">
          <span>Order #${order.id} - ${order.user_name} - $${order.total} - ${order.status}</span>
          <button onclick="updateOrderStatus(${order.id}, 'shipped')">Mark Shipped</button>
        </div>
      `).join('');
    }
  });
}

function loadAnalytics() {
  fetch('/api/admin/stats.php')
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      const ctx = document.getElementById('salesChart').getContext('2d');
      const labels = data.most_sold.map(item => item.name);
      const sales = data.most_sold.map(item => item.total_sold);

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Units Sold',
            data: sales,
            backgroundColor: '#ff6384'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Most Sold Flowers'
            }
          }
        }
      });
    }
  });
}

function updateOrderStatus(orderId, status) {
  fetch('/api/admin/orders.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'update_status',
      order_id: orderId,
      status: status
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Order status updated!');
    } else {
      alert('Error updating status');
    }
  });
}
</script>

<?php require_once 'includes/footer.php'; ?>