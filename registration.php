<?php

    $username = $_POST['username'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $password = $_POST['password'];

    $hostname="localhost";
    $username="root";
    $password="";
    $name="registration";

    $conn = new mysqli($hostname, $username, $password, $name);

    if($conn->connect_error)
        die('Connection Failed: '. $conn->connect_error);
    else{
        $stmt = $conn->prepare("insert into signup(username, email, age, password) value(?,?,?,?)");
        $stmt->bind_param("ssis", $username, $email, $age, $password);
        $stmt->execute();
    }
    $stmt->close();
    $conn->close();
?>
<script>
    alert("Sign Up Successfull");
    window.location.assign("home.html");
</script>
