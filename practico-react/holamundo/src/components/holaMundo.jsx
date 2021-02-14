import React from 'react';

const HolaMundo = () =>{

    const hello = 'Hola Mundo!'
    const isTrue = false;

    return(
        <div className="HolaMundo">
            <h1>{hello}</h1>
            <h2>Curso escencial de React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
            {isTrue? <h4>VERDAD</h4> : <h5>Falso</h5>}
            {isTrue && <h4>VERDAD</h4> }
        </div>
    );
};


export default HolaMundo;