<body >
	<div id="app">
		<div id="sidebar" class="active">
			<div class="sidebar-wrapper active">
				<div class="sidebar-header">
					<div class="d-flex justify-content-between">
						<div class="logo">
							<a href="index.php"><img src="assets/images/logo/logo.svg" alt="Logo" srcset=""></a>
						</div>
						<div class="toggler">
							<a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
						</div>
					</div>
				</div>
				<?php
				$aqui = '';
				if (obtenerPaginaActual() == 'pacientes' || obtenerPaginaActual() == 'edit-paciente' || obtenerPaginaActual() == 'new-paciente') {
					$pacientes = 'active';
				} else {
					$pacientes = '';
				}

				if (obtenerPaginaActual() != 'index') {
					$aqui = '';
				} else {
					$aqui = 'active';
				}
				if (obtenerPaginaActual() === 'medicos' || obtenerPaginaActual() === 'edit-bloque' || obtenerPaginaActual() === 'new-bloque') {
					$medicos = 'active';
				} else {
					$medicos = '';
				}
				if (obtenerPaginaActual() === 'duenos' || obtenerPaginaActual() === 'edit-duenos' || obtenerPaginaActual() === 'new-duenos') {
					$duenos = 'active';
				} else {
					$duenos = '';
				}
				if (obtenerPaginaActual() == 'citas' || obtenerPaginaActual() == 'edit-citas' || obtenerPaginaActual() == 'new-citas') {
					$citas = 'active';
				} else {
					$citas = '';
				}
				if (obtenerPaginaActual() == 'turnos' || obtenerPaginaActual() == 'edit-turno' || obtenerPaginaActual() == 'new-turno') {
					$turnos = 'active';
				} else {
					$turnos = '';
				}
				if (obtenerPaginaActual() == 'cirugias' || obtenerPaginaActual() == 'cobro_cuota' || obtenerPaginaActual() == 'cronograma') {
					$cirugias = 'active';
				} else {
					$cirugias = '';
				}
				if (obtenerPaginaActual() == 'enfermedades' || obtenerPaginaActual() == 'new-enfermedad' || obtenerPaginaActual() == 'edit-enfermedad') {
					$enfermedades = 'active';
				} else {
					$enfermedades = '';
				}
				?>
				<div class="sidebar-menu">
					<ul class="menu">
						<li class="sidebar-title">Menu</li>

						<li class="sidebar-item  <?php echo $aqui; ?>">
							<a href="index.php" class='sidebar-link'>
								<i class="bi bi-grid-fill"></i>
								<span>Dashboard</span>
							</a>
						</li>
						<li class="sidebar-item  has-sub <?php echo $pacientes . $duenos . $citas ?>">
							<a href="#" class='sidebar-link'>
								<i class="fa fa-table"></i>
								<span>Control Clientes</span>
							</a>
							<ul class="submenu <?php echo $pacientes . $duenos . $cirugias . $citas ?>">
								<li class="submenu-item <?php echo $pacientes ?>">
									<a href="pacientes.php">Pacientes</a>
								</li>
								<li class="submenu-item <?php echo $duenos ?>">
									<a href="duenos.php">Dueños</a>
								</li>
								<li class="submenu-item <?php echo $citas ?> ">
									<a href="citas.php">Citas</a>
								</li>
								<li class="submenu-item <?php echo $cirugias ?>">
									<a href="cirugias.php">Cirugias</a>
								</li>
							</ul>
						</li>
						<li class="sidebar-item  has-sub <?php echo $medicos . $lotes . $enfermedades . $turnos ?>">
							<a href="#" class='sidebar-link'>
								<i class="bi bi-stack"></i>
								<span>Control Interno</span>
							</a>
							<ul class="submenu <?php echo $medicos . $lotes . $enfermedades . $turnos ?>">
								<li class="submenu-item <?php echo $medicos ?>">
									<a href="medicos.php">Médicos</a>
								</li>
								<li class="submenu-item <?php echo $enfermedades ?>">
									<a href="enfermedades.php">Enfermedades</a>
								</li>
								<li class="submenu-item <?php echo $turnos ?>">
									<a href="turnos.php">Turnos</a>
								</li>
								<li class="submenu-item <?php echo $lotes ?>">
									<a href="razas.php">Razas</a>
								</li>
								<li class="submenu-item <?php echo $lotes ?>">
									<a href="especies.php">Especies</a>
								</li>
							</ul>
						</li>
						<li class="sidebar-item  has-sub">
							<a href="#" class='sidebar-link'>
								<i class="bi bi-life-preserver"></i>
								<span>Configuración</span>
							</a>
							<ul class="submenu">
								<li class="submenu-item">
									<a href="backup_database.php?pass=Stark9891">Backup DB</a>
								</li>
							</ul>
						</li>
						<li class="sidebar-item  ">
							<a href="login.php?cerrar_sesion=true" class='sidebar-link'>
								<img src="assets/images/icons/logout.svg" alt="">
								<span>Logout</span>
							</a>
						</li>
					</ul>
				</div>
				<button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
			</div>
		</div>