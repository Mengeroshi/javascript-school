//FUNCTIONS
//es5
function newFunction(name,age, country){
    var  name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}
//es6
function newFunction2(name='oscar', age='32', country='MX'){
    console.log(name, age, country);
}

newFunction()
newFunction2('Javier', '23', 'UK');

//TEMPLATE STRINGS
//es5
let hello = 'hello';
let world = 'world';
let epicPhrase = hello + '' + world;

let epicPhrase2 = `${hello} ${world}`

//STRINGS
//es5 Multilinea
let lorem = "Lorem Ipsum dolo sasnsdlkansdlkansndsna! \n" 
+ "otra frase eeeeeeeeeeeeeeee"
//es6
let lorem2 = `Lorem Ipsum dolo sasnsdlkansdlkansndsna!
Lorem Ipsum dolo sasnsdlkansdlkansndsna!`

//DESTRUCTURING es6 

let person = {
    'name':'oscar',
    'age': 32,
    'country': 'MX',
}

let {name, age, country} = person;

console.log(name)

//CONCAT ARRAY ES6
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yessica', 'Camila'];

let education = ['David', ...team1, ...team2]

console.log(education);

//OBJETOS
let name2 = 'Javier';
let age2 = 32;
//es5
let obj ={
    name:name2,
    age: age2,
}
//es6
let objes6 = {
    name2,
    age2,
}

//ARROW FUNCTIONS
//sintaxis reducida, this no vinculable
const names = [
    {name: 'Javier', age:22},
    {name: 'Yessica', age:27},
]


//es5
let listOfNames = names.map(function(item){
    console.log(item.name)
})
//es6
let listOfNames2 = names.map(item => console.log(item.name))


const  listOfName3 = (name, age, country) =>{
    //
    //
}


//PROMESAS
const helloPromise = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('hey!')
        }else{
            reject('UPS!!!')
        }
    })
}

helloPromise()
.then(response => console.log(response))
.then(() => console.log('HOLA'))
.catch(error=> console.log(error));


//CLASES

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator()

console.log(calc.sumar(2,2));

//IMPORT

//import {hello} from './module';

//hello();
