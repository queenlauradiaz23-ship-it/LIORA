-- =============================================
-- LIORA FLOWER SHOP DATABASE SCHEMA
-- MySQL/MariaDB compatible
-- Updated to match project plan
-- =============================================

-- =============================================
-- CREATE DATABASE
-- =============================================
CREATE DATABASE IF NOT EXISTS liora_db;
USE liora_db;

-- =============================================
-- 1. USERS
-- =============================================
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    points INT DEFAULT 0,
    address TEXT,
    phone VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_users_email (email)
);

-- =============================================
-- 2. PRODUCTS
-- =============================================
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(500),
    description TEXT,
    stock INT DEFAULT 0,
    slug VARCHAR(255) UNIQUE,
    kurdish_name VARCHAR(255),
    INDEX idx_products_slug (slug)
);

-- =============================================
-- 3. CART_ITEMS
-- =============================================
CREATE TABLE cart_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    INDEX idx_cart_items_user_id (user_id)
);

-- =============================================
-- 4. WISHLIST_ITEMS
-- =============================================
CREATE TABLE wishlist_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    UNIQUE KEY unique_wishlist (user_id, product_id),
    INDEX idx_wishlist_items_user_id (user_id)
);

-- =============================================
-- 5. ORDERS
-- =============================================
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    address TEXT,
    delivery_status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_orders_user_id (user_id)
);

-- =============================================
-- 6. ORDER_ITEMS
-- =============================================
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    INDEX idx_order_items_order_id (order_id)
);

-- =============================================
-- 7. DELIVERIES
-- =============================================
CREATE TABLE deliveries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    location VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    INDEX idx_deliveries_order_id (order_id)
);
    INDEX idx_reviews_user_id (user_id),
    INDEX idx_reviews_is_verified (is_verified_purchase)
);

-- =============================================
-- 10. DELIVERY_TRACKING
-- =============================================
CREATE TABLE delivery_tracking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'pending',
    current_location VARCHAR(255),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    estimated_delivery_time TIMESTAMP NULL,
    actual_delivery_time TIMESTAMP NULL,
    tracking_number VARCHAR(100) UNIQUE,
    courier_name VARCHAR(100),
    courier_contact VARCHAR(50),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    INDEX idx_delivery_tracking_order_id (order_id),
    INDEX idx_delivery_tracking_status (status),
    INDEX idx_delivery_tracking_tracking_number (tracking_number)
);

-- =============================================
-- 11. EVENTS
-- =============================================
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,
    event_type VARCHAR(50) NOT NULL,
    product_id INT,
    reminder_enabled BOOLEAN DEFAULT TRUE,
    reminder_time TIMESTAMP NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL,
    INDEX idx_events_user_id (user_id),
    INDEX idx_events_event_date (event_date),
    INDEX idx_events_is_completed (is_completed),
    INDEX idx_events_event_type (event_type)
);

-- =============================================
-- END OF SCHEMA
-- =============================================