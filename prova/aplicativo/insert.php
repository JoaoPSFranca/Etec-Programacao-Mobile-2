<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST, GET, PUT, PATCH, DELETE,OPTION');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000'); 
header('Access-Length: 0');
header('Content-Type: text/plain');

	$pdo = new PDO("mysql:host=localhost;dbname=prjProva", "root", "root"); 

    $nome = $_GET["nome"];
    $email = $_GET["email"];
    $senha = $_GET["senha"];

    $sql = $pdo->query("insert into usuario(`cd_usuario`, `nm_usuario`, `ds_email`, `nm_senha`) VALUES  (NULL,\"$nome\",\"$email\", \"$senha\") ");

    echo json_encode("tudo certo");
?>