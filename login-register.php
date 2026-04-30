<?php
$page_title = 'Liora — Login / Register';
require_once 'includes/header.php';

// Handle form submissions
$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $csrf_token = $_POST['csrf_token'] ?? '';
    if (!verifyCSRFToken($csrf_token)) {
        $message = 'Invalid request';
    } else {
        $action = $_POST['action'] ?? '';
        if ($action === 'register') {
            // Register logic
            $name = sanitize($_POST['name'] ?? '');
            $email = sanitize($_POST['email'] ?? '');
            $password = $_POST['password'] ?? '';
            $phone = sanitize($_POST['phone'] ?? '');
            $address = sanitize($_POST['address'] ?? '');

            if (empty($name) || empty($email) || empty($password)) {
                $message = 'All fields are required';
            } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $message = 'Invalid email format';
            } else {
                $db = getDB();
                // Check if email exists
                $stmt = $db->prepare("SELECT id FROM users WHERE email = ?");
                $stmt->execute([$email]);
                if ($stmt->fetch()) {
                    $message = 'Email already exists';
                } else {
                    // Hash password
                    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
                    // Insert user
                    $stmt = $db->prepare("INSERT INTO users (name, email, password_hash, phone, address) VALUES (?, ?, ?, ?, ?)");
                    if ($stmt->execute([$name, $email, $hashedPassword, $phone, $address])) {
                        $message = 'Registration successful! Please login.';
                    } else {
                        $message = 'Registration failed';
                    }
                }
            }
        } elseif ($action === 'login') {
            // Login logic
            $email = sanitize($_POST['email'] ?? '');
            $password = $_POST['password'] ?? '';
            $remember = isset($_POST['remember']);

            if (empty($email) || empty($password)) {
                $message = 'Email and password are required';
            } else {
                $db = getDB();
                $stmt = $db->prepare("SELECT * FROM users WHERE email = ?");
                $stmt->execute([$email]);
                $user = $stmt->fetch();

                if ($user && password_verify($password, $user['password_hash'])) {
                    $_SESSION['user_id'] = $user['id'];
                    $_SESSION['name'] = $user['name'];
                    $_SESSION['role'] = $user['role'];

                    // Handle remember me
                    if ($remember) {
                        $token = bin2hex(random_bytes(32));
                        setcookie('remember_token', $token, time() + (30 * 24 * 60 * 60), '/', '', false, true); // 30 days
                        // Store token in database (you might want to add a remember_tokens table)
                    }

                    header('Location: index.php');
                    exit();
                } else {
                    $message = 'Invalid credentials';
                }
            }
        }
    }
}
?>

<main class="main">
  <!--=============== LOGIN-REGISTER ===============-->
  <section class="login section--lg">
    <div class="login__container container grid">
      <div class="login__content">
        <img
          src="./assets/img/login-register.jpg"
          alt="image"
          class="login__img"
        />

        <div class="login__lables">
          <h1 class="login__title">Welcome to Liora</h1>
          <span class="login__subtitle">Fresh flowers for every special moment</span>
        </div>
      </div>

      <form class="login__form" id="loginForm" method="POST">
        <input type="hidden" name="action" value="login">
        <input type="hidden" name="csrf_token" value="<?php echo generateCSRFToken(); ?>">
        <h2 class="login__title-form">Log In</h2>

        <?php if ($message): ?>
          <div class="message"><?php echo htmlspecialchars($message); ?></div>
        <?php endif; ?>

        <div class="login__group">
          <div>
            <label for="login-email" class="login__label">Email</label>
            <input
              type="email"
              placeholder="Write your email"
              id="login-email"
              name="email"
              class="login__input"
              required
            />
          </div>

          <div>
            <label for="login-pass" class="login__label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="login-pass"
              name="password"
              class="login__input"
              required
            />
          </div>
        </div>

        <div>
          <span class="login__forgot">
            <a href="#">Forgot password?</a>
          </span>
        </div>

        <div class="login__remember">
          <input type="checkbox" id="remember" name="remember" />
          <label for="remember">Remember me</label>
        </div>

        <button type="submit" class="login__button">Log In</button>

        <button type="button" class="login__button login__button--google">
          <img src="./assets/img/icon-google.png" alt="google icon" />
          Log In with Google
        </button>

        <span class="login__switch">
          Don't have an account?
          <button type="button" class="login__switch-btn" id="switchToRegister">
            Create account
          </button>
        </span>
      </form>

      <form class="login__form login__form--register" id="registerForm" method="POST" style="display: none;">
        <input type="hidden" name="action" value="register">
        <input type="hidden" name="csrf_token" value="<?php echo generateCSRFToken(); ?>">
        <h2 class="login__title-form">Create Account</h2>

        <div class="login__group">
          <div>
            <label for="register-name" class="login__label">Name</label>
            <input
              type="text"
              placeholder="Write your name"
              id="register-name"
              name="name"
              class="login__input"
              required
            />
          </div>

          <div>
            <label for="register-email" class="login__label">Email</label>
            <input
              type="email"
              placeholder="Write your email"
              id="register-email"
              name="email"
              class="login__input"
              required
            />
          </div>

          <div>
            <label for="register-phone" class="login__label">Phone</label>
            <input
              type="tel"
              placeholder="Write your phone"
              id="register-phone"
              name="phone"
              class="login__input"
            />
          </div>

          <div>
            <label for="register-address" class="login__label">Address</label>
            <textarea
              placeholder="Write your address"
              id="register-address"
              name="address"
              class="login__input"
            ></textarea>
          </div>

          <div>
            <label for="register-pass" class="login__label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              id="register-pass"
              name="password"
              class="login__input"
              required
            />
          </div>
        </div>

        <button type="submit" class="login__button">Create Account</button>

        <span class="login__switch">
          Already have an account?
          <button type="button" class="login__switch-btn" id="switchToLogin">
            Log In
          </button>
        </span>
      </form>
    </div>
  </section>
</main>

<script>
  // Switch between login and register forms
  document.getElementById('switchToRegister').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
  });

  document.getElementById('switchToLogin').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  });
</script>

<?php require_once 'includes/footer.php'; ?>