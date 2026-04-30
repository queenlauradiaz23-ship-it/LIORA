<?php
$page_title = 'User Management - Liora';
require_once 'includes/header.php';
require_once 'includes/functions.php';

requireAdmin();

// Get all users
$db = getDB();
$stmt = $db->query("SELECT id, name, email, phone, role, created_at FROM users ORDER BY created_at DESC");
$users = $stmt->fetchAll();
?>

<main class="main">
  <section class="admin-dashboard section--lg">
    <div class="admin__container container">
      <h1 class="admin__title">User Management</h1>

      <div class="admin__grid">
        <!-- Users List -->
        <div class="admin__card">
          <h2>All Users</h2>
          <div class="users-list">
            <?php foreach ($users as $user): ?>
              <div class="user-item">
                <div>
                  <strong><?php echo htmlspecialchars($user['name']); ?></strong><br>
                  <?php echo htmlspecialchars($user['email']); ?> - <?php echo htmlspecialchars($user['role']); ?><br>
                  <small>Joined: <?php echo date('M j, Y', strtotime($user['created_at'])); ?></small>
                </div>
                <button onclick="changeRole(<?php echo $user['id']; ?>, '<?php echo $user['role']; ?>')" class="btn btn--small">
                  <?php echo $user['role'] === 'admin' ? 'Remove Admin' : 'Make Admin'; ?>
                </button>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<script>
function changeRole(userId, currentRole) {
  const newRole = currentRole === 'admin' ? 'user' : 'admin';
  if (confirm(`Change role to ${newRole}?`)) {
    fetch('/api/admin/users.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'change_role',
        user_id: userId,
        role: newRole
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        location.reload();
      } else {
        alert('Error changing role');
      }
    });
  }
}
</script>

<?php require_once 'includes/footer.php'; ?>