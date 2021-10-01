const helloWorld = () =>{
    const hello = 'hello World';// local
    console.log(hello);
}

helloWorld();

var scope = 'I am global';

const functionScope = () =>{
    var scope = 'Im local';
    const func = () =>{
        return scope;
    }
    console.log(func());
}

functionScope();