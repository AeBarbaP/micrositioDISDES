<?php
    include("../prcd/qc3.php");
    $x = 0;
    $sql ="SELECT * FROM negocios ORDER BY categoria ASC";
    $resultadoSql = $conn3->query($sql);
    
    $sql1 = "SELECT * FROM categorias_b";
    $resultadoSql1 = $conn3->query($sql1);
    $rowSql1 = $resultadoSql1->fetch_assoc();

    echo'
        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
    ';
    while($row = $resultadoSql->fetch_assoc()){
        $x++;
        echo'
            <img src="assets/img/'.$row['logo'].'" class="img-fluid" alt="">
            <div class="portfolio-info">
                <h4>'.$row['nombre_rs'].'</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/'.$row['logo'].'" title="'.$row['nombre_rs'].'" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="'.$row['link'].'" title="Detalles" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div>            
        ';
    }
    echo'
        </div>
    ';
?>