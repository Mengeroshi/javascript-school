let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

let alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

let martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

let dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

let vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

let paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

let personas = [sacha, alan, martin,dario, vicky,paula];
console.log(personas);


for(let persona of personas){
    console.log(`${persona.nombre} mide ${persona.altura}`)
}

let personasAltas = personas.filter(persona => persona.altura > 1.8);
//console.log(personasAltas);

let personasBajas = personas.filter(persona => persona.altura < 1.8);
console.log(personasBajas);

//mutando el onbjeto original

//let personasCms = personas.map( persona =>{
//    persona.altura *= 100
//    return persona;
//} );


//Sin modificacion del objeto
let personasCms = personas.map( persona =>({
    ...persona,
    altura: persona.altura * 100,
    })
);



console.log("modificado",personasCms)
console.log("original",personas);


let totalDeLibros = personas.reduce((acum, {cantidadDeLibros}) => acum + cantidadDeLibros, 0);

//const reducer = (acum, persona)=>{
//   return acum + persona.cantidadDeLibros;
//}

//let totalDeLibros = personas.reduce(reducer, 0);

console.log(totalDeLibros)