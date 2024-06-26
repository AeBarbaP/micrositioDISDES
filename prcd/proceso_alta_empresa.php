<?php
include('qc3.php');

    date_default_timezone_set('America/Mexico_City');
    setlocale(LC_TIME, 'es_MX.UTF-8');

    $fechaSistema = strftime("%Y-%m-%d,%H:%M:%S");

    $nombre = $_POST['nombre'];
    $rfc = $_POST['rfc'];
    $regimen = $_POST['regimen'];
    $contacto = $_POST['contacto'];
    $celular = $_POST['celular'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $link = $_POST['link'];
    $categoria = $_POST['categoria'];
    $calle = $_POST['calle'];
    $numExt = $_POST['numExt'];
    $numInt = $_POST['numInt'];
    $colonia = $_POST['colonia'];
    $cp = $_POST['cp'];
    $localidad = $_POST['localidad'];
    $municipio = $_POST['municipio'];
    $estado = $_POST['estado'];
    $dias = $_POST['dias'];
    $descuento = $_POST['descuento'];
    $descuentoDescripcion = $_POST['descuentoDescripcion'];
    $userName = $_POST['userName'];
    $pdw = $_POST['pdw'];

    $sqlInsert ="INSERT INTO negocios (
        nombre_rs,
        rfc,
        representante,
        tipo_sat,
        celular_wa,
        telefono,
        e_mail,
        link,
        categoria,
        calle,
        num_ext,
        num_int,
        colonia,
        zip_code,
        localidad,
        municipio,
        estado,
        dias_descuento,
        descuento,
        descuento_descripcion
        ) 
        VALUES(
            '$nombre',
            '$rfc',
            '$contacto',
            '$regimen',
            '$celular',
            '$telefono',
            '$email',
            '$link',
            '$categoria',
            '$calle',
            '$numExt',
            '$numInt',
            '$colonia',
            '$cp',
            '$localidad',
            '$municipio',
            '$estado',
            '$dias',
            '$descuento',
            '$descuentoDescripcion'
            )";
    $resultadosqlInsert = $conn3->query($sqlInsert);

    if($resultadosqlInsert){
        $sqlInsertUsr ="INSERT INTO login_negocios(
            id_negocio,
            username,
            pdw,
            perfil
            )
            VALUES(
            '$rfc',
            '$userName',
            '$pdw',
            3
            )
            ";
        $resultadosqlInsert2 = $conn3->query($sqlInsertUsr);
        echo json_encode(array(
            "success" => 1
        ));
    }
    else{
        echo json_encode(array(
            "success" => 0
        ));
    }

?>