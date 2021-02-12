const somethingWillHappend = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Hey, we did it');
        }else{
            reject('Whooooooops!')
        }
    });
}

somethingWillHappend()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappend2 = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(() => {
                resolve('True')
            }, 2000);
        }else{
            const error = new Error('Whooops!');
            reject(error);
        }
    })
}

somethingWillHappend2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


Promise.all([somethingWillHappend(), somethingWillHappend2()])
    .then(response =>{
        console.log('Array of  results', response);
    })
    .catch(err => console.error(err));