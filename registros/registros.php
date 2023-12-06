<?php
  $host = 'localhost';
  $usuario = 'root';
  $contraseña = 'Equipo2NE';
  $base_de_datos = 'BDA_Equipo2';

  $conexion = new mysqli($host, $usuario, $contraseña, $base_de_datos);

  if ($conexion->connect_error) {
    die('Error al conectar a la base de datos: ' . $conexion->connect_error);
  }

// Verifica si el formulario se envió correctamente
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Obtiene los datos del formulario
  $nombre = $_POST["nombre"];
  $apellido = $_POST["apellido"];
  $telefono = $_POST["telefono"];
  $correo = $_POST["correo"];

  // Imprime los datos del formulario
  echo "Nombre: " . $nombre . "<br>";
  echo "Apellido: " . $apellido . "<br>";
  echo "Teléfono: " . $telefono . "<br>";
  echo "Correo electrónico: " . $correo . "<br>";

}

?>