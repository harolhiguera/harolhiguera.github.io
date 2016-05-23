<?php
 


    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_harolhiguera = "harolito@harolhiguera.com";
	$email_gmail = "harolhiguera2005@gmail.com";	
	$email_hotmail = "haroli23@hotmail.com";
    $email_subject = "Somebody has written!!!";
 
 
	
    $name = $_GET['uname'];
    $email_from = $_GET['uemailaddress'];
    $comment = $_GET['ucomment'];

	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  
  if(!preg_match($email_exp,$email_from)) {
	$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }


	

    $email_message = "Form details below.\n\n";
    function clean_string($string) {
      $bad = array("name","mail","message");
      return str_replace($bad,"",$string);
    }
 
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email Address: ".clean_string($email_from)."\n";
    $email_message .= "Comments: ".clean_string($comment)."\n";

$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_harolhiguera, $email_subject, $email_message, $headers);  
@mail($email_gmail, $email_subject, $email_message, $headers); 
@mail($email_hotmail, $email_subject, $email_message, $headers);
 echo "Thanks for writing, I'll contact you soon.";

 
?>