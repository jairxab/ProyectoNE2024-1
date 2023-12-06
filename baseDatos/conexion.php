<?php
  $host = 'localhost';
  $usuario = 'root';
  $contraseña = 'Equipo2NE';
  $base_de_datos = 'BDA_Equipo2';

  $conexion = new mysqli($host, $usuario, $contraseña, $base_de_datos);

  if ($conexion->connect_error) {
    die('Error al conectar a la base de datos: ' . $conexion->connect_error);
  }
?>