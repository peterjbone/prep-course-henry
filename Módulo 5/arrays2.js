// BUCLE FOR CON ARRAY

/* ejercicio 1 */
// let numeros = [1, 2, 3, 4, 5];
// for (let i = 0; i < numeros.length; i++) {
// 	console.log(numeros[i]);
// }

/* ejercicio 2 */
function encontrarLaP(palabra) {
	let palabraArr = palabra.split('');

	for (let i = 0; i < palabraArr.length; i++) {
		if (palabraArr[i] === 'p') {
			return console.log(`"${palabra}" sí tiene la letra "p" y esta en la posición ${i + 1}`);
		}
	}

	return console.log(`La palabra "${palabra}" no tiene letra P`);
}

//encontrarLaP('Jusepe');
//encontrarLaP('Messi');

// BUCLE WHILE
/* ejercicio 3 */

let arr = [];

while (arr.length < 5) {
	arr.push('BOOM');
}

console.log(arr);
