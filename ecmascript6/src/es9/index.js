//OPERADOR DE REPOSO
const obj = {
    name: 'Javier',
    age: '22',
    country: 'MX',
}

let {name, ...all} = obj;

console.log(name, all);

//PROPAGACION
const obj1 = {
    name: 'Javier',
    age: '22',
}

const obj2 = {
    ...obj1,
    country: 'MX',
}

console.log(obj2);

//PROMISE FINALY

const helloWorld = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(() => resolve('Hello Wolrd'), 3000)
            : reject(new Error('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=> console.log('Finalizo'));

//REGEX

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ ;
const match  = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2]
const day = match[3];

console.log(year, month, day)