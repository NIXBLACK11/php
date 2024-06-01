<!DOCTYPE html>
<?php
setcookie("test_cookie", "test", time() + 3600, '/');
?>
<html>
<body>
<?php
if(count($_COOKIE) > 0) {
    echo "Cookies are enabled.";
    Echo count($_COOKIE);
} else {
    echo "Cookies are disabled.";
}
?>
</body>
</html>