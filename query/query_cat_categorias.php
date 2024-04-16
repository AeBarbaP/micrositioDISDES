<?php
    include("../prcd/qc3.php");
    $x = 0;
    $sql ="SELECT * FROM categorias_b ORDER BY id ASC";
    $resultadoSql = $conn3->query($sql);
    echo'
        <option selected>Selecciona...</option>
        ';
    while($row = $resultadoSql->fetch_assoc()){
        $x++;
        echo'
            <option value="'.$row['id'].'">'.$row['nombre'].'</option>
        ';
    }
    echo'
        <option value="0">Otro</option>           
        ';
?>