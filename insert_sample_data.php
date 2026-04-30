<?php
require_once 'includes/db.php';

try {
    $db = getDB();

    // Insert sample admin user
    $db->exec("INSERT INTO users (name, email, password_hash, role) VALUES ('Admin', 'admin@liora.com', '" . password_hash('admin123', PASSWORD_DEFAULT) . "', 'admin')");

    // Insert sample products
    $products = [
        ['Ruby Red Romance', 'Roses', 45.00, 'assets/img/items/roses/rose_5.jpg', 'گولی ڕوبی سوور ڕۆمانس'],
        ['White Heaven Lilies', 'Lilies', 36.00, 'assets/img/items/lilys/lily_7.jpg', 'گولی لیلیی سپی بەهەشت'],
        ['Blush Pink Dream', 'Roses', 40.00, 'assets/img/items/roses/rose_7.jpg', 'گولی پینکی بلاش درێم'],
        ['Simple White Daisy Wrap', 'Daisies', 32.00, 'assets/img/items/daisies/whitedaisy.jpg', 'گولی دەیزی سپی سادە'],
        ['Classic Yellow Sunflower Bouquet', 'Sunflowers', 28.00, 'assets/img/items/sunflowers/sunflower_2.jpg', 'گولی گەرداڵەی زەردی کلاسیک'],
        ['Pink Champagne Orchids', 'Orchids', 70.00, 'assets/img/items/orchids/orchid_5.jpg', 'گولی ئۆرکید پینکی شەمپاین'],
        ['Fairy White Rosie Bouquet', 'Mini Roses', 30.00, 'assets/img/items/minirose/fairywhiterosie.jpg', 'گولی مینی سپی پەری'],
        ['Light Yellow Dream', 'Daffodils', 31.00, 'assets/img/items/daffodils/lightyellowdaffoldils.jpg', 'گولی دەفۆدیل زەردی سووک'],
        ['Modern Buttercup Arrangement', 'Buttercup', 38.00, 'assets/img/items/buttercup/modernbuttercup.jpg', 'گولی باتەرکاپ مۆدێرن']
    ];

    $stmt = $db->prepare("INSERT INTO products (name, category, price, image, kurdish_name, stock, slug) VALUES (?, ?, ?, ?, ?, 10, ?)");
    foreach ($products as $product) {
        $slug = strtolower(str_replace(' ', '-', $product[0]));
        $stmt->execute([$product[0], $product[1], $product[2], $product[3], $product[4], $slug]);
    }

    echo "Sample data inserted successfully!";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>