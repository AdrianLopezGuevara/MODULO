<?php
$db = mysqli_connect('localhost', 'root', 'admin', 'alumnos');
if (!$db) {
    echo ("Erro de conexión con la base");
}