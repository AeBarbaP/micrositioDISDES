<?php
    include("../prcd/qc3.php");
    $id = $_POST['id'];
    $sql ="SELECT * FROM negocios WHERE id = '$id'";
    $resultadoSql = $conn3->query($sql);
    $row = $resultadoSql->fetch_assoc();
    echo json_encode(array(
        'success'=>1,
        'id'=>$row['id'],
        'nombre'=>$row['nombre_rs'],
        'rfc'=>$row['rfc'],
        'celular'=>$row['celular_wa'],
        'calle'=>$row['calle'],
        'num_ext'=>$row['num_ext'],
        'colonia'=>$row['colonia'],
        'municipio'=>$row['municipio'],
        'estado'=>$row['estado'],
        'zip_code'=>$row['zip_code'],
        'descuento'=>$row['descuento'],
        'ubicacionMaps'=>$row['ubicacionMaps'],
        'link'=>$row['link']
    ));
    
?>