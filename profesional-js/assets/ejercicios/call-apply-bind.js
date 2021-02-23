//call
function saludar(){
 console.log(`Hola Soy ${this.name} ${this.apellido}`)   
}

const richard = {
    name: 'Richard',
    apellido: 'Lopez',
}

saludar.call(richard);

function caminar(metros, direccion){
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}`);

}

caminar.call(richard, 400, 'norte');

//apply
caminar.apply(richard, [800, 'Noreste'] )

//BIND
const daniel = {name:'Daniel', apellido: 'Sanchez'}
const danielSaluda = saludar.bind(daniel);
danielSaluda()

const danielCamina = caminar.bind(daniel);
danielCamina(1000, 'Este');

