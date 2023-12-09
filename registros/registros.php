<?php

// Configuraciones de la base de datos
$host = 'localhost';
$usuario = 'root';
$contraseña = 'Equipo2NE';
$base_de_datos = 'BDA_Equipo2';

// Crea la conexión a la base de datos
$conexion = new mysqli($host, $usuario, $contraseña, $base_de_datos);

// Verifica si la conexión se realizó correctamente
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

  // Guarda los datos del formulario en la base de datos
  $consulta = $conexion->prepare("INSERT INTO usuarios (nombre, apellido, telefono, correo) VALUES (?, ?, ?, ?)");
  $consulta->execute(array($nombre, $apellido, $telefono, $correo));

  // Obtiene el ID generado por la base de datos
  $id = $conexion->insert_id;

  // Muestra un mensaje de registro exitoso
  echo "Registro exitoso. Su ID es: $id";

}

// Cierra la conexión a la base de datos
$conexion->close();

?>
