<?php
header("Cache-Control: max-age=1");

$name  = $_POST["name"];
$email = $_POST["email"];
$text  = $_POST["message"];

$fp = fopen("../responses/".date("Ymd-His")."-".rand(100, 999).".txt", "w");
fwrite($fp, "name: [".$name."]\nemail: [".$email."]\nmessage: [".$text."]");
fclose($fp);
