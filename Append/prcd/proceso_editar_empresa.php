<?php
include('qc3.php');

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$rfc = $_POST['rfc'];
$celular = $_POST['celular'];
$calle = $_POST['calle'];
$num_ext = $_POST['num_ext'];
$colonia = $_POST['colonia'];
$municipio = $_POST['municipio'];
$estado = $_POST['estado'];
$zip_code = $_POST['zip_code'];
$descuento = $_POST['descuento'];
$ubicacionMaps = $_POST['ubicacionMaps'];
$link = $_POST['link'];

$sql_2="UPDATE negocios SET 
nombre_rs = '$nombre',
rfc = '$rfc',
celular_wa = '$celular',
calle = '$calle',
num_ext = '$num_ext',
colonia = '$colonia',
municipio = '$municipio',
estado = '$estado',
zip_code = '$zip_code',
descuento = '$descuento',
ubicacionMaps = '$ubicacionMaps',
link = '$link'
WHERE id='$id'";
$resultado2= $conn3->query($sql_2);

if($resultado2){

    echo json_encode(array(
    'success'=>1
));
}

else{

    echo json_encode(array(
        'success'=>0
    ));
}
?>