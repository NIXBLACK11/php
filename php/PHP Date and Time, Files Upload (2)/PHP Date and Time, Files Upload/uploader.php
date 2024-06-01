<?php
      $file_name = $_FILES['image']['name'];
      $file_size = $_FILES['image']['size'];
      $file_tmp = $_FILES['image']['tmp_name'];
      $file_type=$_FILES['image']['type'];
      $file_error=$_FILES['image']['error'];
      
      if(move_uploaded_file($file_tmp,"images/".$file_name))
	  {
         echo "Success"."<br>";
         echo $file_name."<br>";
         echo $file_size."<br>";
         echo $file_tmp."<br>";
         echo $file_type."<br>";
         echo $file_error;
      }else{
         echo"File could not be uploaded";
      }
?>  