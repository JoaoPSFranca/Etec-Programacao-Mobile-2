<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: POST, GET, PUT, PATCH, DELETE,OPTION');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000'); 
    header('Access-Length: 0');
    header('Content-Type: text/plain');

    $pdo = new PDO("mysql:host=localhost;dbname=prjDesafio", "root", "root"); 

    $id = $_GET["id"];
    $sql = $pdo->query("SELECT * FROM alunos WHERE cd_aluno = \"$id\"");
    $total = $sql->rowCount();


        while($row = $sql->fetch()){
            $alunos[] = array(
                "id" => $row['cd_aluno'],	
                "nome"=> $row['nm_aluno'],
                "email"=> $row['ds_email']
            );           
        }

        echo json_encode($alunos);
?>