<?php
require_once '../includes/db.php';
require_once '../includes/functions.php';

header('Content-Type: application/json');

try {
    $method = $_SERVER['REQUEST_METHOD'];
    $data = json_decode(file_get_contents('php://input'), true);

    if ($method === 'POST') {
        $action = $data['action'] ?? '';

        if ($action === 'register') {
            // Register
            $name = sanitize($data['name'] ?? '');
            $email = sanitize($data['email'] ?? '');
            $password = $data['password'] ?? '';
            $phone = sanitize($data['phone'] ?? '');
            $address = sanitize($data['address'] ?? '');

            if (empty($name) || empty($email) || empty($password)) {
                echo json_encode(['success' => false, 'message' => 'All fields are required']);
                exit();
            }

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                echo json_encode(['success' => false, 'message' => 'Invalid email format']);
                exit();
            }

            $db = getDB();

            // Check if email exists
            $stmt = $db->prepare("SELECT id FROM users WHERE email = ?");
            $stmt->execute([$email]);
            if ($stmt->fetch()) {
                echo json_encode(['success' => false, 'message' => 'Email already exists']);
                exit();
            }

            // Hash password
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // Insert user
            $stmt = $db->prepare("INSERT INTO users (name, email, password_hash, phone, address) VALUES (?, ?, ?, ?, ?)");
            if ($stmt->execute([$name, $email, $hashedPassword, $phone, $address])) {
                echo json_encode(['success' => true, 'message' => 'Registration successful']);
            } else {
                echo json_encode(['success' => false, 'message' => 'Registration failed']);
            }

    } elseif ($action === 'login') {
        // Login
        $email = sanitize($data['email'] ?? '');
        $password = $data['password'] ?? '';

        if (empty($email) || empty($password)) {
            echo json_encode(['success' => false, 'message' => 'Email and password are required']);
            exit();
        }

        $db = getDB();
        $stmt = $db->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch();

        if ($user && password_verify($password, $user['password_hash'])) {
            session_start();
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['name'] = $user['name'];
            $_SESSION['role'] = $user['role'];
            echo json_encode(['success' => true, 'message' => 'Login successful']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
        }

    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid action']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
} catch (Exception $e) {
    error_log('Auth API Error: ' . $e->getMessage());
    echo json_encode(['success' => false, 'message' => 'Internal server error']);
}
?>