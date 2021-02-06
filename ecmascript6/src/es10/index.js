//FLAT
let array = [1,2,3, [1, 2, 3,[1, 2, 3]]];

//console.log(array.flat(2));


//FLAT MAP

let array2 =[1,2,3,4,5];

//console.log(array.flatMap(value => [value, value * 2]))

//TRIM END/START

let hello = '           hello world';

console.log(hello.trimStart())

let hello2 = 'world          ';
console.log(hello2.trimEnd())


//OPTIONAL CATCH BIDING
/*
try{

}catch{
    error
}*/


//chrome entries

let entries = [['name', 'oscar'], ['age', 32]];

console.log(Object.fromEntries(entries));

//symbol

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description)