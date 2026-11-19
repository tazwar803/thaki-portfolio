<?php
declare(strict_types=1);

function require_signed_in(): void
{
    if (empty($_SESSION['user_id'])) {
        header('Location: index.php');
        exit;
    }
}
