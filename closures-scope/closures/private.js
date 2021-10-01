const person = () =>{
    var saveName = 'Name';
    return{
        getName: () => saveName,
        setName: name => saveName = name,
        
    }
}

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Javier');
console.log(newPerson.getName());