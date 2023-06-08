<meta http-equiv='refresh' content='5; url=http://1111atesttes-ru.1gb.ru/'></meta>
<?php
$post = (!empty($_POST)) ? true : false;
if($post) {
	$email = htmlspecialchars(trim($_POST['email']));
	$name = htmlspecialchars(trim($_POST['name']));
	$tel = htmlspecialchars(trim($_POST["tel"]));
	$message = htmlspecialchars(trim($_POST['message']));
	$cbox = htmlspecialchars(trim($_POST['cbox']));
	
	$error = '';

	if(!$name) {$error .= 'Укажите свое имя. ';}
	if(!$email) {$error .= 'Укажите электронную почту. ';}
	if(!$tel) {$error .= 'Укажите тел. ';}
	if(!$message || strlen($message) < 1) {$error .= 'Введите сообщение. ';}
	if(!$cbox) {$error .= 'Поставьте галочку, согласен на обработку персональных данных. ';}
	if(!$error) {
		$address = "egorkeln@narod.ru";
		$mes = "Почта: ".$email."\n\nИмя: ".$name."\n\nТел: " .$tel."\n\nСообщение: ".$message."\n\n";
		$send = mail ($address,$tel,$mes,"Content-type:text/plain; charset = UTF-8\r\nReply-To:$email\r\nFrom:$name <contact>");
		if($send) {echo 'Сообщение отправлено!';}
	}
	else {echo '<div class="err">'.$error.'</div>';}
}
?>