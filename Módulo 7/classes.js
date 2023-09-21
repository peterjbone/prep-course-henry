/* ejercicio 1: FUNCION CONSTRUCTORA */
// function Auto(puertas, color, marca, anio, ruedas) {
// 	this.puertas = puertas;
// 	this.color = color;
// 	this.marca = marca;
// 	this.anio = anio;
// 	this.ruedas = ruedas;
// }

// Auto.prototype.informacion = function () {
// 	console.log(`Este es un auto ${this.marca} de color ${this.color}`);
// };

// let miPrimerAuto = new Auto(2, 'rojo', 'Ferrari', 2008, 4);
// console.log(miPrimerAuto);
// console.log(miPrimerAuto.marca);

// miPrimerAuto.informacion();

/* ejercicio 2: EXPRESION CLASS */

class Auto {
	constructor(puertas, color, marca, anio, ruedas) {
		this.puertas = puertas;
		this.color = color;
		this.marca = marca;
		this.anio = anio;
		this.ruedas = ruedas;
	}

	informacion() {
		console.log(`Este es un auto ${this.marca} de color ${this.color}`);
	}
}

let miSegundoAuto = new Auto(1, 'Azul', 'Ford', 2015, 4);
/* console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);
miSegundoAuto.informacion(); */

/* Ejercicio 3 */

class Pais {
	constructor(capital) {
		this.capital = capital;
	}

	obtenerCapital() {
		console.log(this.capital);
	}
}

let francia = new Pais('Paris');
let noruega = new Pais('Oslo');

francia.obtenerCapital();
noruega.obtenerCapital();

console.log(francia);
console.log(noruega);
