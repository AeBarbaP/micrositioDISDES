<?php
    include("../prcd/qc3.php");
    $x = 0;
    $username = $_POST['username'];
    $pwd = $_POST['pwd'];
    $sql ="SELECT * FROM login_negocios WHERE username = '$username' AND pdw = '$pwd'";
    $resultadoSql = $conn3->query($sql);
    $filas = $resultadoSql->num_rows;
    if ($filas == 1) {
        $row = $resultadoSql->fetch_assoc();
        if ($row['perfil'] == 1) {
            echo json_encode(array(
                'perfil'=>1
            ));	
        }
        else if ($row['perfil'] == 2) {
            echo json_encode(array(
                'perfil'=>2
            ));	
        }
        else if ($row['perfil'] == 3) {
            echo json_encode(array(
                'perfil'=>3
            ));	
        }
    }
    else {
        echo json_encode(array(
            'perfil'=>0
        ));	
    }
?>