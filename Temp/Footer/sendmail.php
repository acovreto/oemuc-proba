<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "emucohrid@yahoo.com";
    $subject = "Message from $name";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo "<script>alert('rabotti');</script>";
    } else {
        echo "<script>alert('ne');</script>";
    }
}
