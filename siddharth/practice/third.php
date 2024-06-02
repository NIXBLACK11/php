<!DOCTYPE html>
<html>
    <head>
        <title>Session count</title>
    </head>
    <body>
        <h1>Session count</h1>
        <?php
            session_start();

            if(!isset($_SESSION["session_count"])) {
                $_SESSION["session_count"] = 1;
            } else {
                $_SESSION["session_count"]++;
            }
            echo "No of sessions:" . $_SESSION["session_count"];
        ?>
    </body>
</html>