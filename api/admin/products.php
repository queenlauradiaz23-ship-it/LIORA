<?php
require_once '../../includes/db.php';
require_once '../../includes/functions.php';

header('Content-Type: application/json');

session_start();
if (!isAdmin()) {
    echo json_encode(['success' => false, 'message' => 'Not authorized']);
    exit();
}

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $data = json_decode(file_get_contents('php://input'), true);

    $db = getDB();

    if ($method === 'POST') {
        $action = $data['action'] ?? '';

        if ($action === 'delete') {
            $product_id = (int)($data['product_id'] ?? 0);
            $stmt = $db->prepare("DELETE FROM products WHERE id = ?");
            if ($stmt->execute([$product_id])) {
                echo json_encode(['success' => true, 'message' => 'Product deleted']);
            } else {
                echo json_encode(['success' => false, 'message' => 'Delete failed']);
            }
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    }
} catch (Exception $e) {
    error_log('Products API Error: ' . $e->getMessage());
    echo json_encode(['success' => false, 'message' => 'Internal server error']);
}
?>