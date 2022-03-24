<?php
$accion = $_POST['accion'];
$estado = $_POST['estado'];
$id_solicitud = $_POST['id'];

//codigo eliminar solicitud
if ($accion === 'eliminar-paciente') {
	// importar la conexion
	include '../conexion.php';
	try {
		// Realizar la consulta a la base de datos
		// $query = oci_parse($conexion, "DELETE FROM PACIENTE WHERE COD_PACIENTE = '$id_solicitud'");
		// oci_execute($query);

		$query = "BEGIN PAX_DEL ('$id_solicitud'); END;";
		$stmt = oci_parse($conexion, $query);
		oci_execute($stmt);

		//imprimir variables
		$solicitud = oci_num_rows($stmt);
		if ($solicitud > 0) {
			$respuesta = array(
				'respuesta' => 'correcto'
			);
		} else {
			$respuesta = array(
				'respuesta' => 'error'
			);
		}
	} catch (Exception $e) {
		// En caso de un error, tomar la exepcion
		$respuesta = array(
			'respuesta' => $e->getMessage()
		);
	}
	echo json_encode($respuesta);
}



echo $accion;
if ($accion === 'eliminar-medico') {
	// importar la conexion
	include '../conexion.php';

	// Realizar la consulta a la base de datos
	$query = oci_parse($conexion, "DELETE FROM MEDICO WHERE ID_MEDICO = '$id_solicitud'");
	oci_execute($query);

	// $query = "BEGIN PAX_DEL ('$id_solicitud'); END;";
	// $stmt = oci_parse($conexion, $query);
	// oci_execute($stmt);

	//imprimir variables
	$solicitud = oci_num_rows($query);
	//enviar por metodo ajax por medio de array se puede enviar varios datos
	if ($solicitud > 0) {
		$respuesta = array(
			'solicitud' => $solicitud,
			'respuesta' => 'correcto',
			'tipo' => $accion,
		);
	} else {
		echo $respuesta = array(
			'solicitud' => $solicitud,
			'respuesta' => 'error',
			'tipo' => $accion,
		);
	}
	echo json_encode($respuesta);
	oci_close($conexion);
}

echo $accion;

if ($accion === 'eliminar-dueno') {
	// importar la conexion
	include '../conexion.php';

	// Realizar la consulta a la base de datos
	$query = oci_parse($conexion, "DELETE FROM DUENO WHERE ID_DUENO = '$id_solicitud'");
	oci_execute($query);

	// $query = "BEGIN PAX_DEL ('$id_solicitud'); END;";
	// $stmt = oci_parse($conexion, $query);
	// oci_execute($stmt);

	//imprimir variables
	$solicitud = oci_num_rows($query);
	//enviar por metodo ajax por medio de array se puede enviar varios datos
	if ($solicitud > 0) {
		$respuesta = array(
			'solicitud' => $solicitud,
			'respuesta' => 'correcto',
			'tipo' => $accion,
		);
	} else {
		echo $respuesta = array(
			'solicitud' => $solicitud,
			'respuesta' => 'error',
			'tipo' => $accion,
		);
	}
	echo json_encode($respuesta);
	oci_close($conexion);
}

if ($accion === 'eliminar-cirugia') {
	// importar la conexion
	include '../conexion.php';

	// Realizar la consulta a la base de datos
	$query = oci_parse($conexion, "DELETE FROM CIRUGIA WHERE COD_CIRUGIA = '$id_solicitud'");
	oci_execute($query);

	$solicitud = oci_num_rows($query);

	if ($solicitud > 0) {
		$respuesta = array(
			'solicitud' => $solicitud,
			'respuesta' => 'correcto',
			'tipo' => $accion,
		);
	} else {
		echo $respuesta = array(
			'solicitud' => $solicitud,
			'respuesta' => 'error',
			'tipo' => $accion,
		);
	}
	echo json_encode($respuesta);
	oci_close($conexion);
}











//Actualizar Estado
if ($accion === 'actualizar') {
	// importar la conexion
	include '../conexion.php';

	try {
		// Realizar la consulta a la base de datos
		$stmt = $conn->prepare("UPDATE ficha_directorio set estado_registro = ? WHERE id = ? ");
		$stmt->bind_param('ss', $estado, $id_solicitud);
		$stmt->execute();
		if ($stmt->affected_rows > 0) {
			$respuesta = array(
				'respuesta' => 'correcto',
				'id' => $id_solicitud,
				'estado' => $estado
			);
		} else {
			$respuesta = array(
				'respuesta' => 'error',
				'id' => $id_solicitud,
				'estado' => $estado
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
