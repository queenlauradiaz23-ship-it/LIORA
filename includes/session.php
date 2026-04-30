<?php
session_start();

// Regenerate session ID for security
if (!isset($_SESSION['initiated'])) {
    session_regenerate_id(true);
    $_SESSION['initiated'] = true;
}

// Check for session timeout (30 minutes)
if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > 1800)) {
    session_unset();
    session_destroy();
    header('Location: login-register.php?timeout=1');
    exit();
}
$_SESSION['last_activity'] = time();
?>