<?php 

    header("Access-Control-Allow-Origin: *");

    $host = "localhost";
    $username = "root";
    $password = "";
    $db = "test";

    $con = mysqli_connect($host, $username, $password, $db);

    
    $user_name = $_POST['user_name'];
    $email = $_POST['email'];
    $phone_no = $_POST['phone_no'];
    $password = md5($_POST['password']);

    $sql = "INSERT INTO users (user_name, email, phone_no, password) VALUES ('$user_name', '$email', $phone_no, '$password')";
    $data = mysqli_query($con, $sql);

    if($data) {
        echo "Success";
    }

    mysqli_close($con);

    // echo $user_name;
    // echo $email;
    // echo $phone;
    // echo $pass;


?>