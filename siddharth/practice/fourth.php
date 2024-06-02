<!DOCTYPE html>
<html>
    <head>
        <title>Time</title>
    </head>
    <body>
        <h1>Time</h1>
        <?php
            session_start();

            if(!isset($_SESSION["time"])) {
                $_SESSION["time"] = date("d/m/y h:i:s");
            } else {
                echo $_SESSION["time"];
                $_SESSION["time"] = date("d/m/y h:i:s");
            }
        ?>
    </body>
</html>