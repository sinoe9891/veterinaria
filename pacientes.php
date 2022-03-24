<?php
// session_start();
include 'includes/sesiones.php';
include 'includes/funciones.php';
include 'includes/conexion.php';
include 'includes/templates/header.php';
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
		<section class="section pacientes">
			<div class="card">
				<div class="card-body">
					<div>
						<?php
						$DateAndTime = date('d-m-Y', time());
						echo '<p>Hoy es: <strong>' . $DateAndTime . ' <span id="relojnumerico" onload"cargarReloj()"></span></p></strong>';
						?>
					</div>
					<table class="table table-striped" id="table1">
						<thead>
							<tr>
								<th>No.</th>
								<th>Nombre</th>
								<th>Raza</th>
								<th>Nombre Dueño</th>
								<th>Médico</th>
								<th>Fecha 1er Ingreso</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>

							<?php
							$query = obtenerPacientes();
							// $consulta = $conn->query("SELECT * FROM ficha_directorio ORDER BY fecha_solicitud DESC, hora_solicitud ASC");
							$numero = 1;
							include 'includes/conexion.php';
							//eliminar y modificar la informacion del paciente
							while ($row = oci_fetch_array($query, OCI_ASSOC + OCI_RETURN_NULLS)) {
							?>
								<tr id="solicitud:<?php echo $row['COD_PACIENTE'] ?>">
									<td><?php echo $numero++ ?></td>
									<td><?php echo $row['NOMBRE_PACIENTE'] ?></td>
									<td><?php echo $row['COD_RAZA'] ?></td>
									<td><?php echo $row['ID_DUENO'] ?></td>
									<td><?php echo $row['ID_MEDICO'] ?></td>
									<td><?php echo $row['FECHA_INICIAL'] ?></td>
									<td>
										<a href="edit-paciente.php?ID=<?php echo $row['COD_PACIENTE'] ?>" target="_self"><span class="badge bg-primary">Editar</span></a>
										<i class="fas fa-trash"></i>
									</td>
								</tr>
							<?php
							}
							oci_close($conexion);

							?>
						</tbody>
					</table>
					<a href="new-paciente.php" class="btn btn-primary">Nuevo Registro</a>
				</div>
			</div>
		</section>
	</div>

	<?php
	include('includes/templates/created.php');
	?>
</div>
</div>

<script src="assets/vendors/simple-datatables/simple-datatables.js"></script>
<script src="assets/js/bootstrap.bundle.min.js"></script>
<script>
	// Simple Datatable
	let table1 = document.querySelector('#table1');
	let dataTable = new simpleDatatables.DataTable(table1);
</script>
<?php
include('includes/templates/footer.php');
?>
<script src="assets/js/main.js"></script>
</body>

</html>