//ejercicio 1 (AND)
function mayorYMenor(num) {
	if (num > 5 && num < 10) console.log(true);
	else console.log(false);
}

// mayorYMenor(2);
// mayorYMenor(7);

//ejercicio 2 (AND)
function mayorYMenorYPar(num) {
	if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
	else console.log(false);
}

//mayorYMenorYPar(8);

//ejercicio 3 (OR)
function operadorOr(str) {
	if (str === 'Henry' || str.length < 2) console.log(true);
	else console.log(false);
}

//operadorOr('example');

//ejercicio 4 (NOT)
function negacion(permiso) {
	if (!permiso) console.log('Sí tiene permiso');
}

negacion(true);
//negacion(false);

//ejercicio 5 (AND y OR)
function condicionCompleja(num) {
	if ((num > 9 && num % 2 == 0) || num === 3) console.log(true);
	else console.log(false);
}

condicionCompleja(10);
condicionCompleja(25);
condicionCompleja(3);
