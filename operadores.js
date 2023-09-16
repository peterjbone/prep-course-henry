//Operador de suma
console.log(3 + 5);

//Operador de resta
console.log(14 - 7);

//Operador de mutiplicación
console.log(8 * 6);

//Operador de división
console.log(30 / 9);

//Operador de módulo
console.log(95 % 4);

//Precedencia de operadores
console.log(3 + 5 * 2 - 8);
console.log((3 + 5) * 2 - 8);

//Operador de concatenación
console.log('Hola ' + 'Camilo');

var nombre = 'Camilo';
var saludo = 'Hola ' + nombre;
console.log(saludo);

//Operadores de comparación (solo compara valores)
console.log(4 < 8);
console.log(4 <= 4);
console.log(4 > 8);
console.log(8 >= 8);
console.log(4 == 8);
console.log(4 != 8);

//Igualdad y desigualdad estricta (tambien verifican el tipo de dato de los valores)
console.log(4 === '4');
console.log(4 !== '4');

//Asignación y Asociatividad
/* hacia la derecha */
var a = 5;
var b = 10;
var c = (b = a);
console.log(a); //5
console.log(b); //5
console.log(c); //5

/* hacia la izquierda */
console.log(100 / 2 / 5); //10
