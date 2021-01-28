//function heredaDe(prototipoPadre, prototipoHijo){
//let fn = function(){};
//fn.prototype = prototipoPadre.prototype;
//prototipoHijo.prototype = new fn;
//prototipoHijo.prototype.constructor = prototipoHijo;
//}



function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

    Persona.prototype.saludar = function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }
    Persona.prototype.soyAlto = function(){
        return this.altura > 1.8;
    }
}

const javier = new Persona("Javier", "Saviñon");

javier.saludar();


function Desarrollador(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;

    Desarrollador.prototype.saludar = function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}

heredaDe(Persona, Desarrollador);

let arturo = new Desarrollador("Arturo", "Martinez", 1.89);
arturo.saludar();


//Clases Ecmascript5
class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        return this.altura > 1.8;
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura);
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}
