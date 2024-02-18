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
$email = $_POST['email'];
$contrasena = $_POST['contrasena'];

// Verificar la autenticación del usuario
$sql = "SELECT * FROM ar_usuario WHERE usu_email = '$email' AND usu_pass = '$contrasena'";
$resultado = $conexion->query($sql);

if ($resultado->num_rows > 0) {
    // Inicio de sesión exitoso, redirigir a index.html
    header("Location: ../pages/saludo.html");
    exit();
} else {
    header("Location: ../pages/form.html");
}

// Cerrar la conexión
$conexion->close();
?>