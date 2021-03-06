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

