<?php
require_once __DIR__.'/../vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ParameterBag;

/** App **/
$app = new Silex\Application();

/** Mail sender **/
$app->register(new Silex\Provider\SwiftmailerServiceProvider());

/** Mailer options **/
$app["swiftmailer.options"] = array(
    "host"       => "smtp1.dc0.gpaas.net",
    "port"       => "25",
    "encryption" => null,
    "auth_mode"  => null
);

/** Send response **/
$app->post("/response", function(Request $request) use ($app) {
    $name  = $request->get("name", "");
    $email = $request->get("email", "");
    $text  = $request->get("message", "");

    $message = \Swift_Message::newInstance()
        ->setSubject("Reponse de [".$name."]")
        ->setFrom(array($email))
        ->setTo(array("dam.gou@gmail.com"))
        ->setBody($text);

    $app["mailer"]->send($message);

    return $app->json(["success" => true], 200);
});

