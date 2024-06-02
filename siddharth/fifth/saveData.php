<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "siddharth";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection error: " . $conn->connect_error);
}

$number = $_POST["number"];
$title = $_POST["title"];
$authors = $_POST["authors"];
$edition = $_POST["edition"];

$sql = "INSERT INTO books (number, title, authors, edition) VALUES ('$number', '$title', '$authors', '$edition')";
$stmt = $conn->query($sql);

if ($stmt === TRUE) {
    echo "New record created successfully";
    header("Location: index.php");
} else {
    echo "Error: " . $stmt->error;
}

$conn->close();
?>
