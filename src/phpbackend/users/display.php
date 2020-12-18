<?php 

    header("Access-Control-Allow-Origin: *");
    // header('X-Requested-With': 'XMLHttpRequest');
    // header("Access-Control-Allow-Credentials", "true");
    // header("Access-Control-Max-Age", "1800");
    // header("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    // header("Access-Control-Allow-Headers", "content-type, Authorization");

    $host = "localhost";
    $username = "root";
    $password = "";
    $db = "test";

    $con = mysqli_connect($host, $username, $password, $db);

    $data = mysqli_query($con, 'select * from users');  
    $rows = mysqli_num_rows($data);
    for ($i=0; $i < $rows; $i++) { 
        $res[] = mysqli_fetch_assoc($data);
    }
    $json = json_encode($res);
    echo($json);

    mysqli_close($con);

?>