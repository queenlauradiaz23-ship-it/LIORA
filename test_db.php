<?php
require_once 'includes/db.php';

try {
    $db = getDB();
    echo "Database connection successful!";
} catch (Exception $e) {
    echo "Database connection failed: " . $e->getMessage();
}
?>