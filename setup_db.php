<?php
require_once 'includes/db.php';

try {
    $db = getDB();
    $sql = file_get_contents('schema.sql');

    // Split into individual statements
    $statements = array_filter(array_map('trim', explode(';', $sql)));

    foreach ($statements as $statement) {
        if (!empty($statement) && !preg_match('/^--/', $statement)) {
            $db->exec($statement);
        }
    }

    echo "Database schema executed successfully!";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>