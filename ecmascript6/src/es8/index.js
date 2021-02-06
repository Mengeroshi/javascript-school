const data = {
    frontend: 'Javier',
    backend: 'German',
    Design: 'Angel',
}
//OBJECT: ENTRIES AND VALUES
const entries =  Object.entries(data);
console.log(entries);
console.log(entries.length)


const values = Object.values(data);
console.log(values);

//PADDDING
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));

//TRAILING COMMAS
const data2 = {
    frontend: 'Javier',
}
//console.log(Object.keys(data))

//ASYNC/AWAIT

const helloWorld = () =>{
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            :reject(new Error('Test Error'))

    })
};


const helloAsync = async () =>{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction  = async () =>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch(error){
        console.log(error);
    }
}

anotherFunction();

