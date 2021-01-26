let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

let alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

let martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

let dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

let vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

let paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

let personas = [sacha, alan, martin,dario, vicky];
console.log(personas);


for(let persona of personas){
    console.log(`${persona.nombre} mide ${persona.altura}`)
}

let personasAltas = personas.filter(persona => persona.altura > 1.8);
//console.log(personasAltas);

let personasBajas = personas.filter(persona => persona.altura < 1.8);
console.log(personasBajas);