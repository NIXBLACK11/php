<!DOCTYPE html>
<html>
<body>

<?php
$d=mktime(11, 14, 54, 8, 12, 2014);
echo "The returned Timestamp is: $d"."<br>";
echo "Created date is " . date("d-m-Y h:i:sa", $d);
?>

</body>
</html>
