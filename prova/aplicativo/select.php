<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST, GET, PUT, PATCH, DELETE,OPTION');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000'); 
header('Access-Length: 0');
header('Content-Type: text/plain');

	$pdo = new PDO("mysql:host=localhost;dbname=prjProva", "root", "root"); 

    $email = $_GET["email"];
    $senha = $_GET["senha"];

    $sql = $pdo->query("select * from usuario where ds_email = \"$email\" and nm_senha = \"$senha\"");

    //Para Leitura
    while($row = $sql->fetch()){
        //echo $row["codigo"];

        $usuarios[] = array(
            "id" => $row['cd_usuario'],	
            "nome"=> $row['nm_usuario'],
            "email"=> $row['ds_email'],
            "senha" => $row['nm_senha']
            );           
    }

    echo json_encode($usuarios);
?>