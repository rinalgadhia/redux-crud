<?php 

    header("Access-Control-Allow-Origin: *");

    $host = "localhost";
    $username = "root";
    $password = "";
    $db = "test";

    $con = mysqli_connect($host, $username, $password, $db);

    $userID = $_POST['user_id'];
    $user_name = $_POST['user_name'];
    $email = $_POST['email'];
    $phone_no = $_POST['phone_no'];
    $password = $_POST['password'];

    //mysqli_DES_DECRYPT($password, $pass);

    // print_r($con);

    $sql = "UPDATE users SET user_name = '$user_name', email = '$email', phone_no = $phone_no WHERE user_id = $userID";
    $res = mysqli_query($con, $sql);

    if($res) echo "Success";

    mysqli_close($con);
?>