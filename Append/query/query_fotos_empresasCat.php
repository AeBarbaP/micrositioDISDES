<?php
    include("../prcd/qc3.php");

    $y = 0;

    $sql1 = "SELECT * FROM categorias_b LIMIT 5";
    $resultadoSql1 = $conn3->query($sql1);
    

    echo'
        
            <li data-filter="*" class="filter-active">Todos</li>
    ';
    while($rowSql1 = $resultadoSql1->fetch_assoc()){
        $y++;
        echo'
            <li data-filter=".filter-'.$rowSql1['id'].'">'.$rowSql1['nombre'].'</li>
        ';
    }


?>