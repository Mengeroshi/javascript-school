const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

/*fetch(`${API_URL}${PEOPLE_URL.replace(':id',1)}`)

    .then(response => response.json())

    .then((luke) => console.log(luke))

*/

/*
function fethcing(url, id, fn){
    fetch(url)

    .then(response => response.json())

    .then((character) => fn(character)).catch(()=>{
        console.log(`Error, no se pudo obtener al personaje ${id}`)
    });
}
*/

function onPeopleResponse(persoanje){
    console.log(`Hola, yo soy ${persoanje.name}`);
}


function obtenerPersonaje(id, callback){
    return new Promise((resolve, reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
        fetch(url).then(data=>{
            resolve(data.json());
        })
        .catch(()=> reject (id))
    })



    
    
}

function onError(id){
console.log('sucedio un error con el personaje', id);
}


async function obtenerPersonajes(){
    let ids = [1,2,3,4,5,6,7];
    let promesas = ids.map(id=> obtenerPersonaje(id));

    try{
        let personajes = await Promise.all(promesas);
        console.log(personajes);
    }catch(id){
        onError(id)
    }
}

obtenerPersonajes()




/*
obtenerPersonaje(1)
.then(personaje=>{
    onPeopleResponse(personaje);
    return obtenerPersonaje(2)
}).then(personaje =>{
    onPeopleResponse(personaje);
    return obtenerPersonaje(3)
}).then(personaje =>{
    onPeopleResponse(personaje);
    return obtenerPersonaje(4)
}).then(personaje =>{
    onPeopleResponse(personaje);
    return obtenerPersonaje(5)
})
.catch(onError)
*/