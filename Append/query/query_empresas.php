<?php
    include("../prcd/qc3.php");
    $sql ="SELECT * FROM negocios ORDER BY id ASC";
    $resultadoSql = $conn3->query($sql);
    while($row = $resultadoSql->fetch_assoc()){
        echo'
        <div class="col-lg-4">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4 my-auto">
                    <img src="assets/img/lazaritoDIV.png" class="img-fluid rounded-start p-2" alt="...">
                    </div>
                    <div class="col-md-8 bg-primary text-light text-center p-3">
                    <div class="card-body">
                        <h5 class="card-title">'.$row['nombre_rs'].'</h5>
                        <p class="card-text"><small class="text-body-light">
                        <a class="icon-link icon-link-hover text-light" style="--bs-link-hover-color-rgb: 25, 135, 84;" href="#">
                            <svg class="bi" aria-hidden="true"><use xlink:href="#link2"></use></svg>
                            Ver perfil
                        </a>
                            </small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        ';
    }
?>