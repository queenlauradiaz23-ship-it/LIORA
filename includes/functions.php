<?php
require_once 'db.php';

// Sanitize input
function sanitize($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Check if user is logged in
function isLoggedIn() {
    return isset($_SESSION['user_id']);
}

// Check if user is admin
function isAdmin() {
    return isset($_SESSION['role']) && $_SESSION['role'] === 'admin';
}

// Redirect if not logged in
function requireLogin() {
    if (!isLoggedIn()) {
        header('Location: login-register.php');
        exit();
    }
}

// Redirect if not admin
function requireAdmin() {
    if (!isAdmin()) {
        header('Location: index.php');
        exit();
    }
}

// Get user data
function getUserData($user_id) {
    $db = getDB();
    $stmt = $db->prepare("SELECT * FROM users WHERE id = ?");
    $stmt->execute([$user_id]);
    return $stmt->fetch();
}

// Get product data
function getProduct($product_id) {
    $db = getDB();
    $stmt = $db->prepare("SELECT * FROM products WHERE id = ?");
    $stmt->execute([$product_id]);
    return $stmt->fetch();
}

// Generate CSRF token
function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

// Verify CSRF token
function verifyCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

// Send email (placeholder - implement with PHPMailer or similar)
function sendEmail($to, $subject, $message) {
    // For now, just log the email
    error_log("Email to $to: $subject - $message");
    return true; // Pretend it was sent
}

// Calculate cart total
function getCartTotal($user_id) {
    $db = getDB();
    $stmt = $db->prepare("
        SELECT SUM(p.price * c.quantity) as total
        FROM cart_items c
        JOIN products p ON c.product_id = p.id
        WHERE c.user_id = ?
    ");
    $stmt->execute([$user_id]);
    $result = $stmt->fetch();
    return $result['total'] ?? 0;
}

// Get cart items count
function getCartCount($user_id) {
    $db = getDB();
    $stmt = $db->prepare("SELECT SUM(quantity) as count FROM cart_items WHERE user_id = ?");
    $stmt->execute([$user_id]);
    $result = $stmt->fetch();
    return $result['count'] ?? 0;
}

// Get wishlist items count
function getWishlistCount($user_id) {
    $db = getDB();
    $stmt = $db->prepare("SELECT COUNT(*) as count FROM wishlist_items WHERE user_id = ?");
    $stmt->execute([$user_id]);
    $result = $stmt->fetch();
    return $result['count'] ?? 0;
}
?>