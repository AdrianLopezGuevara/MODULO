<?php
function obtener_Alumno()
{
    $noControl = $_POST['noControl'];
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
}
//obtener_Alumno();

function obtener_Alumnos()
{
    $noControl_1 = $_POST['noControl_1'];
    $noControl_2 = $_POST['noControl_2'];
    $noControl_3 = $_POST['noControl_3'];
    $noControl_4 = $_POST['noControl_4'];
    $noControl_5 = $_POST['noControl_5'];
    include "./database.php";
    $sql = "SELECT noControl, nombre, apellidoPat, apellidoMat, semestre, carrera FROM alumnos WHERE noControl='$noControl_1' OR noControl='$noControl_2' OR noControl='$noControl_3' OR noControl='$noControl_4' OR noControl='$noControl_5';";
    $query = mysqli_query($db, $sql);
    if ($query) {
        $data = mysqli_fetch_all($query);
        $json = json_encode($data, JSON_UNESCAPED_UNICODE);
        echo ($json);
    } else {
        echo json_encode("Alumnos no encontrado");
    }
}
/* obtener_Alumnos(); */