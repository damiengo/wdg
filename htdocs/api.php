<?php
require_once __DIR__.'/../vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ParameterBag;

/** App **/
$app = new Silex\Application();

/** Send response **/
$app->post("/response", function(Request $request) use ($app) {
    header("Cache-Control: max-age=1");

    $name  = $request->get("name", "");
    $email = $request->get("email", "");
    $text  = $request->get("message", "");

    mail("dam.gou@gmail.com", "Reponse de [Nom: ".$name."][Email: ".$email."]", $text);

    return $app->json(["success" => true], 200);
});

