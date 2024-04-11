<?php
    include("../prcd/qc3.php");
    $x = 0;

    $sql ="SELECT * FROM negocios ORDER BY RAND() LIMIT 9";
    $resultadoSql = $conn3->query($sql);
    


    while($row = $resultadoSql->fetch_assoc()){
        $x++;
        
    }
    // Aquí nos quedamos, vamos a enviar las imagenes por json a los div de html de portfolio
    echo json_encode(array(
       'success'=>1,
       'logo1'=>$row['logo'],
       'logo2'=>$row['logo'],
       'logo3'=>$row['logo'],
       'logo4'=>$row['logo'],
       'logo5'=>$row['logo'],
       'logo6'=>$row['logo'],
       'logo7'=>$row['logo'],
       'logo8'=>$row['logo'],
       'logo9'=>$row['logo']
    ));
?>