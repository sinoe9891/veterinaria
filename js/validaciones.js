addEventListener();

function addEventListener() {
	//Buscador de Graduados
	let buscador = document.querySelector('#buscador');
	if (buscador) {
		buscador.addEventListener('submit', validarBuscar);
	}
	//Acciones de solicitudes
	let solicitud = document.querySelector('.pacientes');
	if (solicitud) {
		modelo = 'model-acciones';
		eliminar = 'eliminar-paciente';
		solicitud.addEventListener('click', (event) => {
			if (event.isTrusted) { // Valida que el evento es desencadenado por una acción manual del cliente
				acciones(event,modelo,eliminar);
			}
		});
	}
	let solicitudMedico = document.querySelector('.medicos');
	if (solicitudMedico) {
		modelo = 'model-acciones';
		eliminar = 'eliminar-medico';
		solicitudMedico.addEventListener('click', (event) => {
			if (event.isTrusted) { // Valida que el evento es desencadenado por una acción manual del cliente
				acciones(event,modelo,eliminar);
			}
		});
	}

	let solicitudDueno = document.querySelector('.duenos');
	if (solicitudDueno) {
		modelo = 'model-acciones';
		eliminar = 'eliminar-dueno';
		solicitudDueno.addEventListener('click', (event) => {
			if (event.isTrusted) { // Valida que el evento es desencadenado por una acción manual del cliente
				acciones(event,modelo,eliminar);
			}
		});
	}

	let solicitudCirugia = document.querySelector('.cirugia');
	if (solicitudCirugia) {
		modelo = 'model-acciones';
		eliminar = 'eliminar-cirugia';
		solicitudCirugia.addEventListener('click', (event) => {
			if (event.isTrusted) { // Valida que el evento es desencadenado por una acción manual del cliente
				acciones(event,modelo,eliminar);
			}
		});
	}

	let solicitudCita = document.querySelector('.cita');
	if (solicitudCita) {
		modelo = 'model-acciones';
		eliminar = 'eliminar-cita';
		solicitudCita.addEventListener('click', (event) => {
			if (event.isTrusted) { // Valida que el evento es desencadenado por una acción manual del cliente
				acciones(event,modelo,eliminar);
			}
		});
	}

	let solicitudEmfermedad = document.querySelector('.enfermedad');
	if (solicitudEmfermedad) {
		modelo = 'model-acciones';
		eliminar = 'eliminar-enfermedad';
		solicitudEmfermedad.addEventListener('click', (event) => {
			if (event.isTrusted) { // Valida que el evento es desencadenado por una acción manual del cliente
				acciones(event,modelo,eliminar);
			}
		});
	}
	



	let fichaGraduado = document.querySelector('.caja-ficha');
	if (fichaGraduado) {
		modeloFicha = 'model-acciones-ficha';
		fichaGraduado.addEventListener('click', (event) => {
			if (event.isTrusted) { // Valida que el evento es desencadenado por una acción manual del cliente
				acciones(event,modeloFicha);
			}
		});
	}
}
// console.log('Hola');

// -----------------Validar Cumpleañero-----------------
function validarCumplenero(e) {
	let nombre = document.getElementById('nombre').value;
	let apellidos = document.getElementById('apellidos').value;
	let clase = document.getElementById('clase').value;
	// let genero = document.getElementById('genero').value;
	if (nombre == '' || apellidos == '' || clase == '') {
		e.preventDefault();
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Debe de seleccionar dos campos'
		})

	}
}

//-----------------Validar Buscar-----------------
function validarBuscarfallecido(e) {
	e.preventDefault();

	var anoFallecido = document.getElementById('anoFallecido').value;
	var i = 0;
	var contador = 0;
	for (i; i < 1; i++) {
		var hola = document.forms["buscadorFallecido"][i].value;
		contador += hola.length;
	}
	console.log("Contador: " + contador);

	if (contador <= 0) {
		e.preventDefault();
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Llenar al menos un campo'

		})
		// console.log(false);
		return false; // keep form from submitting
	} else if (contador > 0) {

		// console.log(document.getElementById('cajaresultado').innerHTML = '<?php echo realizarBusqueda(); ?>');
		url = '?anoFallecido=' + anoFallecido;
		location.href = url;
		// console.log(url);
	}
	// console.log(true);
	return true;

}

//-----------------Validar Buscar-----------------
function validarBuscar(e) {
	e.preventDefault();

	var nombres = document.getElementById('nombres').value;
	var i = 0;
	var contador = 0;
	for (i; i < 1; i++) {
		var hola = document.forms["buscador"][i].value;
		// console.log(hola1)
		contador += hola.length;
	}
	// console.log(contador);

	if (contador <= 0) {
		e.preventDefault();
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Llenar al menos un campo'

		})
		// console.log(false);
		return false; // keep form from submitting
	} else if (document.forms["buscador"][1].value.length == 1 && contador == 1) {
		e.preventDefault();
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Llenar al menos dos campos'

		})
	} else if (contador > 0) {

		// console.log(document.getElementById('cajaresultado').innerHTML = '<?php echo realizarBusqueda(); ?>');
		url = '?nombres=' + nombres;
		location.href = url;
		// console.log(url);
	}
	// console.log(true);
	return true;

}

//acciones

//acciones de solicitudes cambia estado o elimina
function acciones(e, modelo) {
	// console.log(modelo);
	//Delegation
	// console.log(e.target);
	if (e.target.classList.contains('fa-check-circle')) {
		let bandera = '';
		if (e.target.classList.contains('completo')) {
			console.log('remover');
			e.target.classList.remove('completo');
			bandera = 0;
		} else {
			e.target.classList.add('completo');
			console.log('agregar');
			bandera = 1;
		}

		cambiarEstado(e.target, bandera, modelo);
	}
	// condicion de eliminar con alert
	if (e.target.classList.contains('fa-trash')) {
		Swal.fire({
			title: 'Seguro(a)?',
			text: "Esta acción no se puede deshacer",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, borrar!',
			cancelButtonText: 'Cancelar'
		}).then((result) => {
			if (result.value) {
				let solicitudEliminar = e.target.parentElement.parentElement;
				console.log(solicitudEliminar);
				// Borrra de la Base de datos
				eliminarRegistro(solicitudEliminar, null, modelo, eliminar);
				// Borrar del HTML
				solicitudEliminar.remove();
				Swal.fire(
					'Eliminado!',
					'La solicitud fue eliminada!.',
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

//Función de Cambio de Estado
function cambiarEstado(solicitud, estado, model) {
	//acceder hasta donde esta el ID!
	let idSolicitud = solicitud.parentElement.parentElement.id.split(':');
	console.log(idSolicitud);
	// console.log('entró')
	//Crear llamado a AJAX
	let xhr = new XMLHttpRequest();

	//información FormData
	let datos = new FormData();
	datos.append('id', idSolicitud[1]);
	datos.append('accion', 'actualizar');
	datos.append('estado', estado);
	console.log(estado);

	// Open la conexión
	xhr.open('POST', 'includes/models/' + model + '.php', true)

	//on load
	xhr.onload = function () {
		if (this.status === 200) {
			console.log(JSON.parse(xhr.responseText));
		}
	}
	//Enviar la petición
	xhr.send(datos);

}

const removeAccents = (str) => {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

// Funcion eliminar registro de la tabla
function eliminarRegistro(solicitudEliminar, estado, model, eliminar) {
	let idSolicitud = solicitudEliminar.id.split(':');

	console.log(idSolicitud[1]);
	console.log(model);

	//Crear llamado a AJAX
	let xhr = new XMLHttpRequest();

	//información FormData
	let datos = new FormData();
	datos.append('id', idSolicitud[1]);
	datos.append('accion', eliminar);
	datos.append('estado', estado);
	if(document.getElementById('nombre')){
		let nombre = document.getElementById('nombre').value;
		let procesado = nombre.replace(/\s+/g, '');
		let archivoZip = removeAccents(procesado).toLowerCase();
		datos.append('archivoZip', archivoZip);
	}
	// Open la conexión
	xhr.open('POST', 'includes/models/' + model + '.php', true)
	//on load
	xhr.onload = function () {
		if (this.status === 200) {
			// Ver si se puede eliminar
			console.log(JSON.parse(xhr.responseText));
		}
	}
	//Enviar la petición
	xhr.send(datos);
}