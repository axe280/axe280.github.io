<?php

  $contacts = array(
    "axeothermail@gmail.com",
  );

  foreach($contacts as $contact) {
    $to = $contact;

    $subject = 'Новая заявка';
    $message = '
    <html>
        <head>
            <title>' . $subject . '</title>
        </head>
        <body>
            <p>Имя: ' . $_POST["name"] . '</p>
            <p>Телефон : ' . $_POST["phone"] . '</p>
        </body>
    </html>';
    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Omakulma <axeothermail@gmail.com> \r\n";
    mail($to, $subject, $message, $headers);
  }
?>