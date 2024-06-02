<!DOCTYPE html>
<html>
<head>
    <title>Books</title>
</head>
<body>
    <form action="saveData.php" method="POST">
        <fieldset>
            <legend>Enter books information</legend>
            <label for="number">Number: </label>
            <input type="number" id="number" name="number" required><br><br>
            <label for="title">Title: </label>
            <input type="text" id="title" name="title" required><br><br>
            <label for="authors">Authors: </label>
            <input type="text" id="authors" name="authors" required><br><br>
            <label for="edition">Edition: </label>
            <input type="number" id="edition" name="edition" required><br><br>
            <input type="submit" value="Submit">
        </fieldset>
    </form>
    <h2>Books List</h2>
    <table border="1">
        <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Authors</th>
            <th>Edition</th>
        </tr>
        <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "siddharth";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die("Connection error: " . $conn->connect_error);
        }

        $sql = "SELECT * FROM books";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row["number"] . "</td>";
                echo "<td>" . $row["title"] . "</td>";
                echo "<td>" . $row["authors"] . "</td>";
                echo "<td>" . $row["edition"] . "</td>";
                echo "</tr>";
            }
        } else {
            echo "<tr>";
            echo "<td colspan='4'>No results</td>";
            echo "</tr>";
        }

        $conn->close();
        ?>
    </table>
</body>
</html>
