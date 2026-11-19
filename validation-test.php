<?php
declare(strict_types=1);

require __DIR__ . '/../includes/validation.php';

$checks = [
    'valid email and password' => valid_login_input('staff@example.com', 'coffee123'),
    'email is normalized' => normalize_email('  STAFF@EXAMPLE.COM ') === 'staff@example.com',
    'invalid email rejected' => !valid_login_input('not-an-email', 'coffee123'),
    'empty password rejected' => !valid_login_input('staff@example.com', ''),
    'non-string input rejected' => !valid_login_input([], null),
];

$failed = false;
foreach ($checks as $name => $passed) {
    echo ($passed ? 'PASS' : 'FAIL') . " - {$name}\n";
    $failed = $failed || !$passed;
}

exit($failed ? 1 : 0);
