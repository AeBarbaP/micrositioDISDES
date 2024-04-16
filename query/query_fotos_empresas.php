<?php
    include("../prcd/qc3.php");
    $x = 0;

    $sql ="SELECT * FROM negocios ORDER BY RAND() LIMIT 9";
    $resultadoSql = $conn3->query($sql);
    


    while($row = $resultadoSql->fetch_assoc()){
        $x++;
        $logo[] = $row['logo'];

    }
    // Aquí nos quedamos, vamos a enviar las imagenes por json a los div de html de portfolio
    echo json_encode(array(
        'success'=>1,
        'logo1'=>$logo[0],
        'logo2'=>$logo[1],
        'logo3'=>$logo[2],
        /* 'logo4'=>$logo[3],
        'logo5'=>$logo[4],
        'logo6'=>$logo[5],
        'logo7'=>$logo[6],
        'logo8'=>$logo[7],
        'logo9'=>$logo[8] */
    ));
?>