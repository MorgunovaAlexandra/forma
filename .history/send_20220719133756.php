<?php
$name=$_POST['name'];
$email=$_POST['email'];
$to="morgunova5018@gmail.com";
$subject="Отправлена заявка с сайта";
$message="Заявка была отправлена пользователем $name c email $email";
$headers="From: $name <$email>" . "\r\n";

if(mail($to,$subject,$message,$headers)){
    echo 'Ваше сообщение успешно отправилось'
}
else{
    
}