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
					<h3>Pacientes</h3>
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
					<h5 class="card-title">Nuevo Paciente</h5>
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
					<form class="form" id="nuevoPaciente" method="post" enctype="multipart/form-data">
						<div class="tab-content" id="myTabContent">
							<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
								<div class="card">
									<div class="card-content">
										<div class="card-body">
											<div class="row">
												<div class="col-md-6 col-12">
													<div class="form-group">
														<label for="first-name-column">Código Paciente</label>
														<input type="number" class="form-control" id="codigopaciente" name="codigopaciente" min="00001" max="99999" placeholder="00001">
													</div>
												</div>
												<div class="col-md-6 col-12">
													<div class="form-group">
														<label for="first-name-column">Nombre Paciente</label>
														<input type="hidden" id="fechaSolicitud" name="fechaSolicitud" value="<?php echo date('Y-m-d'); ?>">
														<input type="hidden" id="horaSolicitud" name="horaSolicitud" value="<?php echo date('H:i:s'); ?>">
														<input type="text" class="form-control" id="nombre_completo" name="nombre_completo" placeholder="Nombre completo">
													</div>
												</div>
												<div class="col-md-6 col-12">
													<div class="form-group">
														<label for="last-name-column">Raza</label>
														<select class="choices form-select" id="raza" name="raza">
															<option value="">Seleccionar Raza</option>
															<?php
															$query = obtenerRaza();
															// $consulta = $conn->query("SELECT * FROM ficha_directorio ORDER BY fecha_solicitud DESC, hora_solicitud ASC");
															$numero = 1;
															include 'includes/conexion.php';
															//eliminar y modificar la informacion del paciente
															while ($row = oci_fetch_array($query, OCI_ASSOC + OCI_RETURN_NULLS)) {
															?>
																<option value="<?php echo $row['COD_RAZA'] ?>"><?php echo $row['NOMBRE_RAZA'] ?></option>
															<?php
															}
															oci_close($conexion);
															?>
														</select>
													</div>
												</div>
												<div class="col-md-6 col-12">
													<div class="form-group">
														<label for="last-name-column">Dueño</label>
														<select class="choices form-select" id="dueno" name="dueno">
															<option value="">Seleccionar Dueño</option>
															<?php
															$query = obtenerDueno();
															// $consulta = $conn->query("SELECT * FROM ficha_directorio ORDER BY fecha_solicitud DESC, hora_solicitud ASC");
															$numero = 1;
															include 'includes/conexion.php';
															//eliminar y modificar la informacion del paciente
															while ($row = oci_fetch_array($query, OCI_ASSOC + OCI_RETURN_NULLS)) {
															?>
																<option value="<?php echo $row['ID_DUENO'] ?>"><?php echo $row['NOMBRE_COMPLETO'] ?></option>
															<?php
															}
															oci_close($conexion);
															?>
														</select>
													</div>
												</div>
												<div class="col-md-6 col-12">
													<div class="form-group">
														<label for="last-name-column">Médico Cabecera</label>
														<select class="choices form-select" id="medicocabecera" name="medicocabecera">
															<option value="">Seleccionar Médico de Cabecera</option>
															<?php
															$query = obtenerMedicoCabecera();
															// $consulta = $conn->query("SELECT * FROM ficha_directorio ORDER BY fecha_solicitud DESC, hora_solicitud ASC");
															$numero = 1;
															include 'includes/conexion.php';
															//eliminar y modificar la informacion del paciente
															while ($row = oci_fetch_array($query, OCI_ASSOC + OCI_RETURN_NULLS)) {
															?>
																<option value="<?php echo $row['ID_MEDICO'] ?>"><?php echo $row['NOMBRE_COMPLETO'] ?></option>
															<?php
															}
															oci_close($conexion);
															?>
														</select>
													</div>
												</div>
												<div class="col-md-6 col-12">
													<div class="form-group">
														<label for="first-name-column">Foto Paciente</label>
														<input name="foto" class="form-control" id="foto" type="file" accept="image/png,image/jpeg" />
													</div>
												</div>
												<div class="col-md-6 col-12">
													<div class="form-group">
														<label for="first-name-column">Fecha Primer Ingreso</label>
														<input type="date"  class="form-control" name="fecha_inicial" id="fecha_inicial" class="form-control" placeholder="Fecha Primer Ingreso">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12 d-flex justify-content-end">
								<input type="hidden" class="btn btn-primary me-1 mb-1" id="tipo" value="solicitud">
								<input class="btn btn-primary me-1 mb-1" type="submit" value="Crear Cliente" name="update">
								<a href="pacientes.php">
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