<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "siddharth";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection error: " . $conn->connect_error);
    }

    $user = $_POST["username"];
    $pass = $_POST["password"];

    $sql = "SELECT * FROM users WHERE username = '$user' AND password = '$pass'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        header("Location: welcome.html");
        exit();
    } else {
        echo "Invalid credentials";
    }

    $conn->close();
?>
