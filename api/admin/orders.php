<?php
require_once '../../includes/db.php';
require_once '../../includes/functions.php';

header('Content-Type: application/json');

session_start();
if (!isAdmin()) {
    echo json_encode(['success' => false, 'message' => 'Not authorized']);
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents('php://input'), true);

$db = getDB();

if ($method === 'POST') {
    $action = $data['action'] ?? '';

    if ($action === 'update_status') {
        $order_id = (int)($data['order_id'] ?? 0);
        $status = sanitize($data['status'] ?? '');

        $stmt = $db->prepare("UPDATE orders SET status = ? WHERE id = ?");
        if ($stmt->execute([$status, $order_id])) {
            echo json_encode(['success' => true, 'message' => 'Order status updated']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Update failed']);
        }
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>