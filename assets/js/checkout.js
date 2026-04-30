const CART_KEY = "liora_cart";

function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function renderCheckout() {
    const container = document.getElementById("checkout-items");
    const subtotalEl = document.getElementById("checkout-subtotal");
    const totalEl = document.getElementById("checkout-total");
    const rewardsEl = document.getElementById("checkout-rewards");

    if (!container || !subtotalEl || !totalEl || !rewardsEl) return;

    const cart = getCart();

    container.innerHTML = "";

    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        container.innerHTML += `
      <tr>
        <td>
          <img src="${item.image}" class="order__img" />
        </td>

        <td>
          <h3 class="table__title">${item.name}</h3>
          <p class="table__quantity">x ${item.quantity}</p>
        </td>

        <td>
          <span class="table__price">$${itemTotal.toFixed(2)}</span>
        </td>
      </tr>
    `;


    });

    // reward system (same as cart)
    const rewards = subtotal * 0.04;
    const total = subtotal - rewards;

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    rewardsEl.textContent = `-$${rewards.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
}

renderCheckout();