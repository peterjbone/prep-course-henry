class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
	}

	saludar() {
		console.log(`Hola, mi nombre es ${this.nombre}. Tengo ${this.edad} años de edad.`);
	}
}

class Programador extends Persona {
	constructor(nombre, edad, aniosDeExperiencia) {
		super(nombre, edad);
		this.aniosDeExperiencia = aniosDeExperiencia;
	}

	codear() {
		console.log(`Soy ${this.nombre} y escribó código desde hace ${this.aniosDeExperiencia} años`);
	}
}

let personaUno = new Persona('Joao', 22);
personaUno.saludar();

let personaDos = new Programador('Dale', 30, 5);
personaDos.saludar();
personaDos.codear();
