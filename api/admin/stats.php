<?php
require_once '../../includes/db.php';
require_once '../../includes/functions.php';

header('Content-Type: application/json');

session_start();
if (!isAdmin()) {
    echo json_encode(['success' => false, 'message' => 'Not authorized']);
    exit();
}

$db = getDB();

// Get most sold flowers
$stmt = $db->prepare("
    SELECT p.name, SUM(oi.quantity) as total_sold
    FROM order_items oi
    JOIN products p ON oi.product_id = p.id
    GROUP BY p.id, p.name
    ORDER BY total_sold DESC
    LIMIT 10
");
$stmt->execute();
$mostSold = $stmt->fetchAll();

// Get total sales
$stmt = $db->prepare("SELECT SUM(total) as total_sales FROM orders WHERE status = 'completed'");
$stmt->execute();
$totalSales = $stmt->fetch()['total_sales'] ?? 0;

// Get order counts
$stmt = $db->prepare("SELECT COUNT(*) as total_orders FROM orders");
$stmt->execute();
$totalOrders = $stmt->fetch()['total_orders'];

echo json_encode([
    'success' => true,
    'most_sold' => $mostSold,
    'total_sales' => $totalSales,
    'total_orders' => $totalOrders
]);
?>