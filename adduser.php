<?php
	include 'conn.php';
	
	$username = $_POST['username'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	
	$connect->query("INSERT INTO `users`(`id`, `username`, `email`, `password`, `level`, `created_at`) VALUES (NULL,'".$username."','".$email."','".$password."','user',CURRENT_TIMESTAMP)");

?>