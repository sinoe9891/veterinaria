<?php
include '../../includes/funciones.php';
include '../conexion.php';
date_default_timezone_set('America/Tegucigalpa');
$accion = $_POST['accion'];

//Código para crear administradores
if ($accion === 'solicitud') {
	// $cod_pax = $_POST['cod_pax'];
	$codigopaciente = $_POST['codigopaciente'];
	$nombre = $_POST['nombres'];
	$raza = $_POST['raza'];
	$dueno = $_POST['dueno'];
	$medicocabecera = $_POST['medicocabecera'];
	// $foto = $_FILES['foto']['name'];
	$fecha_inicial = $_POST['fecha_inicial'];
	//formato fecha 10-abr-2018
	//$fecha_inicial = date("d-m-Y", strtotime($fecha_inicial));
	//verificar si el id esta repetido
	$query = oci_parse($conexion, "SELECT * FROM PACIENTE");
	oci_execute($query);
	//Recogemos el archivo enviado por el formulario
	$direccion = '';
	$searchString = " ";
	$replaceString = "";
	$namefile = strtolower(quitar_acentos(str_replace($searchString, $replaceString, $nombre)));

	if (isset($_FILES["archivos"]["name"])) {
		$imagenes = count($_FILES["archivos"]["name"]);
	} else {
		$imagenes = null;
	}

	//Se inserta en la base de datos
	$carpeta = '../../images/upload/' . $codigopaciente . '/';

	function crearDireccion($carpeta)
	{
		// Path de documentos
		// Permisos de la carpeta
		if (!is_dir($carpeta)) {
			mkdir($carpeta, 0777, true);
		}
		chmod($carpeta, 0777);
		return;
	}

	if ($imagenes != null) {
		//Subir varias imagenes
		for ($i = 0; $i < $imagenes; $i++) {
			$ubicacionTemporal = $_FILES["archivos"]["tmp_name"][$i];
			$nombreArchivo = $_FILES["archivos"]["name"][$i];
			$extension = pathinfo($nombreArchivo, PATHINFO_EXTENSION);

			$parts = explode(".", $_FILES['archivos']['name'][$i]);
			$ruta_archivos = $carpeta . $namefile . "_" . $codigopaciente . "." . end($parts);
			$archivoimagen = $namefile . "_" . $codigopaciente . "." . end($parts);

			// Mover del temporal al directorio actual
			crearDireccion($carpeta);
			move_uploaded_file($ubicacionTemporal, $ruta_archivos);
		}
	} else {
		$imagenes = '';
	}

	//$query = oci_parse($conexion, "INSERT INTO PACIENTE VALUES ('$codigopaciente', '$nombre', '$raza', '$dueno', '$medicocabecera', '$archivoimagen', to_date('$fecha_inicial', 'dd-MON-rr'))");
	//oci_execute($query);
	//imprimir variables

	$query = "BEGIN PAX_IN ('$codigopaciente', '$nombre', '$raza', '$dueno', '$medicocabecera', '$archivoimagen', to_date('$fecha_inicial', 'rr-mm-dd')); END;";
	$stmt = oci_parse($conexion, $query);
	oci_execute($stmt);

	//saber si se inserto validar la consulta
	$solicitud = oci_num_rows($stmt);
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




if ($accion === 'solicitudMedico') {
	$id_medico = $_POST['id_medico'];
	$nombre_completo = $_POST['nombre_completo'];
	$direccion = $_POST['direccion'];
	$telefonos = $_POST['telefonos'];
	$emergencias = $_POST['emergencias'];
	$accion = $_POST['accion'];
	$fecha_inicial = $_POST['fecha_inicial'];

	//formato fecha 10-abr-2018
	$fecha_inicial = date("d-M-Y", strtotime($fecha_inicial));
	//verificar si el id esta repetido

	$query = oci_parse($conexion, "INSERT INTO MEDICO VALUES ('$id_medico', '$nombre_completo', '$direccion', '$telefonos', '$emergencias', to_date('$fecha_inicial', 'dd-MON-rr'))");
	// $query = oci_parse($conexion, "INSERT INTO MEDICO VALUES ('$codigopaciente', '$nombre', '$raza', '$dueno', '$medicocabecera', '$archivoimagen', to_date('$fecha_inicial', 'dd-MON-rr'))");
	oci_execute($query);
	//imprimir variables

	// $query = "BEGIN PAX_IN ('$codigopaciente', '$nombre', '$raza', '$dueno', '$medicocabecera', '$archivoimagen', to_date('$fecha_inicial', 'rr-mm-dd')); END;";
	// $stmt = oci_parse($conexion, $query);
	// oci_execute($stmt);

	//saber si se inserto validar la consulta
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

if ($accion === 'solicitudDueno') {
	$codigoDueno = $_POST['codigoDueno'];
	$nombre_completo = $_POST['nombre_completo'];
	$direcciondueno = $_POST['direcciondueno'];
	$telefonos = $_POST['telefonos'];
	$accion = $_POST['accion'];


	$query = oci_parse($conexion, "INSERT INTO DUENO VALUES ('$codigoDueno', '$nombre_completo', '$direcciondueno', '$telefonos')");
	oci_execute($query);
	// $query = oci_parse($conexion, "INSERT INTO MEDICO VALUES ('$codigopaciente', '$nombre', '$raza', '$dueno', '$medicocabecera', '$archivoimagen', to_date('$fecha_inicial', 'dd-MON-rr'))");
	//imprimir variables

	// $query = "BEGIN PAX_IN ('$codigopaciente', '$nombre', '$raza', '$dueno', '$medicocabecera', '$archivoimagen', to_date('$fecha_inicial', 'rr-mm-dd')); END;";
	// $stmt = oci_parse($conexion, $query);
	// oci_execute($stmt);

	//saber si se inserto validar la consulta
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
if ($accion === 'nuevaCirugia') {
	$id_cirugia = $_POST['id_cirugia'];
	$nombre = $_POST['nombre'];
	$riesgo = $_POST['riesgo'];
	$duracion = $_POST['duracion'];
	$anestesia = $_POST['anestesia'];
	$descripcion = $_POST['descripcion'];
	$accion = $_POST['accion'];



	$query = oci_parse($conexion, "INSERT INTO CIRUGIA VALUES ('$id_cirugia', '$nombre', '$duracion', '$descripcion', '$riesgo', '$anestesia')");
	oci_execute($query);
	// $query = "BEGIN PAX_IN ('$codigopaciente', '$nombre', '$raza', '$dueno', '$medicocabecera', '$archivoimagen', to_date('$fecha_inicial', 'rr-mm-dd')); END;";
	// $stmt = oci_parse($conexion, $query);
	// oci_execute($stmt);

	//saber si se inserto validar la consulta
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






















if ($accion === 'nuevoBloque') {
	$name = $_POST['nombres'];
	$proyecto = $_POST['proyecto'];
	$accion = $_POST['accion'];

	//Importar la conexión
	include '../conexion.php';
	try {
		//Preparar la consulta de insertar bloque
		// 		id_bloque	
		// bloque	
		// id_proyecto	

		$statement = $conn->prepare("INSERT INTO bloques (bloque, id_proyecto) VALUES (?,?)");
		$statement->bind_param('ss', $name, $proyecto);
		$statement->execute();
		if ($statement->affected_rows > 0) {
			$respuesta = array(

				'respuesta' => 'correcto',
				'name' => $name,
				'tipo' => $accion,
				'id_agregado' => $statement->insert_id
			);
		} else {
			$respuesta = array(
				'respuesta' => 'error',
			);
		}
		$statement->close();
		$conn->close();
	} catch (Exception $e) {
		//En caso de un error, tomar la exepción
		$respuesta = array(
			//Arreglo asociativo
			'pass' => $e->getMessage(),
			// 'pass' => $hash_password
		);
	}
	echo json_encode($respuesta);
}












if ($accion === 'newlote') {
	$numero = $_POST['numero'];
	$id_bloques = $_POST['id_bloques'];
	$areav2 = $_POST['areav2'];
	$estado = $_POST['estado'];
	$colindancias = $_POST['colindancias'];
	$path_lote = $_POST['path_lote'];
	//Importar la conexión
	include '../conexion.php';
	try {
		//Preparar la consulta de insertar bloque
		$statement = $conn->prepare("INSERT INTO lotes (numero, id_bloque, areav2, estado, colindancias, path_lote) VALUES (?,?,?,?,?,?)");
		$statement->bind_param('ssssss', $numero, $id_bloques, $areav2, $estado, $colindancias, $path_lote);
		$enviado = '';
		$consulta = $conn->query("SELECT * FROM lotes");
		while ($row = $consulta->fetch_assoc()) {
			if ($row['numero'] == $numero && $row['id_bloque'] == $id_bloques) {
				$enviado = false;
			} elseif ($row['numero'] != $numero && $row['id_bloque'] != $id_bloques) {
				$enviado = true;
			}
		}
		if ($enviado == true) {
			$statement->execute();
			$respuesta = array(
				'respuesta' => 'correcto',
				'numerolote' => $numero,
				'id_bloques' => $id_bloques,
				'areav2' => $areav2,
				'estado' => $estado,
				'colindancias' => $colindancias,
				'path_lote' => $path_lote,
				'tipo' => $accion,
			);
		} else if ($enviado == false) {
			$respuesta = array(
				'respuesta' => 'duplicado',
				'numerolote' => $numero,
				'id_bloques' => $id_bloques,
				'areav2' => $areav2,
				'estado' => $estado,
				'colindancias' => $colindancias,
				'path_lote' => $path_lote,
				'tipo' => $accion,
			);
		} else {
			$respuesta = array(
				'respuesta' => 'error',
			);
		}

		$statement->close();
		$conn->close();
	} catch (Exception $e) {
		//En caso de un error, tomar la exepción
		$respuesta = array(
			//Arreglo asociativo
			'pass' => $e->getMessage(),
			// 'pass' => $hash_password
		);
	}
	echo json_encode($respuesta);
}


if ($accion === 'newventa') {

	//info general
	$fechaSolicitud = $_POST['fechaSolicitud'];
	$horaSolicitud = $_POST['horaSolicitud'];
	$id_registro = $_POST['id_registro'];
	$fecha_venta = $_POST['fecha_venta'];
	$prima = $_POST['prima'];
	$plazo_meses = $_POST['plazo_meses'];
	$plazo_anios = ($plazo_meses / 12);
	$fecha_primer_cuota = $_POST['fecha_primer_cuota'];
	$tipo_venta = $_POST['tipo_venta'];
	$vendedor = $_POST['vendedor'];
	$dia_pago = $_POST['dia_pago'];
	$cuenta_bancaria = $_POST['cuenta_bancaria'];
	$proyecto = $_POST['proyecto'];
	$estado = 'pa';
	$estado_lote = 'v';

	$resultado = obtenerProy($proyecto);
	$row = $resultado->fetch_assoc();
	$precio_vara2 = $row['precio_vara2'];
	$accion === 'newventa';

	// funcion insertar ficha_compra_lotes
	function insertarFichaCompra($idlote, $cliente, $idcompra)
	{
		include '../conexion.php';
		$stmtcompra = $conn->prepare("INSERT INTO ficha_compra_lotes (id_lote,id_registro,id_compra) VALUES (?,?,?)");
		$stmtcompra->bind_param('sss', $idlote, $cliente, $idcompra);
		$stmtcompra->execute();
		return;
	}
	// funciona actualizar lote
	function actualizarLote($estado, $cliente, $lote)
	{
		include '../conexion.php';
		$stmtLotes = $conn->prepare("UPDATE lotes SET estado = ?, id_registro = ? WHERE id_lote = ?");
		$stmtLotes->bind_param('sss', $estado, $cliente, $lote);
		$stmtLotes->execute();
		return;
	}

	// funciona cuota lote
	function cuotaLote($area, $preciovara, $idcompra, $meses)
	{
		include '../conexion.php';
		$stmtCuota = $conn->prepare("UPDATE ficha_compra SET cuota = ? WHERE id_ficha_compra = ?");
		$total = ($area * $preciovara);
		$cuota = ($total / $meses);
		$stmtCuota->bind_param('ss', $cuota, $idcompra);
		$stmtCuota->execute();
		return;
	}

	//generar un  id_contrato_compra con año, id_registro, mes y last_id
	function generarIdContrato($last_id, $lote, $id_registro, $fechaventa, $prima, $precio_vara2, $id_compra, $plazo)
	{
		include '../conexion.php';
		$ano = date('y', strtotime($fechaventa));
		$mes = date('m', strtotime($fechaventa));
		$id_contrato = 'LO' . $ano . $mes . '-' . $id_registro . '-' . $last_id;

		$stmtIdContrato = $conn->prepare("UPDATE ficha_compra SET id_contrato_compra = ? WHERE id_ficha_compra = ?");
		$stmtIdContrato->bind_param('ss', $id_contrato, $last_id);
		$stmtIdContrato->execute();

		$stmtIdContratoLote = $conn->prepare("UPDATE lotes SET id_contrato = ? WHERE id_lote = ?");
		$stmtIdContratoLote->bind_param('ss', $id_contrato, $lote);
		$stmtIdContratoLote->execute();

		totalCompra($precio_vara2, $prima, $id_compra, $id_contrato, $plazo);

		return;
	}


	// Calacular total de la compra
	function totalCompra($preciovara, $prima, $idcompra, $idcontrato, $plazo)
	{
		include '../conexion.php';
		$resultado = obtenerTotalVarasContrato($idcontrato);
		$row = $resultado->fetch_assoc();
		//suma de varas
		$sumavaras = $row['suma'];
		//gran total = suma de varas * precio vara
		$granTotal = ($sumavaras * $preciovara);

		//Saldo Actaul = gran total - prima
		$saldoActual = ($granTotal - $prima);
		//cuota = saldo actual / plazo
		$cuota = ($saldoActual / $plazo);
		//insertar cuota en ficha_compra
		$stmtTotal = $conn->prepare("UPDATE ficha_compra SET total_venta = ?, saldo_actual = ?, cuota = ? WHERE id_ficha_compra = ?");
		$stmtTotal->bind_param('ssss', $granTotal, $saldoActual, $cuota, $idcompra);
		$stmtTotal->execute();
		return;
	}


	//conexion
	try {
		//Preparar la consulta de insertar bloque
		$statement = $conn->prepare("INSERT INTO ficha_compra (fechaSolicitud, horaSolicitud, id_registro, fecha_venta, prima, plazo_anios, dia_pago, fecha_primer_cuota, plazo_meses, tipo, id_proyecto, estado, vendedor, cuenta_bancaria) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
		$statement->bind_param('ssssssssssssss', $fechaSolicitud, $horaSolicitud, $id_registro, $fecha_venta, $prima, $plazo_anios, $dia_pago, $fecha_primer_cuota, $plazo_meses, $tipo_venta, $proyecto, $estado, $vendedor, $cuenta_bancaria);
		$statement->execute();
		$last_id = mysqli_insert_id($conn);
		//ciclo for con arreglo de lotes de venta con metodo posts
		$lotes = $_POST["lotes"];
		for ($i = 0; $i < sizeof($lotes); $i++) {
			$id_lote = $lotes[$i];
			// echo $id_lote;
			$id_compra = $last_id;
			insertarFichaCompra($id_lote, $id_registro, $id_compra);
			actualizarLote($estado_lote, $id_registro, $id_lote);


			$resultadoPrecio = obtenerPrecioLote($id_lote);
			$row = $resultadoPrecio->fetch_assoc();
			$areav2 = $row['areav2'];

			// cuotaLote($areav2, $precio_vara2, $id_compra, $plazo_meses);

			generarIdContrato($last_id, $id_lote, $id_registro, $fecha_venta, $prima, $precio_vara2, $id_compra, $plazo_meses);

			$estadoquery = true;
		}
		//consulta si esta duplicado
		if ($statement->affected_rows > 0 && $estadoquery) {
			$respuesta = array(
				'respuesta' => 'correcto',
				'fechaSolicitud' => $fechaSolicitud,
				'horaSolicitud' => $horaSolicitud,
				'id_registro' => $id_registro,
				'tipo' => $accion
			);
		} else {
			$respuesta = array(
				'respuesta' => 'error',
			);
		}
		$statement->close();
		$conn->close();
	} catch (Exception $e) {
		//En caso de un error, tomar la exepción
		$respuesta = array(
			//Arreglo asociativo
			'pass' => $e->getMessage(),
			// 'pass' => $hash_password
		);
	}
	echo json_encode($respuesta);
}
