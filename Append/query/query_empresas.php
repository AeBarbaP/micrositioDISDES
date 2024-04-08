<?php
    include("../prcd/qc3.php");
    $sql ="SELECT * FROM negocios ORDER BY id ASC";
    $resultadoSql = $conn3->query($sql);
    while($row = $resultadoSql->fetch_assoc()){
        echo'
        <div class="col-lg-6 col-md-6">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4 my-auto">
                        <img src="assets/logotipos/'.$row['logo'].'" class="img-fluid rounded-start p-2" alt="...">
                    </div>
                    <div class="col-md-8 text-center p-3">
                        <div class="card-body">
                            <h5 class="card-title">'.$row['nombre_rs'].'</h5>
                            <p class="card-text">
                                <small class="text-body-light">
                                    <a class="icon-link icon-link-hover" style="--bs-link-hover-color-rgb: 25, 135, 84;" href="javascript: void(0)" onclick="abrirEmpresa('.$row['id'].')">
                                    <svg class="bi" aria-hidden="true"><use xlink:href="#link2"></use></svg>
                                    Ver perfil</a>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ';
    }
?>