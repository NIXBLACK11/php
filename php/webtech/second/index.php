<!DOCTYPE html>
<html>
<head>
    <title>View Department</title>
</head>
<body>
    <h1>Department Information</h1>
    <p>hello</p>
    <table border='1'>
        <tr>
            <th>Field</th>
            <th>Name</th>
            <th>Dno</th>
            <th>People</th>
        </tr>
        <?php
        session_start();

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "siddharth";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if($conn->connect_error) {
            die("Connection error: " . $conn->connect_error);
        }

        // SQL query to fetch data from the 'pers' table
        $sql = "SELECT * FROM pers";
        $result = $conn->query($sql);

        // Check if there are any results
        if ($result->num_rows > 0) {
            // Output data of each row
            while($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row["field"]. "</td><td>" . $row["name"]. "</td><td>" . $row["dno"]."</td><td>" . $row["people"]."</td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='4'>0 results</td></tr>";
        }

        // Close the connection
        $conn->close();
        ?> 
    </table>
</body>
</html>
