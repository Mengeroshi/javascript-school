console.log('hello Typescript')

function add(a:number, b:number){
    return  a + b;
}

const sum = add(2,3);


//Boolean
let muetd:boolean = true;

muetd = false;

//numeros
let numerador:number = 42;
let denominador:number = 6;

let resultado = numerador / denominador;

//string
let nombre: string = 'Javier';


//arrays
let people: string[] = [];
people = ["isabel", "raul", "nicole"];

people.push("9000")

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("ricardo");
peopleAndNumbers.push(9);

//enum
enum Color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color =Color.Rojo;
console.log(`Mi color fav es ${colorFavorito}`)


//any
let comodin:any = "Joker"


let someObject:object = {type:"Wildcard"}

//function

function sumar(a:number, b:number): number{
    return a + b;
}

const suma = sumar(4,6);

function createAdder(a:number):(number)=> number{
    return function(b:number){
        return b + a;
    }
}

const addFour= createAdder(4);

const fourPlus6 = addFour(6);


function fullName(firstName:string, lastName:string="Smith" ): string{ 
    return `${firstName} ${lastName}`;
}


const javier = fullName("Javier", "Saviñon");

console.log(javier)




//interfaces

interface Rectangulo{
    ancho:number
    alto:number,
    color?:Color,
}

let rect: Rectangulo ={
    ancho:4,
    alto: 6,
    color : Color.Rojo,
}

function area(r:Rectangulo):number{
    return r.alto * r.ancho;
}


const areaRect = area(rect)


console.log(areaRect);

rect.toString = () => rect.color ? `Un regalo ${rect.color}`: 'Un rectangulo'

console.log(rect.toString())