<?php
// session_start();
include 'includes/sesiones.php';
include 'includes/funciones.php';
include 'includes/conexion.php';
include 'includes/templates/header.php';
if (isset($_GET['ID'])) {
	$user_id = $_GET['ID'];
}
date_default_timezone_set('America/Tegucigalpa');
include 'includes/templates/sidebar.php';
?>
<div id="main">
	<header class="mb-3">
		<a href="#" class="burger-btn d-block d-xl-none">
			<i class="bi bi-justify fs-3"></i>
		</a>
	</header>

	<div class="page-heading">
		<div class="page-title">
			<div class="row">
				<div class="col-12 col-md-6 order-md-1 order-last">
					<h3>Turnos</h3>
				</div>
				<div class="col-12 col-md-6 order-md-2 order-first">
					<nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="index.php">Dashboard</a></li>
							<li class="breadcrumb-item active" aria-current="page">Control</li>
						</ol>
					</nav>
				</div>
			</div>
		</div>
		<section class="section">
			<div class="card">
				<div class="card-header">
					<h5 class="card-title">Edit Turnos</h5>
				</div>
				<div class="card-body">
					<div>
						<?php
						$DateAndTime = date('d-m-Y', time());
						echo '<p>Hoy es: <strong>' . $DateAndTime . ' <span id="relojnumerico" onload"cargarReloj()"></span></p></strong>';
						?>
					</div>
					<ul class="nav nav-tabs" id="myTab" role="tablist">
						<li class="nav-item" role="presentation">
							<a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Información</a>
						</li>
					</ul>
					<form class="form" id="editarTurno" method="post" enctype="multipart/form-data">
						<div class="tab-content" id="myTabContent">
							<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
								<div class="card">
									<div class="card-content">
										<div class="card-body">
											<div class="row">
												<?php
												//formulario para  modificar paciente por medio de metodo get;
												$query = obtenerTurnosId($user_id);
												// $consulta = $conn->query("SELECT * FROM ficha_directorio ORDER BY fecha_solicitud DESC, hora_solicitud ASC");
												$numero = 1;
												include 'includes/conexion.php';
												//eliminar y modificar la informacion del paciente
												$cod = $_GET['ID'];
												while ($row = oci_fetch_array($query, OCI_ASSOC + OCI_RETURN_NULLS)) {
													$codigo = $row['COD_TURNO'];
													$nombre = $row['NOMBRE_COMPLETO'];
													$id_medico = $row['ID_MEDICO'];
													$fechaturno = $row['FECHA_TURNO'];
												?>
													<div class="col-md-6 col-12">
														<div class="form-group">
															<label for="first-name-column">Código</label>
															<input type="text" class="form-control" id="cod_turno" name="cod_turno" min="00001" max="99999" value="<?php echo $codigo; ?>" placeholder="00001" readonly="true">
														</div>
													</div>
													<div class="col-md-6 col-12">
														<div class="form-group">
															<label for="first-name-column">Médico</label>
															<select class="choices form-select" id="medico" name="medico">
																<option value="">Seleccionar Médico</option>
																<?php
																$query = obtenerMedicoCabecera();
																// $consulta = $conn->query("SELECT * FROM ficha_directorio ORDER BY fecha_solicitud DESC, hora_solicitud ASC");
																include 'includes/conexion.php';
																//eliminar y modificar la informacion del medico
																while ($row = oci_fetch_array($query, OCI_ASSOC + OCI_RETURN_NULLS)) {
																	$id_medic = $row['ID_MEDICO'];
																	$medca = $row['NOMBRE_COMPLETO'];
																	if ($id_medic == $id_medico) {
																		echo '<option name="medico" value="' . $id_medic . '" selected>' . $medca . '</option>';
																	} else {
																		echo '<option name="medico" value="' . $id_medic . '">' . $medca . '</option>';
																	}
																}
																oci_close($conexion);
																?>
															</select>
														</div>
													</div>
													<div class="col-md-6 col-12">
														<div class="form-group">
															<label for="first-name-column">Fecha Turno</label>
															<?php
															//convertir $fechaturno a formato date input
															$fecha = date('Y-m-d', strtotime($fechaturno));
															?>
															<input type="date" class="form-control" id="fecha_turno" name="fecha_turno" value="<?php echo $fecha; ?>" placeholder="">
														</div>
													</div>

												<?php
												};
												?>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12 d-flex justify-content-end">
								<input type="hidden" class="btn btn-primary me-1 mb-1" id="tipo" value="editarTurno">
								<input class="btn btn-primary me-1 mb-1" type="submit" value="Actualizar" name="update">
								<a href="enfermedades.php">
									<div class="btn btn-light-secondary me-1 mb-1">Regresar</div>
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>

		</section>
	</div>

	<?php
	include('includes/templates/created.php');
	?>
</div>
</div>
<?php
include('includes/templates/footer.php');
?>
<script src="assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js"></script>
<script src="assets/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendors/choices.js/choices.min.js"></script>
<script src="assets/js/main.js"></script>
</body>

</html>