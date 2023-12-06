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

  // Comprueba si los datos del formulario son válidos
  if (strlen($nombre) < 3) {
    echo "El nombre debe tener al menos 3 caracteres.";
    exit;
  }

  if (strlen($apellido) < 3) {
    echo "El apellido debe tener al menos 3 caracteres.";
    exit;
  }

  if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    echo "El correo electrónico no es válido.";
    exit;
  }

  // Guarda los datos del formulario en la base de datos
  $consulta = $conexion->prepare("INSERT INTO usuarios (nombre, apellido, telefono, correo) VALUES (?, ?, ?, ?)");
  $consulta->execute(array($nombre, $apellido, $telefono, $correo));

  // Envía un correo electrónico al usuario confirmando la suscripción
  $para = $correo;
  $asunto = "Confirmación de suscripción";
  $cuerpo = "
    Estimado/a $nombre $apellido,

    Gracias por suscribirte a nuestro servicio.

    Tu suscripción ha sido confirmada.

    Saludos,

    El equipo de [nombre de la empresa]
  ";
  mail($para, $asunto, $cuerpo);

  echo "Suscripción confirmada.";

}

// Cierra la conexión a la base de datos
$conexion->close();

?>