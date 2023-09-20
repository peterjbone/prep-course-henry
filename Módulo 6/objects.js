/* ejercicio 1 */
let deportes = {
	conBalon: ['Soccer', 'Basket', 'Rugby'],
	sinBalon: ['Box', 'Surf', 'Karate']
};

//console.log(deportes);

/* ejercicio 2 */
let persona = {
	nombre: 'john',
	edad: 22,
	estudios: {
		basicos: true,
		secundarios: true,
		universitarios: false
	}
};

// acceder y modificar propiedades
persona.nombre = 'Darius';
persona.edad = 25;

//console.log(persona);

/* ejercicio 3 */
const autos = {};
//crear y eliminar propiedades
autos.marcas = ['Ford', 'Ferrari', 'Lamborgini'];
delete autos.marcas;

//console.log(autos);

/* ejercicio 4 */
// const misFunciones = {
// 	saludar() {
// 		console.log('Hola');
// 	},
// 	despedirse() {
// 		console.log('Chao');
// 	}
// };

// misFunciones.saludar();
// misFunciones.despedirse();

/* ejercicio 5 */
const ropa = {
	manos: ['Guantes', 'Anillos'],
	piernas: ['Medias', 'Zapatos']
};

ropa.torso = ['Abrigo', 'Chaquetas'];
ropa['rostro'] = ['Máscara', 'Gafas'];

//console.log(ropa);

/* ejercicio 6 */
//VENTAJA DEL BRACKET NOTATION

let comidas = {};

function crearPropiedades(propUno, propDos) {
	comidas[propUno] = ['Frutas', 'Vegetales'];
	comidas[propDos] = ['Hot-Dog', 'Papas'];
}
crearPropiedades('Saludable', 'Chatarra');
console.log(comidas);
