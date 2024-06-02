<?php
session_start();

if (!isset($_SESSION['last_visited'])) {
    $_SESSION['last_visited'] = date('Y-m-d H:i:s');
} else {
    echo "Last visited date-time: " . $_SESSION['last_visited'];
    $_SESSION['last_visited'] = date('Y-m-d H:i:s');
}
?>
