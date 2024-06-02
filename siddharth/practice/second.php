<!DOCTYPE html>
<html>
    <head>
        <title>Data of departments</title>
    </head>
    <body>
        <h1>Departments</h1>
        <table border="1" cellspacing="2">
            <tr>
                <th>Department Type</th>
                <th>Department Name</th>
                <th>Department no.</th>
                <th>People no.</th>
            </tr>

            <?php
                $servername = "localhost";
                $username = "root";
                $password = "";
                $dbname = "siddharth";

                $conn = new mysqli($servername, $username, $password, $dbname);

                if($conn->connect_error) {
                    die("Error in connection" . $conn->connect_error);
                }

                $sql = "SELECT * FROM pers WHERE 1=1;";
                $result = $conn->query($sql);

                if($result->num_rows>0) {
                    while($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $row["field"] ."</td>";
                        echo "<td>" . $row["name"] ."</td>";
                        echo "<td>" . $row["dno"] ."</td>";
                        echo "<td>" . $row["people"] ."</td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='4'>0 results</td></tr>";
                }
            ?>
        </table>
    </body>
</html>