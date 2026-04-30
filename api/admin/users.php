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

        if ($action === 'change_role') {
            $user_id = (int)($data['user_id'] ?? 0);
            $role = sanitize($data['role'] ?? 'user');

            $stmt = $db->prepare("UPDATE users SET role = ? WHERE id = ?");
            if ($stmt->execute([$role, $user_id])) {
                echo json_encode(['success' => true, 'message' => 'Role updated']);
            } else {
                echo json_encode(['success' => false, 'message' => 'Update failed']);
            }
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    }
} catch (Exception $e) {
    error_log('Users API Error: ' . $e->getMessage());
    echo json_encode(['success' => false, 'message' => 'Internal server error']);
}
?>