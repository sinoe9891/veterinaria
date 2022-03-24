addEventListener();
// Hola
function addEventListener() {
	// Creación de registro
	let evento = document.querySelector('#formulario');
	if (evento) {
		evento.addEventListener('submit', validarRegistro);
	}
	// Actualizar de Lote
	let editarGraduate = document.querySelector('#editarLote');
	if (editarGraduate) {
		editarGraduate.addEventListener('submit', editarLote);
	}
	let editRegistro = document.querySelector('#editarPaciente');
	if (editRegistro) {
		editRegistro.addEventListener('submit', editarPaciente);
	}
	let editarMedico = document.querySelector('#editarMedico');
	if (editarMedico) {
		editarMedico.addEventListener('submit', editarMed);
	}
	let editarDuen = document.querySelector('#editarDueno');
	if (editarDuen) {
		editarDuen.addEventListener('submit', editarDueno);
	}
	let editarCirug = document.querySelector('#editarCirugia');
	if (editarCirug) {
		editarCirug.addEventListener('submit', editarCirugia);
	}
	//Nuevo Registgro
	let nuevoPaciente = document.querySelector('#nuevoPaciente');
	if (nuevoPaciente) {
		nuevoPaciente.addEventListener('submit', nuevoPaci);
	}
	let nuevoDueno = document.querySelector('#nuevoDueno');
	if (nuevoDueno) {
		nuevoDueno.addEventListener('submit', nuevoDuen);
	}
	let nuevoMedico = document.querySelector('#nuevoMedico');
	if (nuevoMedico) {
		nuevoMedico.addEventListener('submit', nuevoMed);
	}
	let nuevoCiru = document.querySelector('#nuevaCirugia');
	if (nuevoCiru) {
		nuevoCiru.addEventListener('submit', nuevoCirug);
	}





	//Nuevo Bloque
	let nuevoBloque = document.querySelector('#nuevoBloque');
	if (nuevoBloque) {
		nuevoBloque.addEventListener('submit', newbloque);
	}
	//Nuevo Lote
	let nuevoLote = document.querySelector('#nuevoLote');
	if (nuevoLote) {
		nuevoLote.addEventListener('submit', newlote);
	}
	//Nuevo venta
	let nuevaventa = document.querySelector('#nuevaventa');
	if (nuevaventa) {
		nuevaventa.addEventListener('submit', newventa);
	}
	//Nuevo venta
	let editarventa = document.querySelector('#editarventa');
	if (editarventa) {
		editarventa.addEventListener('submit', editventa);
	}
	let editarBloque = document.querySelector('#editarRegistroBloque');
	if (editarBloque) {
		editarBloque.addEventListener('submit', editarRegistroBloque);
	}
	let editarLote = document.querySelector('#editarRegistroLote');
	if (editarLote) {
		editarLote.addEventListener('submit', editarRegistroLote);
	}
	//Asignar Lote
	let asignar = document.querySelector('#asignar_lote');
	if (asignar) {
		asignar.addEventListener('submit', asignarLote);
	}





	//Detectar Click de eliminar
	let eliminarImg = document.querySelector('.img-formulario');
	if (eliminarImg) {
		eliminarImg.addEventListener('click', eliminarFoto);
	}
	// Solicitud de Graduado
	let solicitud = document.querySelector('#formulario-solicitud');
	if (solicitud) {
		solicitud.addEventListener('submit', validarSolicitud);
	}
	// Solicitud de Graduando
	let solicitudGraduandos = document.querySelector('#form-graduandos');
	if (solicitudGraduandos) {
		solicitudGraduandos.addEventListener('submit', validarActualizacionGraduando);
	}
	// Aprobar Solicitud de GRADUANDO
	let aprobacionGraduando = document.querySelector('#form-aprobacion-graduando');
	if (aprobacionGraduando) {
		aprobacionGraduando.addEventListener('submit', aprobarSolicitudGraduando);
	}
	// Aprobar Solicitud de Graduado
	let aprobacion = document.querySelector('#formulario-aprobacion');
	if (aprobacion) {
		aprobacion.addEventListener('submit', aprobarSolicitud);
	}

}

minimizar();
function minimizar() {
	if (window.innerWidth < 400) {
		// alert('Hello' + window.innerWidth);
		document.getElementById('sidebar').classList.remove('active');
	}
}
window.onload = function () { almacenaValoresIniciales(); };
// Función almacenar la información de los formularios
function almacenaValoresIniciales() {
	var y;
	//cargo todos los formularios que haya en la página en un array
	var formularios = document.getElementsByTagName("form");
	//recorro todos los campos de todos los formularios y almaceno en dato de usuario valorinicial el     valor inicial del campo
	for (var x = 0; x < formularios.length; x++) {
		for (var i = 0; i < formularios[x].elements.length; i++) {

			formularios[x].elements[i].dataset.valorinicial = formularios[x].elements[i].value;

		}
	}
}
//Funcion FORMATO ID
function formatID(identidad) {

	const regExp = new RegExp(/[0-9]{4,4}-[0-9]{4,4}-[0-9]{5,5}/) // --- sin comillas
	const resultado = regExp.test(identidad);
	return resultado
	// console.log(resultado);
}

//Funcion para ver en que pagina estoy
function filename() {
	var rutaAbsoluta = self.location.href;
	var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
	var rutaRelativa = rutaAbsoluta.substring(posicionUltimaBarra + "/".length, rutaAbsoluta.length);
	return rutaRelativa;
}
//-------------------Solicitud de Graduado para actualziación-------------------
function nuevoPaci(e) {
	e.preventDefault();

	let horaSolicitud = document.querySelector('#horaSolicitud').value,
		fechaSolicitud = document.querySelector('#fechaSolicitud').value,
		codigopaciente = document.querySelector('#codigopaciente').value,
		nombres = document.querySelector('#nombre_completo').value,
		raza = document.querySelector('#raza').value,
		dueno = document.querySelector('#dueno').value,
		medicocabecera = document.querySelector('#medicocabecera').value,
		fecha_inicial = document.querySelector('#fecha_inicial').value,
		fotos = document.querySelector('#foto').files,
		tipo = document.querySelector('#tipo').value,
		tamano = 0;

	if (fotos.length > 0) {
		for (var i = 0; i < fotos.length; i++) {
			const fsize = fotos.item(i).size;
			let file = parseFloat(((fsize / 1024) / 1024).toFixed(2));
			tamano = tamano + file;
			if (tamano > 10) {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Archivos demasidos grandes, deben de ser menores 10MB'
				});
				enviar = false;
				break;
			} else if (tamano <= 10) {
				enviar = true;
			}
		}
		console.log(tamano.toFixed(2) + 'MB');
	}


	if (nombres === '' || raza === '' || dueno === '' || medicocabecera === '' && fecha_inicial === '' || codigopaciente === '') {
		//validación Falló
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de llenar los campos obligatorios',
		});
	} else if (nombres != '' || raza != '' || dueno != '' || medicocabecera != '' && fecha_inicial != '') {
		//Campos son correctos - Ejecutamos AJAX
		//Crear  FormData - Datos que se envían al servidor
		console.log('enviar');
		let datos = new FormData();
		datos.append('horaSolicitud', horaSolicitud);
		datos.append('fechaSolicitud', fechaSolicitud);
		datos.append('codigopaciente', codigopaciente);
		datos.append('nombres', nombres);
		datos.append('raza', raza);
		datos.append('dueno', dueno);
		datos.append('medicocabecera', medicocabecera);
		datos.append('fecha_inicial', fecha_inicial);
		for (const archivo of fotos) {
			datos.append('archivos[]', archivo);
		}
		datos.append('accion', tipo);
		//Crear  el llamado a Ajax
		let xhr = new XMLHttpRequest();
		//Abrir la Conexión
		xhr.open('POST', 'includes/models/model-nuevo.php', true);

		//Retorno de Datos
		xhr.onload = function () {
			if (this.status === 200) {
				//esta es la respuesta la que tenemos en el model
				// let respuesta = xhr.responseText;
				let respuesta = JSON.parse(xhr.responseText);
				let urlactual = filename()
				console.log(respuesta);
				// console.log(respuesta.respuesta);
				// console.log(respuesta.respuesta);
				if (respuesta.respuesta === 'correcto') {
					//si es un nuevo usuario 
					if (respuesta.tipo == 'solicitud' && urlactual == 'new-paciente.php') {
						Swal.fire({
							icon: 'success',
							title: '¡Solicitud realizada!',
							text: 'Se verificarán los datos y se aprobará la actualización',
							position: 'center',
							showConfirmButton: true

						}).then(function () {
							window.location = "pacientes.php";
						});;
					} else if (respuesta.tipo == 'solicitud' && urlactual == 'precontrato.php') {
						Swal.fire({
							icon: 'success',
							title: '¡Precontrato Enviado!',
							text: 'Se verificarán los datos y se contactarán con usted',
							position: 'center',
							showConfirmButton: true
						}).then(function () {
							window.location.reload();
						});;
					}
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Hubo un error en la solicitud'
					})
				}
			}
		}
		// Enviar la petición
		xhr.send(datos);
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'ID Invalido Cliente y Beneficiario (13 digitos más guiones) '
		});
	}
}

function nuevoCirug(e) {
	e.preventDefault();

	let id_cirugia = document.querySelector('#id_cirugia').value,
		tipo = document.querySelector('#tipo').value,
		nombre = document.querySelector('#nombre').value,
		riesgo = document.querySelector('#riesgo').value,
		duracion = document.querySelector('#duracion').value,
		anestesia = document.querySelector('#anestesia').value,
		descripcion = document.querySelector('#descripcion').value;



	if (nombre === '' || riesgo === '' || duracion === '' || anestesia === '' || descripcion === '') {
		//validación Falló
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de llenar los campos obligatorios',
		});
	} else if (nombre != '' || riesgo != '' || duracion != '' || anestesia != '' || descripcion != '') {
		//Campos son correctos - Ejecutamos AJAX
		//Crear  FormData - Datos que se envían al servidor
		console.log('enviar');
		let datos = new FormData();
		datos.append('id_cirugia', id_cirugia);
		datos.append('nombre', nombre);
		datos.append('riesgo', riesgo);
		datos.append('duracion', duracion);
		datos.append('anestesia', anestesia);
		datos.append('descripcion', descripcion);
		datos.append('accion', tipo);
		//Crear  el llamado a Ajax
		let xhr = new XMLHttpRequest();
		//Abrir la Conexión
		xhr.open('POST', 'includes/models/model-nuevo.php', true);

		//Retorno de Datos
		xhr.onload = function () {
			if (this.status === 200) {
				//esta es la respuesta la que tenemos en el model
				// let respuesta = xhr.responseText;
				let respuesta = JSON.parse(xhr.responseText);
				let urlactual = filename()
				console.log(respuesta);
				// console.log(respuesta.respuesta);
				// console.log(respuesta.respuesta);
				if (respuesta.respuesta === 'correcto') {
					//si es un nuevo usuario 
					if (respuesta.tipo == 'nuevaCirugia' && urlactual == 'new-cirugia.php') {
						Swal.fire({
							icon: 'success',
							title: '¡Solicitud realizada!',
							text: 'Se verificarán los datos y se aprobará la actualización',
							position: 'center',
							showConfirmButton: true

						}).then(function () {
							window.location = "cirugias.php";
						});;
					} 
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Hubo un error en la solicitud'
					})
				}
			}
		}
		// Enviar la petición
		xhr.send(datos);
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'ID Invalido Cliente y Beneficiario (13 digitos más guiones) '
		});
	}
}
function nuevoMed(e) {
	e.preventDefault();

	let id_medico = document.querySelector('#id_medico').value,
		nombre_completo = document.querySelector('#nombre_completo').value,
		direccion = document.querySelector('#direccion').value,
		telefonos = document.querySelector('#telefonos').value,
		emergencias = document.querySelector('#emergencias').value,
		fecha_inicial = document.querySelector('#fecha_inicial').value,
		tipo = document.querySelector('#tipo').value;

	if (nombre_completo === '' || telefonos === '' || emergencias === '' || fecha_inicial === '' && fecha_inicial === '' || direccion === '') {
		//validación Falló
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de llenar los campos obligatorios',
		});
	} else if (nombre_completo != '' || telefonos != '' || emergencias != '' || fecha_inicial != '' && fecha_inicial != '' || direccion != '') {
		//Campos son correctos - Ejecutamos AJAX
		//Crear  FormData - Datos que se envían al servidor
		console.log('enviar');
		let datos = new FormData();

		datos.append('id_medico', id_medico);
		datos.append('nombre_completo', nombre_completo);
		datos.append('direccion', direccion);
		datos.append('telefonos', telefonos);
		datos.append('emergencias', emergencias);
		datos.append('fecha_inicial', fecha_inicial);
		datos.append('accion', tipo);
		//Crear  el llamado a Ajax
		let xhr = new XMLHttpRequest();
		//Abrir la Conexión
		xhr.open('POST', 'includes/models/model-nuevo.php', true);

		//Retorno de Datos
		xhr.onload = function () {
			if (this.status === 200) {
				//esta es la respuesta la que tenemos en el model
				// let respuesta = xhr.responseText;
				let respuesta = JSON.parse(xhr.responseText);
				let urlactual = filename()
				console.log(respuesta);
				// console.log(respuesta.respuesta);
				// console.log(respuesta.respuesta);
				if (respuesta.respuesta === 'correcto') {
					//si es un nuevo usuario 
					if (respuesta.tipo == 'solicitudMedico' && urlactual == 'new-medicos.php') {
						Swal.fire({
							icon: 'success',
							title: '¡Solicitud realizada!',
							text: 'Se verificarán los datos y se aprobará la actualización',
							position: 'center',
							showConfirmButton: true

						}).then(function () {
							window.location = "medicos.php";
						});;
					} else if (respuesta.tipo == 'solicitud' && urlactual == 'precontrato.php') {
						Swal.fire({
							icon: 'success',
							title: '¡Precontrato Enviado!',
							text: 'Se verificarán los datos y se contactarán con usted',
							position: 'center',
							showConfirmButton: true
						}).then(function () {
							window.location.reload();
						});;
					}
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Hubo un error en la solicitud'
					})
				}
			}
		}
		// Enviar la petición
		xhr.send(datos);
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'ID Invalido Cliente y Beneficiario (13 digitos más guiones) '
		});
	}
}

function nuevoDuen(e) {
	e.preventDefault();

	let codigoDueno = document.querySelector('#codigoDueno').value,
		nombre_completo = document.querySelector('#nombre_completo').value,
		direcciondueno = document.querySelector('#direcciondueno').value,
		telefonos = document.querySelector('#telefonos').value,
		tipo = document.querySelector('#tipo').value;

	if (nombre_completo === '' || telefonos === '' || direcciondueno === '' && codigoDueno === '') {
		//validación Falló
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de llenar los campos obligatorios',
		});
	} else if (nombre_completo != '' || telefonos != '' || direcciondueno != '' && codigoDueno != '') {
		//Campos son correctos - Ejecutamos AJAX
		//Crear  FormData - Datos que se envían al servidor
		console.log('enviar');
		let datos = new FormData();
		datos.append('codigoDueno', codigoDueno);
		datos.append('nombre_completo', nombre_completo);
		datos.append('direcciondueno', direcciondueno);
		datos.append('telefonos', telefonos);
		datos.append('accion', tipo);
		//Crear  el llamado a Ajax
		let xhr = new XMLHttpRequest();
		//Abrir la Conexión
		xhr.open('POST', 'includes/models/model-nuevo.php', true);

		//Retorno de Datos
		xhr.onload = function () {
			if (this.status === 200) {
				//esta es la respuesta la que tenemos en el model
				// let respuesta = xhr.responseText;
				let respuesta = JSON.parse(xhr.responseText);
				let urlactual = filename()
				console.log(respuesta);
				// console.log(respuesta.respuesta);
				// console.log(respuesta.respuesta);
				if (respuesta.respuesta === 'correcto') {
					//si es un nuevo usuario 
					if (respuesta.tipo == 'solicitudDueno' && urlactual == 'new-dueno.php') {
						Swal.fire({
							icon: 'success',
							title: '¡Solicitud realizada!',
							text: 'Se verificarán los datos y se aprobará la actualización',
							position: 'center',
							showConfirmButton: true

						}).then(function () {
							window.location = "duenos.php";
						});;
					} else if (respuesta.tipo == 'solicitud' && urlactual == 'precontrato.php') {
						Swal.fire({
							icon: 'success',
							title: '¡Precontrato Enviado!',
							text: 'Se verificarán los datos y se contactarán con usted',
							position: 'center',
							showConfirmButton: true
						}).then(function () {
							window.location.reload();
						});;
					}
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Hubo un error en la solicitud'
					})
				}
			}
		}
		// Enviar la petición
		xhr.send(datos);
	} else {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'ID Invalido Cliente y Beneficiario (13 digitos más guiones) '
		});
	}
}

function newbloque(e) {
	e.preventDefault();

	let nombres = document.querySelector('#nombre').value,
		proyecto = document.querySelector('#proyecto').value,
		tipo = document.querySelector('#tipo').value;


	if (nombres === '') {
		//validación Falló
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de llenar los campos',
		});
	} else {
		//Campos son correctos - Ejecutamos AJAX
		//Crear  FormData - Datos que se envían al servidor
		console.log('enviar');
		let datos = new FormData();
		datos.append('nombres', nombres);
		datos.append('proyecto', proyecto);
		datos.append('accion', tipo);
		//Crear  el llamado a Ajax
		let xhr = new XMLHttpRequest();
		//Abrir la Conexión
		xhr.open('POST', 'includes/models/model-nuevo.php', true);

		//Retorno de Datos
		xhr.onload = function () {
			if (this.status === 200) {
				//esta es la respuesta la que tenemos en el model
				// let respuesta = xhr.responseText;
				let respuesta = JSON.parse(xhr.responseText);
				console.log(respuesta);
				if (respuesta.respuesta === 'correcto') {
					//si es un nuevo usuario 
					if (respuesta.tipo == 'nuevoBloque') {
						Swal.fire({
							icon: 'success',
							title: '¡Solicitud realizada!',
							text: 'Se ha creado el bloque con éxito',
							position: 'center',
							showConfirmButton: true

						}).then(function () {
							window.location = "bloques.php";
						});;
					}
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Hubo un error en la solicitud'
					})
				}
			}
		}
		// Enviar la petición
		xhr.send(datos);
	}

}

function newlote(e) {
	e.preventDefault();
	let numero = document.querySelector('#numero').value,
		id_bloques = document.querySelector('#id_bloques').value,
		areav2 = document.querySelector('#areav2').value,
		estado = document.querySelector('#estado').value,
		colindancias = document.querySelector('#colindancias').value,
		path_lote = document.querySelector('#path_lote').value,
		combo = document.getElementById("id_bloques"),
		selected = combo.options[combo.selectedIndex].text,
		tipo = document.querySelector('#tipo').value;

	if (numero === '') {
		//validación Falló
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de llenar los campos',
		});
	} else {
		//Campos son correctos - Ejecutamos AJAX
		//Crear  FormData - Datos que se envían al servidor
		console.log('enviar');
		let datos = new FormData();
		datos.append('numero', numero);
		datos.append('id_bloques', id_bloques);
		datos.append('areav2', areav2);
		datos.append('estado', estado);
		datos.append('colindancias', colindancias);
		datos.append('path_lote', path_lote);
		datos.append('accion', tipo);
		//Crear  el llamado a Ajax
		let xhr = new XMLHttpRequest();
		//Abrir la Conexión
		xhr.open('POST', 'includes/models/model-nuevo.php', true);

		//Retorno de Datos
		xhr.onload = function () {
			if (this.status === 200) {
				//esta es la respuesta la que tenemos en el model
				// let respuesta = xhr.responseText;
				let respuesta = JSON.parse(xhr.responseText);
				console.log(respuesta);
				if (respuesta.respuesta === 'correcto') {
					//si es un nuevo usuario 
					if (respuesta.tipo == 'newlote') {
						Swal.fire({
							icon: 'success',
							title: '¡Solicitud realizada!',
							text: 'Se ha creado el bloque con éxito',
							position: 'center',
							showConfirmButton: true

						}).then(function () {
							window.location = "lotes.php";
						});;
					}
				} else if (respuesta.respuesta == 'duplicado') {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'El número de lote ¡ya existe!, por favor verifique'
					})
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Hubo un error en la solicitud'
					})
				}
			}
		}
		// Enviar la petición
		xhr.send(datos);
	}

}

function newventa(e) {
	e.preventDefault();
	let fechaSolicitud = document.querySelector('#fechaSolicitud').value,
		horaSolicitud = document.querySelector('#horaSolicitud').value,
		id_registro = document.querySelector('#nombre_completo').value,
		fecha_venta = document.querySelector('#fecha_venta').value,
		tipo_venta = document.querySelector('#tipo_venta').value,
		prima = document.querySelector('#prima').value,
		plazo_meses = document.querySelector('#plazo_meses').value,
		vendedor = document.querySelector('#vendedor').value,
		cuenta_bancaria = document.querySelector('#cuenta_bancaria').value,
		fecha_primer_cuota = document.querySelector('#fecha_primer_cuota').value,
		dia_pago = document.querySelector('#dia_pago').value,
		proyecto = document.querySelector('#proyecto').value,
		tipo = document.querySelector('#tipo').value,
		bloque = document.querySelectorAll('.tabla-bloque');

	if (bloque.length == 0) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de seleccionar al menos un bloque',
		});
	}
	if (fechaSolicitud === '' || horaSolicitud === '' || nombre_completo === '' || fecha_venta === '' || prima === '' || plazo_meses === '' || vendedor === '' || cuenta_bancaria === '' || fecha_primer_cuota === '') {
		//validación Falló
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de llenar todos los campos',
		});
	} else {
		//Campos son correctos - Ejecutamos AJAX
		//Crear  FormData - Datos que se envían al servidor
		console.log('enviar');
		let datos = new FormData();
		datos.append('fechaSolicitud', fechaSolicitud);
		datos.append('horaSolicitud', horaSolicitud);
		datos.append('id_registro', id_registro);
		datos.append('fecha_venta', fecha_venta);
		datos.append('tipo_venta', tipo_venta);
		datos.append('prima', prima);
		datos.append('tipo_venta', tipo_venta);
		datos.append('plazo_meses', plazo_meses);
		datos.append('vendedor', vendedor);
		datos.append('cuenta_bancaria', cuenta_bancaria);
		datos.append('fecha_primer_cuota', fecha_primer_cuota);
		datos.append('dia_pago', dia_pago);
		datos.append('proyecto', proyecto);
		datos.append('cuenta_bancaria', cuenta_bancaria);
		for (let i = 0; i < bloque.length; i++) {
			hola = bloque[i].id;
			datos.append('lotes[]', hola);
			console.log(hola);
		}
		// datos.append('lotes', bloque);
		datos.append('accion', tipo);
		//Crear  el llamado a Ajax
		let xhr = new XMLHttpRequest();
		//Abrir la Conexión
		xhr.open('POST', 'includes/models/model-nuevo.php', true);
		console.log('enviar1');
		//Retorno de Datos
		xhr.onload = function () {
			if (this.status === 200) {
				console.log('Recibe respuesta');
				//esta es la respuesta la que tenemos en el model
				// let respuesta = xhr.responseText;
				let respuesta = JSON.parse(xhr.responseText);
				console.log(respuesta);
				if (respuesta.respuesta === 'correcto') {
					//si es un nuevo usuario 
					if (respuesta.tipo == 'newventa') {
						Swal.fire({
							icon: 'success',
							title: '¡Asignación realizada!',
							text: 'Ahora cambia el estado del lote',
							position: 'center',
							showConfirmButton: true

						}).then(function () {
							// urllote = '?ID=' + lote + '&bloque=' + bloque;
							window.location = "ventas.php";
						});;
					}
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Hubo un error en la solicitud'
					})
				}
			}
		}
		// Enviar la petición
		xhr.send(datos);
	}

}

function editventa(e) {
	e.preventDefault();
	let fechaSolicitud = document.querySelector('#fechaSolicitud').value,
		horaSolicitud = document.querySelector('#horaSolicitud').value,
		id_registro = document.querySelector('#id_registro').value,
		id_ficha_compra = document.querySelector('#id_ficha_compra').value,
		id_contrato = document.querySelector('#id_contrato').value,
		fecha_venta = document.querySelector('#fecha_venta').value,
		tipo_venta = document.querySelector('#tipo_venta').value,
		prima = document.querySelector('#prima').value,
		plazo_meses = document.querySelector('#plazo_meses').value,
		vendedor = document.querySelector('#vendedor').value,
		cuenta_bancaria = document.querySelector('#cuenta_bancaria').value,
		fecha_primer_cuota = document.querySelector('#fecha_primer_cuota').value,
		dia_pago = document.querySelector('#dia_pago').value,
		proyecto = document.querySelector('#proyecto').value,
		estado = document.querySelector('#estado').value,
		tipo = document.querySelector('#tipo').value,
		bloque = document.querySelectorAll('.tabla-bloque');


	if (bloque.length == 0) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de seleccionar un bloque'
		})
	} else if (fechaSolicitud === '' || fecha_venta === '' || prima === '' || vendedor === '' || cuenta_bancaria === '' || fecha_primer_cuota === '') {
		//validación Falló
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de llenar todos los campos',
		});
	} else {
		//Campos son correctos - Ejecutamos AJAX
		//Crear  FormData - Datos que se envían al servidor
		console.log('enviar');
		let datos = new FormData();
		datos.append('fechaSolicitud', fechaSolicitud);
		datos.append('horaSolicitud', horaSolicitud);
		datos.append('id_registro', id_registro);
		datos.append('id_ficha_compra', id_ficha_compra);
		datos.append('id_contrato', id_contrato);
		datos.append('fecha_venta', fecha_venta);
		datos.append('tipo_venta', tipo_venta);
		datos.append('prima', prima);
		datos.append('tipo_venta', tipo_venta);
		datos.append('plazo_meses', plazo_meses);
		datos.append('vendedor', vendedor);
		datos.append('cuenta_bancaria', cuenta_bancaria);
		datos.append('fecha_primer_cuota', fecha_primer_cuota);
		datos.append('dia_pago', dia_pago);
		datos.append('estado', estado);
		datos.append('proyecto', proyecto);
		datos.append('cuenta_bancaria', cuenta_bancaria);
		for (let i = 0; i < bloque.length; i++) {
			hola = bloque[i].id;
			datos.append('lotes[]', hola);
			console.log(hola);
		}
		// datos.append('lotes', bloque);
		datos.append('accion', tipo);
		//Crear  el llamado a Ajax
		let xhr = new XMLHttpRequest();
		//Abrir la Conexión
		xhr.open('POST', 'includes/models/model-editar-registro.php', true);
		console.log('enviar1');
		//Retorno de Datos
		xhr.onload = function () {
			if (this.status === 200) {
				console.log('Recibe respuesta');
				//esta es la respuesta la que tenemos en el model
				// let respuesta = xhr.responseText;
				let respuesta = JSON.parse(xhr.responseText);
				console.log(respuesta);
				if (respuesta.respuesta === 'correcto') {
					//si es un nuevo usuario 
					if (respuesta.tipo == 'editarventa') {
						Swal.fire({
							icon: 'success',
							title: '¡Actualización!',
							text: 'Se ha realizado el cambio',
							position: 'center',
							showConfirmButton: true

						}).then(function () {
							// urllote = '?ID=' + lote + '&bloque=' + bloque;
							window.location = "ventas.php";
						});;
					}
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Hubo un error en la solicitud'
					})
				}
			}
		}
		// Enviar la petición
		xhr.send(datos);
	}
}





function asignarLote(e) {
	e.preventDefault();
	if (document.getElementById('lote')) {
		let tipo = document.querySelector('#tipo').value,
			id_user = document.querySelector('#ID').value,
			bloque = document.querySelector('#bloque').value,
			lote = document.querySelector('#lote').value;
		console.log(tipo, id_user, bloque, lote);

		if (lote === '') {
			//validación Falló
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Debe de llenar todos los campos'
			});
		} else {
			//Campos son correctos - Ejecutamos AJAX
			//Crear  FormData - Datos que se envían al servidor
			console.log('enviar');
			let datos = new FormData();
			datos.append('id_user', id_user);
			datos.append('bloque', bloque);
			datos.append('lote', lote);
			datos.append('asignar', tipo);
			//Crear  el llamado a Ajax
			let xhr = new XMLHttpRequest();
			//Abrir la Conexión
			xhr.open('POST', 'includes/models/model-asignar.php', true);

			//Retorno de Datos
			xhr.onload = function () {
				if (this.status === 200) {
					//esta es la respuesta la que tenemos en el model
					// let respuesta = xhr.responseText;
					let respuesta = JSON.parse(xhr.responseText);
					console.log(respuesta);
					if (respuesta.respuesta === 'correcto') {
						//si es un nuevo usuario 
						if (respuesta.tipo == 'asignar') {
							Swal.fire({
								icon: 'success',
								title: '¡Asignación realizada!',
								text: 'Ahora cambia el estado del lote',
								position: 'center',
								showConfirmButton: true

							}).then(function () {
								// urllote = '?ID=' + lote + '&bloque=' + bloque;
								// window.location = "edicion-lote.php" + urllote;
							});;
						}
					} else {
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: 'Hubo un error en la solicitud'
						})
					}
				}
			}
			// Enviar la petición
			xhr.send(datos);
		}

	} else {
		let id_user = document.querySelector('#ID').value,
			bloque = document.querySelector('#bloque').value;
		console.log(id_user, bloque);
		url = '?ID=' + id_user + '&bloque=' + bloque;
		window.location = "asignar-lote.php" + url;
	}

}


//-------------------Editar Lote-------------------
function editarLote(e) {
	e.preventDefault();

	let user_id = document.querySelector('#user_id').value,
		bloque = document.querySelector('#bloque').value,
		areav2 = document.querySelector('#areav2').value,
		estado = document.querySelector('#estado').value,
		path = document.querySelector('#path').value,

		// password = document.querySelector('#password').value,
		tipo = document.querySelector('#tipo').value;
	//Validar que el campo tenga algo escrito
	if (areav2 === '' || bloque === '' || estado === '' || path === '') {
		//validación Falló
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de llenar al menos un campo'
		});
	} else {
		//Campos son correctos - Ejecutamos AJAX

		//Crear  FormData - Datos que se envían al servidor
		let datos = new FormData();
		datos.append('id_register', id_register);
		datos.append('user_id', user_id);
		datos.append('bloque', bloque);
		datos.append('areav2', areav2);
		datos.append('estado', estado);
		datos.append('path', path);
		datos.append('accion', tipo);

		//Crear  el llamado a Ajax
		let xhr = new XMLHttpRequest();
		//Abrir la Conexión
		xhr.open('POST', 'includes/models/model-editar.php', true);

		//Retorno de Datos
		xhr.onload = function () {
			if (this.status === 200) {

				//esta es la respuesta la que tenemos en el model
				// let respuesta = xhr.responseText;
				let respuesta = JSON.parse(xhr.responseText);
				console.log(respuesta);
				if (respuesta.respuesta === 'correcto') {
					//si es un nuevo usuario 
					if (respuesta.tipo == 'solicitud') {
						Swal.fire({
							icon: 'success',
							title: '¡Lote Actualizado!',
							text: 'Esta solicitud se ha realizado con éxito',
							position: 'center',
							showConfirmButton: true
						}).then(function () {
							url = '?ID=' + user_id + '&bloque=' + bloque;
							window.location = "editar-lote.php" + url;
						});
					}
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Hubo un error en la solicitud'
					})
				}
			}
		}
		// Enviar la petición
		xhr.send(datos);
	}

}

//Agregar un nuevo elemento de la
var lineCount = 0;
addAddressLine = function () {
	var contenido = document.querySelector('#bloque').value;
	var combo = document.getElementById("bloque");
	var selected = combo.options[combo.selectedIndex].text;
	// combo.remove(combo.selectedIndex) //Solo se agrego esta linea para eliminar del select
	let cuentaactual = document.querySelectorAll('.tabla-bloque').length;
	lineCount = cuentaactual;
	//agregar contenido
	var i = document.createElement('input');
	i.setAttribute("type", "text");
	i.setAttribute("id", contenido);
	i.setAttribute("name", contenido);
	i.setAttribute("value", selected);
	i.setAttribute("readonly", "readonly");

	//Regresar item al select/ Parte 2 del favor
	var btn = document.createElement('div');
	// btn.setAttribute("type", "button");
	btn.setAttribute("class", "btn btn-light-secondary me-1 mb-1");
	btn.setAttribute("id", "X");
	btn.setAttribute("name", "X");
	btn.setAttribute("value", "X");
	btn.setAttribute("readonly", "readonly");
	btn.innerHTML = "Eliminar";
	btn.id = selected;

	// Eliminar elemento
	btn.onclick = function () {
		var x = document.getElementById("bloque");
		var option = document.createElement("option");
		option.text = selected;
		x.add(option);

		document.getElementById(contenido).remove();
		document.getElementById(selected).remove();
		return;
	};

	// document.body.appendChild(btn);
	//insertar celda y elimnar filas
	var table = document.getElementById("tabla");
	var row = table.insertRow(lineCount);

	lineCount++;
	var row = table.insertRow(-1).innerHTML = '<td class="text-bold-500 tabla-bloque" name="fila[]" id="' + contenido + '" value="' + contenido + '">' + lineCount + '</td><td class="text-bold-500">' + selected + '</td><td class="text-bold-500"><button class="btn btn-danger" onclick="deleteRow(this)">Quitar</button></td>';
	document.getElementById("bloque").value = "";


	//eliminar fila
	return;

}


function editarPaciente(e) {
	e.preventDefault();

	let nombre_completo = document.querySelector('#nombre_completo').value,
		tipo = document.querySelector('#tipo').value,
		codigopaciente = document.querySelector('#codigopaciente').value,
		raza = document.querySelector('#raza').value,
		dueno = document.querySelector('#dueno').value,
		medicocabecera = document.querySelector('#medicocabecera').value,
		fecha_inicial = document.querySelector('#fecha_inicial').value,
		fotos = document.querySelector('#foto').files;


	// compruebo si han cambiado el resto de campos
	// console.log(identidad.length);


	let datos = new FormData();
	datos.append('codigopaciente', codigopaciente);
	datos.append('nombres', nombre_completo);
	datos.append('raza', raza);
	datos.append('dueno', dueno);
	datos.append('medicocabecera', medicocabecera);
	datos.append('fecha_inicial', fecha_inicial);
	for (const archivo of fotos) {
		datos.append('archivos[]', archivo);
	}
	datos.append('accion', tipo);
	//Crear  el llamado a Ajax
	let xhr = new XMLHttpRequest();
	//Abrir la Conexión
	xhr.open('POST', 'includes/models/model-editar-registro.php', true);

	//Retorno de Datos
	xhr.onload = function () {
		if (this.status === 200) {

			//esta es la respuesta la que tenemos en el model
			// let respuesta = xhr.responseText;
			let respuesta = JSON.parse(xhr.responseText);
			console.log(respuesta);
			if (respuesta.respuesta === 'correcto') {
				//si es un nuevo usuario 
				if (respuesta.tipo == 'solicitud') {
					Swal.fire({
						icon: 'success',
						title: '¡Registro Actualizado!',
						text: 'Esta solicitud se ha realizado con éxito',
						position: 'center',
						showConfirmButton: true
					}).then(function () {
						// url = '?nombres=' + nombres + '&identidad=' + identidad;
						window.location = "pacientes.php";
					});
				}
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Hubo un error en la solicitud'
				})
			}
		}
	}
	// Enviar la petición
	xhr.send(datos);

}
function editarMed(e) {
	e.preventDefault();

	let id_medico = document.querySelector('#id_medico').value,
		tipo = document.querySelector('#tipo').value,
		nombre_completo = document.querySelector('#nombre_completo').value,
		direccion = document.querySelector('#direccion').value,
		telefonos = document.querySelector('#telefonos').value,
		emergencias = document.querySelector('#emergencias').value,
		fecha_inicial = document.querySelector('#fecha_inicial').value;


	// compruebo si han cambiado el resto de campos
	// console.log(identidad.length);


	let datos = new FormData();
	datos.append('id_medico', id_medico);
	datos.append('nombres', nombre_completo);
	datos.append('direccion', direccion);
	datos.append('telefonos', telefonos);
	datos.append('emergencias', emergencias);
	datos.append('fecha_inicial', fecha_inicial);
	datos.append('accion', tipo);
	//Crear  el llamado a Ajax
	let xhr = new XMLHttpRequest();
	//Abrir la Conexión
	xhr.open('POST', 'includes/models/model-editar-registro.php', true);

	//Retorno de Datos
	xhr.onload = function () {
		if (this.status === 200) {

			//esta es la respuesta la que tenemos en el model
			// let respuesta = xhr.responseText;
			let respuesta = JSON.parse(xhr.responseText);
			console.log(respuesta);
			if (respuesta.respuesta === 'correcto') {
				//si es un nuevo usuario 
				if (respuesta.tipo == 'editarMedico') {
					Swal.fire({
						icon: 'success',
						title: '¡Registro Actualizado!',
						text: 'Esta solicitud se ha realizado con éxito',
						position: 'center',
						showConfirmButton: true
					}).then(function () {
						// url = '?nombres=' + nombres + '&identidad=' + identidad;
						window.location = "medicos.php";
					});
				}
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Hubo un error en la solicitud'
				})
			}
		}
	}
	// Enviar la petición
	xhr.send(datos);

}
function editarDueno(e) {
	e.preventDefault();

	let id_dueno = document.querySelector('#id_dueno').value,
		tipo = document.querySelector('#tipo').value,
		nombre_completo = document.querySelector('#nombre_completo').value,
		direccion = document.querySelector('#direccion').value,
		telefonos = document.querySelector('#telefonos').value;


	// compruebo si han cambiado el resto de campos
	// console.log(identidad.length);


	let datos = new FormData();
	datos.append('id_dueno', id_dueno);
	datos.append('nombres', nombre_completo);
	datos.append('direccion', direccion);
	datos.append('telefonos', telefonos);
	datos.append('accion', tipo);
	//Crear  el llamado a Ajax
	let xhr = new XMLHttpRequest();
	//Abrir la Conexión
	xhr.open('POST', 'includes/models/model-editar-registro.php', true);

	//Retorno de Datos
	xhr.onload = function () {
		if (this.status === 200) {

			//esta es la respuesta la que tenemos en el model
			// let respuesta = xhr.responseText;
			let respuesta = JSON.parse(xhr.responseText);
			console.log(respuesta);
			if (respuesta.respuesta === 'correcto') {
				//si es un nuevo usuario 
				if (respuesta.tipo == 'editarDueno') {
					Swal.fire({
						icon: 'success',
						title: '¡Registro Actualizado!',
						text: 'Esta solicitud se ha realizado con éxito',
						position: 'center',
						showConfirmButton: true
					}).then(function () {
						// url = '?nombres=' + nombres + '&identidad=' + identidad;
						window.location = "duenos.php";
					});
				}
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Hubo un error en la solicitud'
				})
			}
		}
	}
	// Enviar la petición
	xhr.send(datos);

}
function editarCirugia(e) {
	e.preventDefault();

	let id_cirugia = document.querySelector('#id_cirugia').value,
		tipo = document.querySelector('#tipo').value,
		nombre = document.querySelector('#nombre').value,
		riesgo = document.querySelector('#riesgo').value,
		duracion = document.querySelector('#duracion').value,
		anestesia = document.querySelector('#anestesia').value,
		descripcion = document.querySelector('#descripcion').value;

	let datos = new FormData();
	datos.append('id_cirugia', id_cirugia);
	datos.append('nombre', nombre);
	datos.append('riesgo', riesgo);
	datos.append('duracion', duracion);
	datos.append('anestesia', anestesia);
	datos.append('descripcion', descripcion);
	datos.append('accion', tipo);
	//Crear  el llamado a Ajax
	let xhr = new XMLHttpRequest();
	//Abrir la Conexión
	xhr.open('POST', 'includes/models/model-editar-registro.php', true);

	//Retorno de Datos
	xhr.onload = function () {
		if (this.status === 200) {

			//esta es la respuesta la que tenemos en el model
			// let respuesta = xhr.responseText;
			let respuesta = JSON.parse(xhr.responseText);
			console.log(respuesta);
			if (respuesta.respuesta === 'correcto') {
				//si es un nuevo usuario 
				if (respuesta.tipo == 'editarCirugia') {
					Swal.fire({
						icon: 'success',
						title: '¡Registro Actualizado!',
						text: 'Esta solicitud se ha realizado con éxito',
						position: 'center',
						showConfirmButton: true
					}).then(function () {
						// url = '?nombres=' + nombres + '&identidad=' + identidad;
						window.location = "cirugias.php";
					});
				}
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Hubo un error en la solicitud'
				})
			}
		}
	}
	// Enviar la petición
	xhr.send(datos);

}
























function editarRegistroBloque(e) {
	e.preventDefault();

	let bloque = document.querySelector('#nombre').value,
		tipo = document.querySelector('#tipo').value,
		id_bloque = document.querySelector('#id_bloque').value,
		proyecto = document.querySelector('#proyecto').value,
		id_proyectob = document.querySelector('#id_proyectob').value;

	let datos = new FormData();
	datos.append('id_bloque', id_bloque);
	datos.append('bloque', bloque);
	datos.append('proyecto', proyecto);
	datos.append('id_proyectob', id_proyectob);
	datos.append('accion', tipo);
	//Validar que el campo tenga algo escrito
	if (nombre === '') {
		//validación Falló
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de llenar al menos un campo'
		});
	} else {
		//Crear  el llamado a Ajax
		let xhr = new XMLHttpRequest();
		//Abrir la Conexión
		xhr.open('POST', 'includes/models/model-editar-registro.php', true);

		//Retorno de Datos
		xhr.onload = function () {
			if (this.status === 200) {

				//esta es la respuesta la que tenemos en el model
				// let respuesta = xhr.responseText;
				let respuesta = JSON.parse(xhr.responseText);
				// console.log(respuesta);
				if (respuesta.respuesta === 'correcto') {
					//si es un nuevo usuario 
					if (respuesta.tipo == 'editbloque') {
						Swal.fire({
							icon: 'success',
							title: 'Bloque Actualizado!',
							text: 'Esta solicitud se ha realizado con éxito',
							position: 'center',
							showConfirmButton: true
						}).then(function () {
							window.location = "bloques.php";
						});
					}
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Hubo un error en la solicitud'
					})
				}
			}
		}
		// Enviar la petición
		xhr.send(datos);
	}
}

function editarRegistroLote(e) {
	e.preventDefault();
	console.log('llego');
	let user_id = document.querySelector('#user_id').value,
		numero = document.querySelector('#numero').value,
		id_bloque = document.querySelector('#bloque').value,
		areav2 = document.querySelector('#areav2').value,
		colindancias = document.querySelector('#colindancias').value,
		path_lote = document.querySelector('#path_lote').value,
		tipo = document.querySelector('#tipo').value,
		estado = document.querySelector('#estado').value;

	let datos = new FormData();
	datos.append('numero', numero);
	datos.append('id_bloque', id_bloque);
	datos.append('areav2', areav2);
	datos.append('colindancias', colindancias);
	datos.append('path_lote', path_lote);
	datos.append('estado', estado);
	datos.append('user_id', user_id);
	datos.append('accion', tipo);

	//Validar que el campo tenga algo escrito
	if (numero === '') {
		//validación Falló
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de llenar al menos un campo'
		});
	} else {
		//Crear  el llamado a Ajax
		let xhr = new XMLHttpRequest();
		//Abrir la Conexión
		xhr.open('POST', 'includes/models/model-editar-registro.php', true);

		//Retorno de Datos
		xhr.onload = function () {
			if (this.status === 200) {

				//esta es la respuesta la que tenemos en el model
				// let respuesta = xhr.responseText;
				let respuesta = JSON.parse(xhr.responseText);
				console.log(respuesta);
				if (respuesta.respuesta === 'correcto') {
					//si es un nuevo usuario 
					if (respuesta.tipo == 'editlote') {
						Swal.fire({
							icon: 'success',
							title: 'Bloque Actualizado!',
							text: 'Esta solicitud se ha realizado con éxito',
							position: 'center',
							showConfirmButton: true
						}).then(function () {
							window.location = "lotes.php";
						});
					}
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Hubo un error en la solicitud'
					})
				}
			}
		}
		// Enviar la petición
		xhr.send(datos);
	}
}





















//-------------------Aprobar Solicitud-------------------
function aprobarSolicitud(e) {
	e.preventDefault();

	let user_id = document.querySelector('#user_id').value,
		horaSolicitud = document.querySelector('#horaSolicitud').value,
		fechaSolicitud = document.querySelector('#fechaSolicitud').value,
		estado = document.querySelector('#estado').value,
		id_temp = document.querySelector('#id_temp').value,
		nombres = document.querySelector('#nombre').value,
		firstname = document.querySelector('#firstname').value,
		secondname = document.querySelector('#secondname').value,
		apellidos = document.querySelector('#apellidos').value,
		primerapellido = document.querySelector('#primerapellido').value,
		segundoapellido = document.querySelector('#segundoapellido').value,
		clase = document.querySelector('#clase').value,
		codigo = document.querySelector('#codigo').value,
		nickname = document.querySelector('#apodo').value,
		nationality = document.querySelector('#nacionalidad').value,
		sex = document.querySelector('#genero').value,
		//Información Personal
		dateHB = document.querySelector('#fecha_nacimiento').value,
		country = document.querySelector('#pais').value,
		city = document.querySelector('#ciudad').value,
		address = document.querySelector('#direccion').value,
		correo = document.querySelector('#correo').value,
		correo1 = document.querySelector('#correo1').value,
		correo2 = document.querySelector('#correo2').value,
		mobile = document.querySelector('#celular').value,
		phone = document.querySelector('#telefono').value,
		empresaLabora = document.querySelector('#empresaLabora').value,
		rubroEmpresaLabora = document.querySelector('#rubroEmpresaLabora').value,
		areasInteres = document.getElementById('areasInteres').value,
		url_linkedin = document.querySelector('#url_linkedin').value,
		orientacion = document.querySelector('#orientacion').value,
		programa = document.querySelector('#programa').value,
		//Información Académica
		empresaPasantia = document.querySelector('#empresaPasantia').value,
		direccionEmpresaPasantia = document.querySelector('#direccionEmpresaPasantia').value,
		rubroEmpresaPasantia = document.querySelector('#rubroEmpresaPasantia').value,
		experienciaPasantia = document.querySelector('#experienciaPasantia').value,
		areaInvestigacionPasantia = document.querySelector('#areaInvestigacionPasantia').value,
		asesorTesis = document.querySelector('#asesorTesis').value,
		tituloTesis = document.querySelector('#tituloTesis').value,
		urlTesis = document.querySelector('#urlTesis').value,
		financiado = document.querySelector('#financiado').value,
		fondos_zamorano = document.querySelector('#fondos_zamorano').value,
		fondos_propios = document.querySelector('#fondos_propios').value,
		fondos_entidades = document.querySelector('#fondos_entidades').value,
		otras_entidades = document.querySelector('#otras_entidades').value,

		linkedin = document.querySelector('#linkedin').value,
		fallecido = document.querySelector('#fallecido').value,
		fechaFallecido = document.querySelector('#fechaFallecido').value,
		fechaNotaDuelo = document.querySelector('#fechaNotaDuelo').value,
		estatus = document.querySelector('#estatus').value,
		pa = document.querySelector('#pa').value,
		anioIA = document.querySelector('#anioIA').value,
		dia_graduacion = document.querySelector('#dia_graduacion').value,
		mes_graduacion = document.querySelector('#mes_graduacion').value,
		codigoIA = document.querySelector('#codigoIA').value,

		// password = document.querySelector('#password').value,
		tipo = document.querySelector('#tipo').value;
	// console.log(fallecido);
	// console.log(Date.parse(fechaFallecido));
	estado = 1;
	if (url_linkedin == '') {
		linkedin = 0;
	} else {
		linkedin = 1;
	}
	let otrasEnti, fondosz, fondosp;
	if (fondos_entidades === '') {
		otrasEnti = 0;
		// document.getElementById('otras_entidades').required = false;
	} else {
		otrasEnti = 1;
		// document.getElementById('otras_entidades').required = true;
	}

	if (fondos_zamorano === '0') {
		fondos_zamorano = '0';
	} else {
		fondos_zamorano = '1';
	}

	if (fondos_propios === '0') {
		fondos_propios = '0';
	} else {
		fondos_propios = '1';
	}

	//Validar que el campo tenga algo escrito
	if (nombres === '' || apellidos === '' || clase === '' || nationality === '') {
		//validación Falló
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de llenar al menos un campo'
		});
	} else {
		//Campos son correctos - Ejecutamos AJAX

		//Crear  FormData - Datos que se envían al servidor
		let datos = new FormData();
		datos.append('user_id', user_id);
		datos.append('id_temp', id_temp);
		datos.append('estado', estado);
		datos.append('fechaSolicitud', fechaSolicitud);
		datos.append('horaSolicitud', horaSolicitud);
		datos.append('nombres', nombres);
		datos.append('firstname', firstname);
		datos.append('secondname', secondname);
		datos.append('apellidos', apellidos);
		datos.append('primerapellido', primerapellido);
		datos.append('segundoapellido', segundoapellido);
		datos.append('clase', clase);
		datos.append('codigo', codigo);
		datos.append('nickname', nickname);
		datos.append('nationality', nationality);
		datos.append('sex', sex);
		//Información Personal
		datos.append('dateHB', dateHB);
		datos.append('country', country);
		datos.append('city', city);
		datos.append('address', address);
		datos.append('correo', correo);
		datos.append('correo1', correo1);
		datos.append('correo2', correo2);
		datos.append('mobile', mobile);
		datos.append('phone', phone);
		datos.append('empresaLabora', empresaLabora);
		datos.append('rubroEmpresaLabora', rubroEmpresaLabora);
		datos.append('areasInteres', areasInteres);
		datos.append('url_linkedin', url_linkedin);
		//Información Académica
		datos.append('programa', programa);
		datos.append('orientation', orientacion);
		datos.append('empresaPasantia', empresaPasantia);
		datos.append('direccionEmpresaPasantia', direccionEmpresaPasantia);
		datos.append('rubroEmpresaPasantia', rubroEmpresaPasantia);
		datos.append('experienciaPasantia', experienciaPasantia);
		datos.append('areaInvestigacionPasantia', areaInvestigacionPasantia);
		datos.append('asesorTesis', asesorTesis);
		datos.append('tituloTesis', tituloTesis);
		datos.append('urlTesis', urlTesis);
		datos.append('financiado', financiado);
		datos.append('fondos_zamorano', fondos_zamorano);
		datos.append('fondos_propios', fondos_propios);
		datos.append('fondos_entidades', fondos_entidades);
		datos.append('otras_entidades', otras_entidades);

		datos.append('linkedin', linkedin);
		datos.append('fallecido', fallecido);
		datos.append('fechaFallecido', fechaFallecido);
		datos.append('fechaNotaDuelo', fechaNotaDuelo);
		datos.append('estatus', estatus);
		datos.append('pa', pa);
		datos.append('anioIA', anioIA);
		datos.append('dia_graduacion', dia_graduacion);
		datos.append('mes_graduacion', mes_graduacion);
		datos.append('codigoIA', codigoIA);

		datos.append('accion', tipo);

		//Crear  el llamado a Ajax
		let xhr = new XMLHttpRequest();
		//Abrir la Conexión
		xhr.open('POST', 'includes/models/model-aprobar-solicitud.php', true);

		//Retorno de Datos
		xhr.onload = function () {
			if (this.status === 200) {
				//esta es la respuesta la que tenemos en el model
				// let respuesta = xhr.responseText;
				let respuesta = JSON.parse(xhr.responseText);
				// console.log(respuesta);
				if (respuesta.respuesta === 'correcto') {
					//si es un nuevo usuario 
					if (respuesta.tipo == 'solicitud') {
						Swal.fire({
							icon: 'success',
							title: '¡Solicitud realizada!',
							text: 'Esta solicitud se ha realizado con éxito',
							position: 'center',
							showConfirmButton: true
						}).then(function () {
							const fecha = new Date();
							// const hoy = fecha.getDate();
							const mesActual = fecha.getMonth() + 1;
							// url = '?nombres=' + nombres + '&apellidos=' + apellidos + '&clase=' + clase + '&codigo=' + codigo + '&nacionalidad=' + nationality + '&genero=' + sex;
							// window.location = "buscador-graduado.php" + url;
							window.location = "solicitudes.php?mesSolicitud=" + mesActual;
							window.location = "solicitudes.php";
						});
					}
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Hubo un error en la solicitud'
					})
				}
			}
		}
		// Enviar la petición
		xhr.send(datos);
	}

}
//-------------------Aprobar Solicitud-------------------
function aprobarSolicitudGraduando(e) {
	e.preventDefault();

	let user_id = document.querySelector('#user_id').value,
		horaSolicitud = document.querySelector('#horaSolicitud').value,
		fechaSolicitud = document.querySelector('#fechaSolicitud').value,
		estado = document.querySelector('#estado').value,
		id_temp = document.querySelector('#id_temp').value,
		nombres = document.querySelector('#nombre').value,
		firstname = document.querySelector('#firstname').value,
		secondname = document.querySelector('#secondname').value,
		apellidos = document.querySelector('#apellidos').value,
		primerapellido = document.querySelector('#primerapellido').value,
		segundoapellido = document.querySelector('#segundoapellido').value,
		clase = document.querySelector('#clase').value,
		codigo = document.querySelector('#codigo').value,
		nickname = document.querySelector('#apodo').value,
		nationality = document.querySelector('#nacionalidad').value,
		sex = document.querySelector('#genero').value,
		//Información Personal
		dateHB = document.querySelector('#fecha_nacimiento').value,
		country = document.querySelector('#pais').value,
		city = document.querySelector('#ciudad').value,
		address = document.querySelector('#direccion').value,
		correo = document.querySelector('#correo').value,
		correo1 = document.querySelector('#correo1').value,
		correo2 = document.querySelector('#correo2').value,
		mobile = document.querySelector('#celular').value,
		phone = document.querySelector('#telefono').value,
		empresaLabora = document.querySelector('#empresaLabora').value,
		rubroEmpresaLabora = document.querySelector('#rubroEmpresaLabora').value,
		areasInteres = document.getElementById('areasInteres').value,
		url_linkedin = document.querySelector('#url_linkedin').value,
		orientacion = document.querySelector('#orientacion').value,
		programa = document.querySelector('#programa').value,
		//Información Académica
		empresaPasantia = document.querySelector('#empresaPasantia').value,
		direccionEmpresaPasantia = document.querySelector('#direccionEmpresaPasantia').value,
		rubroEmpresaPasantia = document.querySelector('#rubroEmpresaPasantia').value,
		experienciaPasantia = document.querySelector('#experienciaPasantia').value,
		areaInvestigacionPasantia = document.querySelector('#areaInvestigacionPasantia').value,
		asesorTesis = document.querySelector('#asesorTesis').value,
		tituloTesis = document.querySelector('#tituloTesis').value,
		urlTesis = document.querySelector('#urlTesis').value,
		financiado = document.querySelector('#financiado').value,
		fondos_zamorano = document.querySelector('#fondos_zamorano').value,
		fondos_propios = document.querySelector('#fondos_propios').value,
		fondos_entidades = document.querySelector('#fondos_entidades').value,
		otras_entidades = document.querySelector('#otras_entidades').value,

		linkedin = document.querySelector('#linkedin').value,
		fallecido = document.querySelector('#fallecido').value,
		fechaFallecido = document.querySelector('#fechaFallecido').value,
		fechaNotaDuelo = document.querySelector('#fechaNotaDuelo').value,
		estatus = document.querySelector('#estatus').value,
		pa = document.querySelector('#pa').value,
		anioIA = document.querySelector('#anioIA').value,
		dia_graduacion = document.querySelector('#dia_graduacion').value,
		mes_graduacion = document.querySelector('#mes_graduacion').value,
		codigoIA = document.querySelector('#codigoIA').value,

		// password = document.querySelector('#password').value,
		tipo = document.querySelector('#tipo').value;
	// console.log(fallecido);
	// console.log(Date.parse(fechaFallecido));
	estado = 1;
	if (url_linkedin == '') {
		linkedin = 0;
	} else {
		linkedin = 1;
	}
	let otrasEnti, fondosz, fondosp;
	if (fondos_entidades === '') {
		otrasEnti = 0;
		// document.getElementById('otras_entidades').required = false;
	} else {
		otrasEnti = 1;
		// document.getElementById('otras_entidades').required = true;
	}

	if (fondos_zamorano === '0') {
		fondos_zamorano = '0';
	} else {
		fondos_zamorano = '1';
	}

	if (fondos_propios === '0') {
		fondos_propios = '0';
	} else {
		fondos_propios = '1';
	}

	//Validar que el campo tenga algo escrito
	if (nombres === '' || apellidos === '' || clase === '' || nationality === '') {
		//validación Falló
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de llenar al menos un campo'
		});
	} else {
		//Campos son correctos - Ejecutamos AJAX

		//Crear  FormData - Datos que se envían al servidor
		let datos = new FormData();
		datos.append('user_id', user_id);
		datos.append('id_temp', id_temp);
		datos.append('estado', estado);
		datos.append('fechaSolicitud', fechaSolicitud);
		datos.append('horaSolicitud', horaSolicitud);
		datos.append('nombres', nombres);
		datos.append('firstname', firstname);
		datos.append('secondname', secondname);
		datos.append('apellidos', apellidos);
		datos.append('primerapellido', primerapellido);
		datos.append('segundoapellido', segundoapellido);
		datos.append('clase', clase);
		datos.append('codigo', codigo);
		datos.append('nickname', nickname);
		datos.append('nationality', nationality);
		datos.append('sex', sex);
		//Información Personal
		datos.append('dateHB', dateHB);
		datos.append('country', country);
		datos.append('city', city);
		datos.append('address', address);
		datos.append('correo', correo);
		datos.append('correo1', correo1);
		datos.append('correo2', correo2);
		datos.append('mobile', mobile);
		datos.append('phone', phone);
		datos.append('empresaLabora', empresaLabora);
		datos.append('rubroEmpresaLabora', rubroEmpresaLabora);
		datos.append('areasInteres', areasInteres);
		datos.append('url_linkedin', url_linkedin);
		//Información Académica
		datos.append('programa', programa);
		datos.append('orientation', orientacion);
		datos.append('empresaPasantia', empresaPasantia);
		datos.append('direccionEmpresaPasantia', direccionEmpresaPasantia);
		datos.append('rubroEmpresaPasantia', rubroEmpresaPasantia);
		datos.append('experienciaPasantia', experienciaPasantia);
		datos.append('areaInvestigacionPasantia', areaInvestigacionPasantia);
		datos.append('asesorTesis', asesorTesis);
		datos.append('tituloTesis', tituloTesis);
		datos.append('urlTesis', urlTesis);
		datos.append('financiado', financiado);
		datos.append('fondos_zamorano', fondos_zamorano);
		datos.append('fondos_propios', fondos_propios);
		datos.append('fondos_entidades', fondos_entidades);
		datos.append('otras_entidades', otras_entidades);

		datos.append('linkedin', linkedin);
		datos.append('fallecido', fallecido);
		datos.append('fechaFallecido', fechaFallecido);
		datos.append('fechaNotaDuelo', fechaNotaDuelo);
		datos.append('estatus', estatus);
		datos.append('pa', pa);
		datos.append('anioIA', anioIA);
		datos.append('dia_graduacion', dia_graduacion);
		datos.append('mes_graduacion', mes_graduacion);
		datos.append('codigoIA', codigoIA);

		datos.append('accion', tipo);

		//Crear  el llamado a Ajax
		let xhr = new XMLHttpRequest();
		//Abrir la Conexión
		xhr.open('POST', 'includes/models/model-aprobar-solicitud-graduando.php', true);

		//Retorno de Datos
		xhr.onload = function () {
			if (this.status === 200) {
				//esta es la respuesta la que tenemos en el model
				// let respuesta = xhr.responseText;
				let respuesta = JSON.parse(xhr.responseText);
				// console.log(respuesta);
				if (respuesta.respuesta === 'correcto') {
					//si es un nuevo usuario 
					if (respuesta.tipo == 'solicitud') {
						Swal.fire({
							icon: 'success',
							title: '¡Solicitud realizada!',
							text: 'Esta solicitud se ha realizado con éxito',
							position: 'center',
							showConfirmButton: true
						}).then(function () {
							const fecha = new Date();
							// const hoy = fecha.getDate();
							const mesActual = fecha.getMonth() + 1;
							// url = '?nombres=' + nombres + '&apellidos=' + apellidos + '&clase=' + clase + '&codigo=' + codigo + '&nacionalidad=' + nationality + '&genero=' + sex;
							// window.location = "buscador-graduado.php" + url;
							window.location = "graduandos-solicitudes.php?mesSolicitud=" + mesActual;
						});
					}
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Hubo un error en la solicitud'
					})
				}
			}
		}
		// Enviar la petición
		xhr.send(datos);
	}

}

// Mantiene abierto el input entidades
if (document.getElementById('fondos_entidades')) {

	var checkBox = document.getElementById('fondos_entidades').value;
	let text = document.getElementById('endidades');
	if (checkBox == 1) {
		text.style.display = 'initial';
		checkBox = document.getElementById('fondos_entidades').checked = true;
		checkBox = document.getElementById('fondos_entidades').value = 1;
		checkBox = document.getElementById('otras_entidades').required = true;
	} else {
		text.style.display = 'none';
		checkBox = document.getElementById('fondos_entidades').checked = false;
		checkBox = document.getElementById('fondos_entidades').value = 0;
	}
}


//Cambiar valor de check al dar click y poder enviar
function chequeado(id_checkbox) {
	let id = document.getElementById(id_checkbox).checked;
	if (id == true) {
		document.getElementById(id_checkbox).value = 1;
	} else {
		document.getElementById(id_checkbox).value = 0;
	}
}

function entidades() {
	let checkBox = document.getElementById('fondos_entidades').checked;
	let text = document.getElementById('endidades');
	if (checkBox == true) {
		text.style.display = 'initial';
		checkBox = document.getElementById('fondos_entidades').value = 1;
		checkBox = document.getElementById('fondos_entidades').checked = true;
		checkBox = document.getElementById('otras_entidades').required = true;

	} else {
		text.style.display = 'none';
		checkBox = document.getElementById('fondos_entidades').value = 0;
		checkBox = document.getElementById('fondos_entidades').checked = false;
		checkBox = document.getElementById('otras_entidades').required = false;
		checkBox = document.getElementById('otras_entidades').value = '';

	}
}
//acciones de solicitudes cambia estado o elimina
function eliminarFoto(e) {
	// e.preventDefault();

	// console.log('click de acciones listado');
	// console.log(e.target);
	//Delegation
	// if (e.target.classList.contains('fa-check-circle')) {
	// 	if (e.target.classList.contains('completo')) {
	// 		e.target.classList.remove('completo');
	// 		cambiarEstadoSolicitud(e.target, 0);
	// 	} else {
	// 		e.target.classList.add('completo');
	// 		cambiarEstadoSolicitud(e.target, 1);
	// 	}
	// }
	// condicion de eliminar con alert
	if (e.target.classList.contains('fa-trash')) {
		Swal.fire({
			title: 'Borrar fotografía',
			text: "Esta acción no se puede deshacer",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, borrar!',
			cancelButtonText: 'Cancelar'
		}).then((result) => {
			if (result.value) {
				let solicitudEliminar = e.target.parentElement;
				eliminarSolicitudDB(solicitudEliminar, null);
				Swal.fire(
					'Eliminado!',
					'La fotografía fue eliminada!.',
					'success'
				).then(okay => {
					if (okay) {
						window.location.reload();
					}
				});
			}
		})
	}
}

function eliminarSolicitudDB(solicitudEliminar, estado) {
	let id_foto = document.getElementById('id_foto').value;
	//Crear llamado a AJAX
	let xhr = new XMLHttpRequest();

	//información FormData
	let datos = new FormData();
	datos.append('id_foto', id_foto);
	datos.append('accion', 'eliminarFoto');
	datos.append('estado', estado);

	// Open la conexión
	xhr.open('POST', 'includes/models/eliminar-img.php', true)

	//on load
	xhr.onload = function () {
		if (this.status === 200) {
			// console.log(JSON.parse(xhr.responseText));
		}
	}
	//Enviar la petición
	xhr.send(datos);
}


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
	dd = '0' + dd
}
if (mm < 10) {
	mm = '0' + mm
}
today = yyyy + '-' + mm + '-' + dd;

function opcionFallecido() {
	let optionFallecido = document.querySelector('#fallecido').value;
	let text = document.getElementById('fallecidoInput');
	let fechaNotaDuelo = document.getElementById('fechaNotaDuelo');
	// console.log(optionFallecido);
	if (optionFallecido == 1) {
		text.style.display = 'flex';
		fechaNotaDuelo.style.display = '';
		document.getElementById('fechaFallecido').required = true;
	} else if (optionFallecido == 0) {
		document.getElementById('fechaFallecido').value = '';
		document.getElementById('fechaNotaDuelo').value = today;
		document.getElementById('fechaFallecido').required = false;
		text.style.display = 'none';
		fechaNotaDuelo.style.display = 'none';
	}
}
// console.log(today);
if (document.getElementById("fechaFallecido") && document.getElementById("fechaNotaDuelo")) {
	document.getElementById("fechaFallecido").setAttribute("max", today);
	document.getElementById("fechaNotaDuelo").setAttribute("max", today);
}


if (document.querySelector('#fallecido')) {
	// Mantiene abierto el input Fallecido
	let optionFallecido1 = document.querySelector('#fallecido').value;
	let divFecha = document.getElementById('fallecidoInput');
	if (divFecha) {
		// console.log(optionFallecido1);
		if (optionFallecido1 == 1) {
			divFecha.style.display = '';
			document.getElementById('fechaFallecido').required = true;
			// console.log(divFecha);
		} else if (optionFallecido1 == 0) {
			document.getElementById('fechaFallecido').required = false;
			divFecha.style.display = 'none';
		}
	}
}

// function to calculate hours in days
function calculatehoursindays() {
	let hours = document.getElementById('horas').value;
	let days = document.getElementById('dias').value;
	let hoursinDays = hours / days;
	document.getElementById('horasDias').value = hoursinDays;

}


//Reloj
function cargarReloj() {

	// Haciendo uso del objeto Date() obtenemos la hora, minuto y segundo 
	var fechahora = new Date();
	var hora = fechahora.getHours();
	var minuto = fechahora.getMinutes();
	var segundo = fechahora.getSeconds();

	// Variable meridiano con el valor 'AM' 
	var meridiano = "PM";


	// Si la hora es igual a 0, declaramos la hora con el valor 12 
	if (hora == 0) {

		hora = 12;

	}

	// Si la hora es mayor a 12, restamos la hora - 12 y mostramos la variable meridiano con el valor 'PM' 
	if (hora < 12) {

		hora = hora - 12;
		// Variable meridiano con el valor 'PM' 
		meridiano = "AM";

	}

	// Formateamos los ceros '0' del reloj 
	hora = (hora < 10) ? "0" + hora : hora;
	minuto = (minuto < 10) ? "0" + minuto : minuto;
	segundo = (segundo < 10) ? "0" + segundo : segundo;

	// Enviamos la hora a la vista HTML 
	var tiempo = hora + ":" + minuto + ":" + segundo + " " + meridiano;
	document.getElementById("relojnumerico").innerText = tiempo;
	document.getElementById("relojnumerico").textContent = tiempo;

	// Cargamos el reloj a los 500 milisegundos 
	setTimeout(cargarReloj, 500);

}

// Ejecutamos la función 'CargarReloj' 
cargarReloj();


var archivo = document.querySelector("#seleccionArchivos");
archivo.addEventListener("change", function (event) {
	console.log('Hola');
	var imagen = archivo.files[0];
	if (imagen) {
		console.log(imagen);
		var lector = new FileReader();
		console.log(lector);
		// lector.readAsText(imagen);
		let esto = lector.readAsDataURL(imagen);
		console.log(esto);
		console.log(lector.result);
		// document.getElementById("imagenPrevisualizacion").src = lector.result;
		lector.addEventListener("load", function () {
			document.getElementById("imagenPrevisualizacion").value = lector.result;
			document.getElementById("imagenPrevisualizacion").src = lector.result;
		});
	}
}
);