<?php
include('qc3.php');

    $id = $_POST['id'];
    
    $sqlDelete ="DELETE FROM negocios WHERE id = '$id'";
    $resultadosqlDelete = $conn3->query($sqlDelete);

    if($resultadosqlDelete){
        echo json_encode(array(
            "success" => 1
        ));
    }
    else{
        echo json_encode(array(
            "success" => 0
        ));
    }
?>