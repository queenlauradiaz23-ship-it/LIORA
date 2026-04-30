// ===== LOGIN & REGISTER VALIDATION =====

// Select forms
const loginForm = document.querySelector(".login form");
const registerForm = document.querySelector(".register form");

// ================= LOGIN =================
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value.trim();

    // Validation
    if (!email || !password) {
      alert("🌸 Please fill in all fields!");
      return;
    }

    if (!validateEmail(email)) {
      alert("💌 Please enter a valid email!");
      return;
    }

    if (password.length < 6) {
      alert("🔒 Password must be at least 6 characters!");
      return;
    }

    let existingUser = JSON.parse(localStorage.getItem("lioraUser")) || {};
    if (!existingUser.email || existingUser.email !== email) {
      existingUser = {
        username: email.split('@')[0] || 'Customer',
        email: email,
        password: password
      };
    }
    localStorage.setItem("lioraUser", JSON.stringify(existingUser));
    alert("✅ Login successful (demo only)");
  });
}

// ================= REGISTER =================
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = registerForm.querySelector('input[type="text"]').value.trim();
    const email = registerForm.querySelector('input[type="email"]').value.trim();
    const password = registerForm.querySelectorAll('input[type="password"]')[0].value.trim();
    const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value.trim();

    // Validation
    if (!username || !email || !password || !confirmPassword) {
      alert("🌸 Please fill in all fields!");
      return;
    }

    if (username.length < 3) {
      alert("👤 Username must be at least 3 characters!");
      return;
    }

    if (!validateEmail(email)) {
      alert("💌 Invalid email format!");
      return;
    }

    if (password.length < 6) {
      alert("🔒 Password must be at least 6 characters!");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    const lioraUser = {
      username: username,
      email: email,
      password: password
    };

    localStorage.setItem("lioraUser", JSON.stringify(lioraUser));

    alert("🎉 Registration successful (demo only)");
  });
}

// ================= EMAIL VALIDATION =================
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
