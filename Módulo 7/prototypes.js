// ejercicio 1
Array.prototype.mayoresATres = function () {
	let nuevoArreglo = [];

	for (const elemento of this) {
		if (elemento > 3) {
			nuevoArreglo.push(false);
		} else {
			nuevoArreglo.push(elemento);
		}
	}

	return nuevoArreglo;
};

let array = [1, 2, 3, 4, 5, 6];

console.log(array.mayoresATres());

// ejercicio 2

class Latinoamerica {
	constructor() {
		this.paises = [];
	}

	meterPaises(...pais) {
		this.paises.push(...pais);
	}
}

let continente = new Latinoamerica();
continente.meterPaises('Ecuador', 'Peru');

console.log(continente);
