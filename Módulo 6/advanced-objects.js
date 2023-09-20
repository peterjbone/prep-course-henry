/* ejercicio 1 */

const libro = { autor: 'George Orwell', titulo: '1984', genero: 'Distopia' };

console.log(libro.hasOwnProperty('autor'));

/*ejercicio 2*/

let soloKeys = Object.keys(libro);
console.log(soloKeys);

/* ejercicio 3 */
for (const propiedad in libro) {
	console.log(`Propiedad: ${propiedad} - Valor: ${libro[propiedad]}`);
}

/* ejercicio 4 */
//THIS
var mascota = {
	animal: 'Perro',
	raza: 'Ovejero Alemán',
	amistoso: true,
	dueño: 'María López',
	info: function () {
		//NO USAR ARROW FUNCTIONS
		console.log(`Mi perro es un ${this.raza}`);
	}
};

mascota.info();
