<?php
$noControl = $_POST['noControl'];
/* function obtener_Alumno($noControl)
{ */
include "./database.php";
$sql = "SELECT noControl, nombre, apellidoPat, apellidoMat, semestre, carrera FROM alumnos WHERE noControl='$noControl';";
$query = mysqli_query($db, $sql);
if ($query) {
    $data = mysqli_fetch_array($query);
    $json = json_encode($data, JSON_UNESCAPED_UNICODE);
    echo ($json);
} else {
    echo json_encode("Alumnos no encontrado");
}
/* }
obtener_Alumno($noControl); */