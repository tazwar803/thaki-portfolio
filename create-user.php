<?php
declare(strict_types=1);

require __DIR__ . '/../config/database.php';
require __DIR__ . '/../includes/validation.php';

if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}

function ask(string $label): string
{
    fwrite(STDOUT, $label);
    return trim((string) fgets(STDIN));
}

echo "Create a Coffee O'Clock demo staff account.\n";
$name = ask('Full name: ');
$email = normalize_email(ask('Email address: '));
$password = ask('Password (minimum 8 characters): ');

if (strlen($name) < 2 || strlen($name) > 80 || !valid_login_input($email, $password)
    || strlen($password) < 8) {
    fwrite(STDERR, "Invalid input. Use a 2-80 character name, valid email, and password of at least 8 characters.\n");
    exit(1);
}

try {
    $statement = database_connection()->prepare(
        'INSERT INTO users (full_name, email, password_hash)
         VALUES (:full_name, :email, :password_hash)'
    );
    $statement->execute([
        'full_name' => $name,
        'email' => $email,
        'password_hash' => password_hash($password, PASSWORD_DEFAULT),
    ]);
    echo "Demo account created. You can now sign in on the website.\n";
} catch (PDOException $exception) {
    if ($exception->getCode() === '23000') {
        fwrite(STDERR, "An account with that email already exists.\n");
        exit(1);
    }
    fwrite(STDERR, "Could not create account: " . $exception->getMessage() . "\n");
    exit(1);
}
