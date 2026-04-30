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

    if ($action === 'add') {
        $product_id = (int)($data['product_id'] ?? 0);
        $quantity = (int)($data['quantity'] ?? 1);

        if ($product_id <= 0) {
            echo json_encode(['success' => false, 'message' => 'Invalid product']);
            exit();
        }

        // Check if already in cart
        $stmt = $db->prepare("SELECT id, quantity FROM cart_items WHERE user_id = ? AND product_id = ?");
        $stmt->execute([$user_id, $product_id]);
        $existing = $stmt->fetch();

        if ($existing) {
            $new_quantity = $existing['quantity'] + $quantity;
            $stmt = $db->prepare("UPDATE cart_items SET quantity = ? WHERE id = ?");
            $stmt->execute([$new_quantity, $existing['id']]);
        } else {
            $stmt = $db->prepare("INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?)");
            $stmt->execute([$user_id, $product_id, $quantity]);
        }

        echo json_encode(['success' => true, 'message' => 'Added to cart']);

    } elseif ($action === 'remove') {
        $product_id = (int)($data['product_id'] ?? 0);

        $stmt = $db->prepare("DELETE FROM cart_items WHERE user_id = ? AND product_id = ?");
        $stmt->execute([$user_id, $product_id]);

        echo json_encode(['success' => true, 'message' => 'Removed from cart']);

    } elseif ($action === 'update') {
        $product_id = (int)($data['product_id'] ?? 0);
        $quantity = (int)($data['quantity'] ?? 1);

        if ($quantity <= 0) {
            $stmt = $db->prepare("DELETE FROM cart_items WHERE user_id = ? AND product_id = ?");
            $stmt->execute([$user_id, $product_id]);
        } else {
            $stmt = $db->prepare("UPDATE cart_items SET quantity = ? WHERE user_id = ? AND product_id = ?");
            $stmt->execute([$quantity, $user_id, $product_id]);
        }

        echo json_encode(['success' => true, 'message' => 'Cart updated']);

    } elseif ($action === 'list') {
        $stmt = $db->prepare("
            SELECT c.*, p.name, p.price, p.image
            FROM cart_items c
            JOIN products p ON c.product_id = p.id
            WHERE c.user_id = ?
        ");
        $stmt->execute([$user_id]);
        $items = $stmt->fetchAll();

        echo json_encode(['success' => true, 'items' => $items]);
    }

} else {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>