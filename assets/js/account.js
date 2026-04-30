document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("lioraUser"));

  const popup = document.getElementById("login-popup");
  const btn = document.getElementById("go-login-btn");

  // ================= PROTECTION =================
  if (!user) {
    if (popup) {
      popup.style.display = "flex";

      if (btn) {
        btn.addEventListener("click", () => {
          window.location.href = "login-register.html";
        });
      }
    }
    return; // STOP everything else
  }

  // ================= SHOW USER DATA =================
  const dashboardTitle = document.querySelector("#dashboard .tab__header");
  if (dashboardTitle) {
    dashboardTitle.textContent = `Hello ${user.username} 🌸`;
  }

  // ================= TAB SWITCHING =================
  const tabs = document.querySelectorAll(".account__tab");
  const contents = document.querySelectorAll(".tab__content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active from all
      tabs.forEach(t => t.classList.remove("active-tab"));
      contents.forEach(c => c.classList.remove("active-tab"));

      // Activate clicked tab
      tab.classList.add("active-tab");

      const target = tab.getAttribute("data-target");
      if (target) {
        const section = document.querySelector(target);
        if (section) section.classList.add("active-tab");
      }
    });
  });

  // ================= LOGOUT =================
  const logoutTab = Array.from(tabs).find(tab => 
    tab.textContent.toLowerCase().trim().includes("logout")
  );

  if (logoutTab) {
    logoutTab.addEventListener("click", () => {
      localStorage.removeItem("lioraUser");
      alert("👋 Logged out successfully!");
      window.location.href = "login-register.html";
    });
  }

  // ================= DELETE ORDER =================
  const ordersTbody = document.getElementById("orders-tbody");
  const noOrdersMsg = document.getElementById("no-orders");

  if (ordersTbody) {
    ordersTbody.addEventListener("click", function (e) {
      const deleteBtn = e.target.closest(".delete__order");
      if (!deleteBtn) return;

      const row = deleteBtn.closest("tr");
      const orderId = row.getAttribute("data-order-id");

      if (confirm("🗑️ Are you sure you want to remove this order?")) {
        row.remove();

        // Check if no orders left
        if (ordersTbody.children.length === 0) {
          if (noOrdersMsg) noOrdersMsg.style.display = "block";
        }

        // Optional: store deleted orders in localStorage to persist
        let deletedOrders = JSON.parse(localStorage.getItem("lioraDeletedOrders")) || [];
        if (orderId && !deletedOrders.includes(orderId)) {
          deletedOrders.push(orderId);
          localStorage.setItem("lioraDeletedOrders", JSON.stringify(deletedOrders));
        }
      }
    });
  }

  // ================= UPDATE PROFILE =================
  const profileForm = document.querySelector("#update-profile form");

  if (profileForm) {
    const firstNameInput = profileForm.querySelector('input[placeholder="First Name"]');
    const lastNameInput  = profileForm.querySelector('input[placeholder="Last Name"]');
    const usernameInput  = profileForm.querySelector('input[placeholder="Username"]');
    const emailInput     = profileForm.querySelector('input[type="email"]');

    // Prefill safely
    if (firstNameInput) firstNameInput.value = user.firstName || "";
    if (lastNameInput)  lastNameInput.value  = user.lastName  || "";
    if (usernameInput)  usernameInput.value  = user.username  || "";
    if (emailInput)     emailInput.value     = user.email     || "";

    profileForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const firstName = firstNameInput ? firstNameInput.value.trim() : "";
      const lastName  = lastNameInput  ? lastNameInput.value.trim()  : "";
      const username  = usernameInput  ? usernameInput.value.trim()  : "";
      const email     = emailInput     ? emailInput.value.trim()     : "";

      if (!username || !email) {
        alert("⚠️ Username and email are required!");
        return;
      }

      const currentUser = JSON.parse(localStorage.getItem("lioraUser")) || {};
      const updatedUser = { 
        ...currentUser, 
        firstName, 
        lastName, 
        username, 
        email 
      };

      localStorage.setItem("lioraUser", JSON.stringify(updatedUser));

      alert("✅ Profile updated successfully!");

      // Update dashboard title live
      if (dashboardTitle) {
        dashboardTitle.textContent = `Hello ${username} 🌸`;
      }
    });
  }

  // ================= CHANGE PASSWORD =================
  const passwordForm = document.querySelector("#change-password form");

  if (passwordForm) {
    passwordForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const passwordInputs = passwordForm.querySelectorAll('input[type="password"]');

      if (passwordInputs.length < 3) {
        alert("🔒 Password form is incomplete!");
        return;
      }

      const [currentPassInput, newPassInput, confirmPassInput] = passwordInputs;

      const currentPass = currentPassInput.value;
      const newPass     = newPassInput.value;
      const confirmPass = confirmPassInput.value;

      const storedUser = JSON.parse(localStorage.getItem("lioraUser")) || {};

      if (currentPass !== storedUser.password) {
        alert("❌ Current password is incorrect!");
        return;
      }

      if (newPass.length < 6) {
        alert("🔒 New password must be at least 6 characters!");
        return;
      }

      if (newPass !== confirmPass) {
        alert("❌ New passwords do not match!");
        return;
      }

      storedUser.password = newPass;
      localStorage.setItem("lioraUser", JSON.stringify(storedUser));

      alert("🔐 Password updated successfully!");

      // Clear inputs
      currentPassInput.value = "";
      newPassInput.value     = "";
      confirmPassInput.value = "";
    });
  }
});