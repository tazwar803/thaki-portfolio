<?php
declare(strict_types=1);

require __DIR__ . '/includes/bootstrap.php';
require __DIR__ . '/includes/auth.php';

require_signed_in();
$csrfToken = csrf_token();
$fullName = (string) $_SESSION['full_name'];
$email = (string) $_SESSION['email'];
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#063b28">
    <title>Signed in | Coffee O'Clock</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="dashboard-page">
    <header class="topbar">
        <a class="topbar-brand" href="dashboard.php">
            <img src="assets/images/coffee-o-clock-logo.jpg" alt="">
            <span>Coffee O'Clock</span>
        </a>
        <form action="actions/logout.php" method="post">
            <input type="hidden" name="csrf_token"
                   value="<?= htmlspecialchars($csrfToken, ENT_QUOTES, 'UTF-8') ?>">
            <button class="button button-outline" type="submit">Sign out</button>
        </form>
    </header>

    <main class="welcome-card">
        <span class="welcome-icon" aria-hidden="true">✓</span>
        <p class="eyebrow">You are signed in</p>
        <h1>Good to see you, <?= htmlspecialchars($fullName, ENT_QUOTES, 'UTF-8') ?>.</h1>
        <p class="welcome-copy">
            Your Coffee O'Clock staff account is active.
        </p>
        <p class="account-email"><?= htmlspecialchars($email, ENT_QUOTES, 'UTF-8') ?></p>
        <div class="milestone-note">
            This update demonstrates account access only. Menu, inventory, and sales
            features will be introduced in later project updates.
        </div>
    </main>
</body>
</html>
