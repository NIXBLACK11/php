<!DOCTYPE html>
<html>
<body>
<h4>This example formats today's date in three different ways:</h4>
<?php
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("l") . "<br>";
echo "Date is " . date("Y/m/d",1567878998);    // Date is 2019/09/07 
?>

</body>
</html>
