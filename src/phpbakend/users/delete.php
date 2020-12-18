<?php 

    header("Access-Control-Allow-Origin: *");

    $host = "localhost";
    $username = "root";
    $password = "";
    $db = "test";

    $con = mysqli_connect($host, $username, $password, $db);

    $id = $_POST["user_id"];

    $sql = "DELETE FROM users WHERE user_id = $id";
    $del = mysqli_query($con, $sql);
    if($del) echo "success";

    mysqli_close($con);

?>