let obo = {
    nombre: "Javier",
    apellido: "Saviñon",
    edad: 22,
}

let player = {
    nombre: "Dario",
    apellido: "Saviñon",
    edad:100,
}

//
function aMayusculas({nombre}){
    console.log(nombre.toUpperCase());
}

aMayusculas(obo);

aMayusculas({nombre:'obo'})



//Destructuring

function aMayusculasDestruct(persona){
    let {nombre} = persona;
 
    console.log(nombre.toUpperCase());
}

aMayusculasDestruct(obo)


function imprimirNombreYEdad(personaje){
    let {nombre} = personaje;
    let {edad}  = personaje;

    console.log(`Hola me llamo${nombre}, tengo ${edad}`)
}

imprimirNombreYEdad(player);


////Parametros como referencia o valor

function cumpleaños(persona){
    return{
        ...persona,
        edad: persona.edad +1
    }
}

let oboMasViejo = cumpleaños(obo);

console.log(obo);
console.log(oboMasViejo);