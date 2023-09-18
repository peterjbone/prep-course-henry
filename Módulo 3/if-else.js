//Condicionales if - else con operadores relacionales
function viajar(destino) {
	if (destino === 'Brasil') {
		return 'Gire a la IZQUIERDA';
	} else if (destino === 'Argentina') {
		return 'Gire a la DERECHA';
	} else {
		return 'Destino NO disponible';
	}
}

console.log(viajar('Brasil'));
console.log(viajar('Argentina'));
console.log(viajar('Ecuador'));

function puedesConducir(edad) {
	if (edad < 18) {
		console.log('Tus no puedes conducir');
	} else {
		console.log('Tus sí puedes conducir');
	}
}

puedesConducir(17);
puedesConducir(18);
