const sacha ={
    nombre: 'Sacha',
    apellido: 'Lifszyc',
}

function saludar(saludo='Hola'){
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

//const saludarASacha = saludar.bind(sacha);

//saludarASacha();

setTimeout(saludar.bind(sacha, 'Hola Che'), 1000)

//saludar.call(sacha, 'Hola Che')
//saludar.apply(sacha, ['Hola Che'])