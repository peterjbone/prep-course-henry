//
// function cuidadoConElConsoleLog(nombre) {
// 	console.log(nombre);
// 	return nombre;
// }

//SIN RETURN
function cuidadoConElConsoleLog(nombre) {
	console.log(nombre);
}

cuidadoConElConsoleLog('Brendan');

function concatenoStringConFuncion() {
	return 'el valor retornado por la "funcion anterior" es: ' + cuidadoConElConsoleLog('joao');
}

concatenoStringConFuncion();
