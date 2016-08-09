<?php
$form = htmlspecialchars($_POST["form"]);

$user_name = "Имя: ".htmlspecialchars($_POST["name"]);

$user_phone = "Телефон: ".htmlspecialchars($_POST["phone"]);

$user_message = "Сообщение: ".htmlspecialchars($_POST["message"]);

$user_email = '';

if ($_POST["email"]) {
	$user_email = "Почта: ".htmlspecialchars($_POST["email"])."<br/>";
}


$source = $form."<br/>".$user_name."<br/>".$user_phone."<br/>".$user_message."<br/>".$user_email."";

$headers= "MIME-Version: 1.0\r\n";

$headers .= "Content-type: text/html; charset=utf-8\r\n"; 
$result = mail('marchik88@rambler.ru', "FLYCAM - ".$theme, $source, $headers);
if ($result) {
   header("Location:thanks.html");
} 
else{
   header("Location:index.html?status=false");
}
?>


