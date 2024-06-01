<!DOCTYPE html>
<html>
<body>

<?php
$d=strtotime("10:30pm April 15 2014");
echo "The returned Timestamp is: $d"."<br>";
echo "Created date is " . date("Y-m-d h:i:sa", $d);
?>

</body>
</html>

Output: The return