<?php
    include("../prcd/qc3.php");
    $x = 0;
    $sql ="SELECT * FROM negocios ORDER BY id ASC";
    $resultadoSql = $conn3->query($sql);
    echo'
    <table class="table">
            <thead class="text-center">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">RFC</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody class="text-center">
            ';
    while($row = $resultadoSql->fetch_assoc()){
        $x++;
        echo'
                <tr>
                    <th scope="row">'.$x.'</th>
                    <td>'.$row['nombre_rs'].'</td>
                    <td>'.$row['rfc'].'</td>
                    <td><a href="javascript: void(0)" onclick="editarEmpresa('.$row['id'].')"><i class="bi bi-pencil-square"></i> Editar</a></td>
                    <td><a href="javascript: void(0)" onclick="modalEliminar('.$row['id'].')"><i class="bi bi-trash3-fill"></i> Eliminar</a></td>
                </tr>            
        ';
    }
    echo'
            </tbody>
    </table>
        ';
?>