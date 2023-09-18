//Ejemplo básico
function sumaTres(x) {
	console.log(x + 3);
}

sumaTres(5);

/**************************/

// Forma 1: devolver valor sin imprimir
function sumaTres(x) {
	return x + 3;
}
console.log(sumaTres(5));

/**************************/

//Forma 2: función guardada en una variable

var sumaTres = function (x) {
	return x + 3;
};

console.info(sumaTres(5));

/**************************/

//Forma 3: Con una arrow function

var sumaTres = (x) => {
	return x + 3;
};
console.info(sumaTres(5));
