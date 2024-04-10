<?php
    include("../prcd/qc3.php");
    $x = 0;

    $sql ="SELECT * FROM negocios ORDER BY categoria ASC";
    $resultadoSql = $conn3->query($sql);
    

    while($row = $resultadoSql->fetch_assoc()){
        $x++;
        echo'
        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" title="Product 1" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>
        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-'.$row['categoria'].'">
            <img src="assets/logotipos/'.$row['logo'].'" class="img-fluid" alt="">
            <div class="portfolio-info">
                <h4>'.$row['nombre_rs'].'</h4>
                <p>'.$row['descuento'].'% de descuento.</p>
                <a href="assets/logotipos/'.$row['logo'].'" title="'.$row['nombre_rs'].'" data-gallery="portfolio-gallery-'.$row['categoria'].'" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="'.$row['link'].'" title="Detalles" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div>    
        </div>     
        ';
    }

?>