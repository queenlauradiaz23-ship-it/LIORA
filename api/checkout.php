<?php
require_once '../includes/db.php';
require_once '../includes/functions.php';

header('Content-Type: application/json');

session_start();
if (!isLoggedIn()) {
    echo json_encode(['success' => false, 'message' => 'Not logged in']);
    exit();
}

$user_id = $_SESSION['user_id'];
$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true);

$db = getDB();

if ($method === 'POST') {
    $action = $data['action'] ?? '';

    if ($action === 'checkout') {
        // Get cart items
        $stmt = $db->prepare("SELECT c.*, p.name, p.price FROM cart_items c JOIN products p ON c.product_id = p.id WHERE c.user_id = ?");
        $stmt->execute([$user_id]);
        $cart_items = $stmt->fetchAll();

        if (empty($cart_items)) {
            echo json_encode(['success' => false, 'message' => 'Cart is empty']);
            exit();
        }

        // Calculate total
        $total = 0;
        foreach ($cart_items as $item) {
            $total += $item['price'] * $item['quantity'];
        }

        $address = sanitize($data['address'] ?? '');

        // Create order
        $stmt = $db->prepare("INSERT INTO orders (user_id, total, address, status) VALUES (?, ?, ?, 'pending')");
        $stmt->execute([$user_id, $total, $address]);
        $order_id = $db->lastInsertId();

        // Create order items
        foreach ($cart_items as $item) {
            $stmt = $db->prepare("INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)");
            $stmt->execute([$order_id, $item['product_id'], $item['quantity'], $item['price']]);
        }

        // Clear cart
        $stmt = $db->prepare("DELETE FROM cart_items WHERE user_id = ?");
        $stmt->execute([$user_id]);

        // Create delivery record
        $stmt = $db->prepare("INSERT INTO deliveries (order_id, status) VALUES (?, 'pending')");
        $stmt->execute([$order_id]);

        // Send confirmation email
        $subject = "Order Confirmation - Order #$order_id";
        $message = "Thank you for your order! Your order #$order_id has been placed successfully. Total: $$total";
        sendEmail($user['email'], $subject, $message);

        echo json_encode(['success' => true, 'message' => 'Order placed successfully', 'order_id' => $order_id]);

    } elseif ($action === 'get_orders') {
        // For admin
        if (!isAdmin()) {
            echo json_encode(['success' => false, 'message' => 'Not authorized']);
            exit();
        }

        $stmt = $db->prepare("
            SELECT o.*, u.name as user_name
            FROM orders o
            JOIN users u ON o.user_id = u.id
            ORDER BY o.created_at DESC
        ");
        $stmt->execute();
        $orders = $stmt->fetchAll();

        echo json_encode(['success' => true, 'orders' => $orders]);
    }

} else {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>