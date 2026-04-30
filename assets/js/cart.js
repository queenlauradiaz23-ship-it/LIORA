/**
 * LIORA Universal Cart - Now with server sync!
 */

const CONFIG = {
    FREE_SHIPPING: 75,
    DISCOUNT_MIN: 50,
    DISCOUNT_PERCENT: 0.10,
    SHIPPING_COST: 10,
    STORAGE_KEY: 'liora_cart'
};

let cart = [];
let isLoggedIn = false;

// Check if user is logged in
function checkLoginStatus() {
    // Simple check - you might need to adjust based on your session handling
    return document.querySelector('.header__top-action a[href="logout.php"]') !== null;
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', function() {
    isLoggedIn = checkLoginStatus();
    if (isLoggedIn) {
        loadCartFromServer();
    } else {
        loadCartFromStorage();
    }
    updateBadge();
    setupAddButtons();

    // If on cart page, render it
    if (document.getElementById('cart-items-container')) {
        renderCart();
    }
});

// ========== LOAD/SAVE ==========
function loadCartFromStorage() {
    try {
        cart = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY)) || [];
    } catch(e) {
        cart = [];
    }
}

function loadCartFromServer() {
    fetch('/api/cart.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'list' })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            cart = data.items.map(item => ({
                id: item.product_id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: item.quantity
            }));
            updateBadge();
            if (document.getElementById('cart-items-container')) {
                renderCart();
            }
        }
    })
    .catch(error => console.error('Error loading cart:', error));
}

function saveCart() {
    if (isLoggedIn) {
        // Cart is saved on server via API calls
    } else {
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(cart));
    }
}

// ========== ADD TO CART ==========
function addToCart(button) {
    // Show loading
    button.innerHTML = '<i class="fi fi-rs-spinner"></i>';
    button.disabled = true;

    // Read product info from the button's data attributes
    const card = button.closest('.product__item') || button.closest('[data-product]');
    
    if (!card) {
        alert('Error: Could not find product info!');
        button.innerHTML = '<i class="fi fi-rs-shopping-bag-add"></i>';
        button.disabled = false;
        return;
    }
    
    // Get data from attributes (with fallbacks)
    const id = card.dataset.id || card.dataset.productId || 'product-' + Date.now();
    const name = card.dataset.name || card.querySelector('.product__title')?.textContent || 'Unknown Product';
    const price = parseFloat(card.dataset.price) || parseFloat(card.querySelector('.new__price')?.textContent?.replace('$','')) || 0;
    const image = card.dataset.image || card.querySelector('img')?.src || '';
    const category = card.dataset.category || 'flowers';
    
    // Get quantity
    const qtyInput = card.querySelector('.qty-input') || card.querySelector('input[type="number"]');
    const quantity = parseInt(qtyInput?.value) || 1;

    if (isLoggedIn) {
        // Use API
        fetch('/api/cart.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'add',
                product_id: id,
                quantity: quantity
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showMessage(name + ' added to cart! 🌷', 'success');
                loadCartFromServer(); // Refresh cart
            } else {
                showMessage(data.message || 'Error adding to cart', 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage('Error adding to cart', 'error');
        })
        .finally(() => {
            button.innerHTML = '<i class="fi fi-rs-shopping-bag-add"></i>';
            button.disabled = false;
        });
    } else {
        // Use localStorage
        const existing = cart.find(item => item.id === id);
        
        if (existing) {
            existing.quantity += quantity;
            showMessage(name + ' updated! Now ' + existing.quantity + ' in cart 🌸', 'success');
        } else {
            cart.push({
                id: id,
                name: name,
                price: price,
                image: image,
                category: category,
                quantity: quantity
            });
            showMessage(name + ' added to cart! 🌷', 'success');
        }
        
        saveCart();
        updateBadge();
        animateCart();
        button.innerHTML = '<i class="fi fi-rs-shopping-bag-add"></i>';
        button.disabled = false;

// ========== REMOVE FROM CART ==========
function removeFromCart(id) {
    if (isLoggedIn) {
        fetch('/api/cart.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'remove',
                product_id: id
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showMessage('Item removed 🗑️');
                loadCartFromServer();
            } else {
                showMessage(data.message || 'Error removing item');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage('Error removing item');
        });
    } else {
        cart = cart.filter(item => item.id !== id);
        saveCart();
        updateBadge();
        renderCart();
        showMessage('Item removed 🗑️');
    }
}

// ========== UPDATE QUANTITY ==========
function changeQty(id, change) {
    if (isLoggedIn) {
        const item = cart.find(item => item.id === id);
        if (!item) return;

        const newQty = item.quantity + change;
        if (newQty < 1) {
            removeFromCart(id);
            return;
        }
        if (newQty > 99) return;

        fetch('/api/cart.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'update',
                product_id: id,
                quantity: newQty
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                loadCartFromServer();
            } else {
                showMessage(data.message || 'Error updating quantity');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage('Error updating quantity');
        });
    } else {
        const item = cart.find(item => item.id === id);
        if (!item) return;

        item.quantity += change;

        if (item.quantity < 1) {
            removeFromCart(id);
            return;
        }

        if (item.quantity > 99) item.quantity = 99;

        saveCart();
        updateBadge();
        renderCart();
    }
}
}

function setQty(id, newQty) {
    newQty = parseInt(newQty);
    if (newQty < 1) {
        removeFromCart(id);
        return;
    }
    
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = Math.min(newQty, 99);
        saveCart();
        renderCart();
        updateBadge();
    }
}

// ========== CLEAR CART ==========
function clearCart() {
    if (cart.length === 0) return;
    if (!confirm('Clear your cart? 🌸')) return;
    
    cart = [];
    saveCart();
    updateBadge();
    renderCart();
    showMessage('Cart cleared! 🌱');
}

// ========== RENDER CART PAGE ==========
function renderCart() {
    const container = document.getElementById('cart-items');
    const emptyMsg = document.getElementById('empty-cart');
    const cartContent = document.getElementById('cart-content');
    
    if (!container) return; // Not on cart page
    
    if (cart.length === 0) {
        if (emptyMsg) emptyMsg.style.display = 'block';
        if (cartContent) cartContent.style.display = 'none';
        updateTotals(0, 0, 0, 0);
        return;
    }
    
    if (emptyMsg) emptyMsg.style.display = 'none';
    if (cartContent) cartContent.style.display = 'block';
    
    let html = '';
    let subtotal = 0;
    
    cart.forEach((item, i) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        html += `
<div class="product__item">

  <div class="product__banner">
    <a href="details.html?id=${item.id}" class="product__images">
      <img src="${item.image}" class="product__img default">
      <img src="${item.image}" class="product__img hover">
    </a>

    <div class="product__actions">
      <button onclick="removeFromCart('${item.id}')" class="action__btn">
        <i class="fi fi-rs-trash"></i>
      </button>
    </div>
  </div>

  <div class="product__content">

    <span class="product__category">${item.category}</span>

    <h3 class="product__title">${item.name}</h3>

    <div class="product__price flex">
      <span class="new__price">$${item.price}</span>
    </div>

    <!-- QUANTITY -->
    <div class="quantity-control">
      <button onclick="changeQty('${item.id}', -1)" class="qty-btn">-</button>
      <input type="number" value="${item.quantity}" onchange="setQty('${item.id}', this.value)" class="quantity-input">
      <button onclick="changeQty('${item.id}', 1)" class="qty-btn">+</button>
    </div>

    <!-- SUBTOTAL -->
    <div class="product__price flex" style="margin-top:6px;">
      <span class="new__price">$${(item.price * item.quantity).toFixed(2)}</span>
    </div>

  </div>

</div>
`;
    });
    
    container.innerHTML = html;
    
    // Calculate totals
    const discount = subtotal >= CONFIG.DISCOUNT_MIN ? subtotal * CONFIG.DISCOUNT_PERCENT : 0;
    const shipping = subtotal >= CONFIG.FREE_SHIPPING ? 0 : CONFIG.SHIPPING_COST;
    const rewards = Math.floor(subtotal * 0.04);
    const total = subtotal - discount - rewards + shipping;
    
    updateTotals(subtotal, discount, shipping, total);
    updateProgress(subtotal);
}

// ========== UPDATE TOTALS ==========
function updateTotals(subtotal, discount, shipping, total) {
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };
    
    setText('subtotal', '$' + subtotal.toFixed(2));
    setText('discount', '-$' + discount.toFixed(2));
    setText('shipping', shipping === 0 ? 'FREE 🚚' : '$' + shipping.toFixed(2));
    setText('rewards', '-$' + (subtotal * 0.04).toFixed(2));
    setText('total', '$' + total.toFixed(2));
    
    const discountRow = document.getElementById('discount-row');
    if (discountRow) discountRow.style.display = discount > 0 ? 'table-row' : 'none';
}

function updateProgress(subtotal) {
    const bar = document.getElementById('progress-bar');
    const text = document.getElementById('progress-text');
    
    if (!bar || !text) return;
    
    if (subtotal >= CONFIG.FREE_SHIPPING) {
        bar.style.width = '100%';
        bar.style.background = '#4caf50';
        text.textContent = '✅ FREE shipping unlocked!';
    } else {
        const needed = CONFIG.FREE_SHIPPING - subtotal;
        const pct = (subtotal / CONFIG.FREE_SHIPPING) * 100;
        bar.style.width = pct + '%';
        bar.style.background = '#e89bc2';
        text.textContent = 'Add $' + needed.toFixed(2) + ' more for FREE shipping';
    }
}

// ========== CHECKOUT ==========
function goCheckout(e) {
    if (cart.length === 0) {
        e.preventDefault();
        alert('Your cart is empty! Add flowers first 🌸');
        return false;
    }
    
    localStorage.setItem('liora_checkout', JSON.stringify({
        items: cart,
        totals: {
            subtotal: cart.reduce((s, i) => s + i.price * i.quantity, 0)
        }
    }));
    
    return true;
}

// ========== MISSING FUNCTIONS FOR CART.HTML ==========
function updateCartQuantities() {
    // Update quantities in cart
    const quantityInputs = document.querySelectorAll('.quantity-input');
    quantityInputs.forEach((input, index) => {
        const newQty = parseInt(input.value) || 1;
        if (cart[index]) {
            cart[index].quantity = newQty;
        }
    });
    saveCart();
    renderCart();
}

function applyCoupon() {
    const couponCode = document.getElementById('coupon-code').value.trim().toUpperCase();
    if (couponCode === 'LIORA10') {
        alert('Coupon applied! 10% discount 🌸');
        // Implement discount logic
    } else {
        alert('Invalid coupon code');
    }
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    window.location.href = 'checkout.html';
}

// ========== UI HELPERS ==========
function updateBadge() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-badge');
    
    badges.forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'inline-flex' : 'none';
    });
}

function animateCart() {
    const icon = document.querySelector('a[href="cart.html"]');
    if (icon) {
        icon.style.transform = 'scale(1.3)';
        setTimeout(() => icon.style.transform = 'scale(1)', 200);
    }
}

function showMessage(msg) {
    // Simple alert or custom toast
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = msg;
        toast.style.display = 'block';
        toast.style.opacity = '1';
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.style.display = 'none', 300);
        }, 2500);
    } else {
        // Fallback: temporary div
        const div = document.createElement('div');
        div.style.cssText = 'position:fixed; top:20px; right:20px; background:#c14e8f; color:white; padding:15px 20px; border-radius:10px; z-index:9999; box-shadow:0 4px 15px rgba(0,0,0,0.2);';
        div.textContent = msg;
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 3000);
    }
}

// ========== SETUP BUTTONS ==========
function setupAddButtons() {
    // Find ALL "Add to Cart" buttons on the page
    const buttons = document.querySelectorAll('.add-to-cart-btn, [data-add-cart]');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            addToCart(this);
        });
    });
}

// ========== EXPORT ==========
window.LioraCart = {
    add: addToCart,
    remove: removeFromCart,
    clear: clearCart,
    getCount: () => cart.reduce((s, i) => s + i.quantity, 0),
    getItems: () => [...cart]
};