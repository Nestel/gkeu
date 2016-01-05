<?php
	$name = $_POST["name"];
	$email = $_POST["email"];
	$content = $_POST["content"];

	$headers = 'From: ' . $name . "<" . $email . ">";
	
	if (mail('gabriel.kerekes.ml@gmail.com', "from web", $content, $headers))
	{
		echo json_encode(array("success" => true, "message" => "Mail successfully sent."));
	}
	else
	{
		echo json_encode(array("success" => false, "message" => "There was an error while sending your e-mail."));
	}
?>