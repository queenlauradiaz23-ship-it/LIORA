<?php
// Database connection and basic setup
require_once 'includes/db.php';
require_once 'includes/functions.php';

header('Content-Type: application/json');

try {
    $db = getDB();
    
    // Test connection
    $stmt = $db->query("SELECT 1");
    
    echo json_encode([
        'success' => true,
        'message' => 'Database connection is working',
        'php_version' => phpversion(),
        'pdo_drivers' => PDO::getAvailableDrivers()
    ]);
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database connection failed: ' . $e->getMessage()
    ]);
}
?>