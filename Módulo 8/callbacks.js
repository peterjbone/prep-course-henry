/* ejercicio 1 */
const devuelvoUsuario = function () {
	return 'Bryan';
};

const devuelvoSaludo = function () {
	return 'Hola';
};

const saludar = function (cb1, cb2) {
	return `${cb1()} ${cb2()}`;
};

let resultado = saludar(devuelvoSaludo, devuelvoUsuario);

console.log(resultado);

/* ejercicio 2 */

const frase = function (comida) {
	return `Hoy quiero comer: ${comida}`;
};

const hablar = function (cb, comida) {
	return cb(comida);
};

let queQuieroComer = hablar(frase, 'atún');
console.log(queQuieroComer);
