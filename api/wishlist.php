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

        if ($product_id <= 0) {
            echo json_encode(['success' => false, 'message' => 'Invalid product']);
            exit();
        }

        // Check if already in wishlist
        $stmt = $db->prepare("SELECT id FROM wishlist_items WHERE user_id = ? AND product_id = ?");
        $stmt->execute([$user_id, $product_id]);
        if ($stmt->fetch()) {
            echo json_encode(['success' => false, 'message' => 'Already in wishlist']);
            exit();
        }

        $stmt = $db->prepare("INSERT INTO wishlist_items (user_id, product_id) VALUES (?, ?)");
        $stmt->execute([$user_id, $product_id]);

        echo json_encode(['success' => true, 'message' => 'Added to wishlist']);

    } elseif ($action === 'remove') {
        $product_id = (int)($data['product_id'] ?? 0);

        $stmt = $db->prepare("DELETE FROM wishlist_items WHERE user_id = ? AND product_id = ?");
        $stmt->execute([$user_id, $product_id]);

        echo json_encode(['success' => true, 'message' => 'Removed from wishlist']);

    } elseif ($action === 'list') {
        $stmt = $db->prepare("
            SELECT w.*, p.name, p.price, p.image
            FROM wishlist_items w
            JOIN products p ON w.product_id = p.id
            WHERE w.user_id = ?
        ");
        $stmt->execute([$user_id]);
        $items = $stmt->fetchAll();

        echo json_encode(['success' => true, 'items' => $items]);
    }

} else {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>