<?php
$noControl = $_GET['noControl'];
/* function obtener_nombre_Alumno($noControl)
{ */
try {
    $inc = require "./database.php";
    if ($inc) {
        $sql = "SELECT noControl, nombre, apellidoPat, apellidoMat, carrera FROM alumnos WHERE noControl='$noControl';";
        $query = mysqli_query($db, $sql);
        if ($query) {
            $data = mysqli_fetch_array($query);
            $json = json_encode($data, JSON_UNESCAPED_UNICODE);
            
            echo ($json);
            /* header("Location: ../index.html"); */
        }
    } else {
        echo ("Error");
    }
} catch (\Throwable $th) {
    throw $th;
}
/* }
obtener_nombre_Alumno($noControl); */