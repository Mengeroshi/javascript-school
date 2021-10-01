const fruits = () =>{
    var fruit = 'apple';
    console.log(fruit);
}

fruits();
//console.log(fruit); error
//Scope local dentro de un bloque de codigo

const anotherFunction = () =>{
    var x = 1;
    var x = 2;
    let y = 1;
    //let y = 2; error no se puede reasignar un let
    console.log(x);
    console.log(y);
}
anotherFunction();