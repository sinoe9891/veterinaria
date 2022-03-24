<?php
include '../funciones.php';
date_default_timezone_set('America/Tegucigalpa');
include '../conexion.php';
$accion = $_POST['accion'];

//Código para crear administradores
if ($accion === 'solicitud') {
	$codigopaciente = $_POST['codigopaciente'];
	$nombre_completo = $_POST['nombres'];
	$raza = $_POST['raza'];
	$dueno = $_POST['dueno'];
	$medicocabecera = $_POST['medicocabecera'];
	$fecha_inicial = $_POST['fecha_inicial'];
	//$fecha_inicial = date("d-M-Y", strtotime($fecha_inicial));
	$direccion = '';
	$searchString = " ";
	$replaceString = "";
	$namefile = strtolower(quitar_acentos(str_replace($searchString, $replaceString, $nombre_completo)));

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
			// echo $archivoimagen;
			// Mover del temporal al directorio actual
			crearDireccion($carpeta);
			move_uploaded_file($ubicacionTemporal, $ruta_archivos);
		}
	} else {
		$imagenes = '';
	}

	//Importar la conexión
	//QUERY DE UPDATE ACTUALIZACION DE LA TABLA PACIENTE DEL MODULO DE ADMINISTRACION
	/*$query = oci_parse($conexion,"UPDATE PACIENTE SET NOMBRE_PACIENTE = '$nombre_completo', COD_RAZA = '$raza', ID_DUENO = '$dueno', ID_MEDICO = '$medicocabecera', FOTO_PACIENTE = '$archivoimagen', FECHA_INICIAL = '$fecha_inicial' WHERE COD_PACIENTE = '$codigopaciente'");
	oci_execute($query);*/
	
	$query = "BEGIN PAX_UP ('$codigopaciente', '$nombre_completo', '$raza', '$dueno', '$medicocabecera', '$archivoimagen', to_date('$fecha_inicial', 'rr-mm-dd')); END;";
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
//Código para crear administradores
if ($accion === 'editarMedico') {
	$codigopaciente = $_POST['id_medico'];
	$nombre_completo = $_POST['nombres'];
	$direccion = $_POST['direccion'];
	$telefonos = $_POST['telefonos'];
	$emergencias = $_POST['emergencias'];
	$fecha_inicial = $_POST['fecha_inicial'];
	$fecha_inicial = date("d-M-Y", strtotime($fecha_inicial));

	//Importar la conexión
	//QUERY DE UPDATE ACTUALIZACION DE LA TABLA PACIENTE DEL MODULO DE ADMINISTRACION
	$query = oci_parse($conexion,"UPDATE MEDICO SET NOMBRE_COMPLETO = '$nombre_completo', DIRECCION = '$direccion', TELEFONOS = '$telefonos', ATIENDEN_EMERG = '$emergencias', FECHA_INGRESO = '$fecha_inicial' WHERE ID_MEDICO = '$codigopaciente'");
	oci_execute($query);
	
	// $query = "BEGIN PAX_UP ('$codigopaciente', '$nombre_completo', '$raza', '$dueno', '$medicocabecera', '$archivoimagen', to_date('$fecha_inicial', 'rr-mm-dd')); END;";
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
if ($accion === 'editarDueno') {
	$id_dueno = $_POST['id_dueno'];
	$nombre_completo = $_POST['nombres'];
	$direccion = $_POST['direccion'];
	$telefonos = $_POST['telefonos'];

	//Importar la conexión
	//QUERY DE UPDATE ACTUALIZACION DE LA TABLA PACIENTE DEL MODULO DE ADMINISTRACION
	$query = oci_parse($conexion,"UPDATE DUENO SET NOMBRE_COMPLETO = '$nombre_completo', DIRECCION = '$direccion', TELEFONOS = '$telefonos' WHERE ID_DUENO = '$id_dueno'");
	oci_execute($query);
	
	// $query = "BEGIN PAX_UP ('$codigopaciente', '$nombre_completo', '$raza', '$dueno', '$medicocabecera', '$archivoimagen', to_date('$fecha_inicial', 'rr-mm-dd')); END;";
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

if ($accion === 'editarCirugia') {
	$id_cirugia = $_POST['id_cirugia'];
	$nombre = $_POST['nombre'];
	$riesgo = $_POST['riesgo'];
	$duracion = $_POST['duracion'];
	$anestesia = $_POST['anestesia'];
	$descripcion = $_POST['descripcion'];

	//Importar la conexión
	//QUERY DE UPDATE ACTUALIZACION DE LA TABLA PACIENTE DEL MODULO DE ADMINISTRACION
	$query = oci_parse($conexion,"UPDATE CIRUGIA SET NOMBRE_CIRUGIA = '$nombre', COD_RIESGO = '$riesgo', DURACION_ESTIMADA = '$duracion', DESCRIPCION_CIRUGIA = '$descripcion', ANESTESIA_GENERAL = '$anestesia' WHERE COD_CIRUGIA = '$id_cirugia'");
	oci_execute($query);
	
	// $query = "BEGIN PAX_UP ('$codigopaciente', '$nombre_completo', '$raza', '$dueno', '$medicocabecera', '$archivoimagen', to_date('$fecha_inicial', 'rr-mm-dd')); END;";
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
