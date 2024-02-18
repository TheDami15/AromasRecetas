<?php
// Datos de conexión
$host = "localhost";
$usuario = "root";
$contrasena = null;
$base_datos = "aromasrecetas";

// Crear conexión
$conexion = new mysqli($host, $usuario, $contrasena, $base_datos);

// Revisar si hay errores en la conexión
if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

// Obtener datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$contrasena = $_POST['contrasena'];

// Insertar datos en la base de datos
$sql = "INSERT INTO ar_usuario (usu_name, usu_email, usu_pass) VALUES ('$nombre', '$email', '$contrasena')";

if ($conexion->query($sql) === TRUE) {
    header("Location: ../pages/form.html");
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conexion->error;
}

// Cerrar la conexión
$conexion->close();
?>
