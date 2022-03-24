<?php
$accion = $_POST['accion'];
$estado = $_POST['estado'];
$id = $_POST['id'];
//codigo eliminar solicitud
if ($accion === 'eliminar-bloque') {
	// importar la conexion
	include '../conexion.php';
	try {
		// Realizar la consulta a la base de datos
		$stmt = $conn->prepare("DELETE FROM bloques WHERE id_bloque = ? ");
		$stmt->bind_param('s', $id);
		$stmt->execute();
		if ($stmt->affected_rows > 0) {
			$respuesta = array(
				'respuesta' => 'correcto'
			);
		} else {
			$respuesta = array(
				'respuesta' => 'error'
			);
		}
		$stmt->close();
		$conn->close();
	} catch (Exception $e) {
		// En caso de un error, tomar la exepcion
		$respuesta = array(
			'error' => $e->getMessage()
		);
	}

	echo json_encode($respuesta);
}

if ($accion === 'eliminar-medico') {
	// importar la conexion
	include '../conexion.php';
	try {
		// Realizar la consulta a la base de datos
		$stmt = $conn->prepare("DELETE FROM bloques WHERE id_bloque = ? ");
		$stmt->bind_param('s', $id);
		$stmt->execute();
		if ($stmt->affected_rows > 0) {
			$respuesta = array(
				'respuesta' => 'correcto'
			);
		} else {
			$respuesta = array(
				'respuesta' => 'error'
			);
		}
		$stmt->close();
		$conn->close();
	} catch (Exception $e) {
		// En caso de un error, tomar la exepcion
		$respuesta = array(
			'error' => $e->getMessage()
		);
	}

	echo json_encode($respuesta);
}
