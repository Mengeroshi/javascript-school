let code = [70, -50, -40, 50, 100, 210, -250];




const locker = (list)=>{

    const state= {
        knob: 0,
        upperLimit: 100,
        underLimit: 0,
        underLimit: -100,
    }


    list.forEach((element, i )=> {

        let {knob} = state
        let buffer = knob + element;
        console.log('El buffer esta en', buffer)

        if( buffer < 0 ){


            if(buffer < state.underLimit){
                buffer = buffer % state.upperLimit;
                console.log(buffer)
                state.knob = state.upperLimit + buffer;
            }
            
            state.knob = state.upperLimit + buffer

        }else if(buffer > state.upperLimit){

             state.knob = buffer % state.upperLimit;
            //console.log('el residuo es : ',residuo);

            //buffer = knob += residuo;
            //console.log('el buffer es : ',buffer)

            //if( buffer > 100) buffer = buffer - state.upperLimit
            

            //state.knob += buffer
        }else {
            state.knob += element
        }

        if(state.knob == state.upperLimit ||state.knob == state.underLimit ) state.knob = 0;
        console.log(`Movimiento #${i+1}. El knob esta en ${state.knob}`);
    });

    console.log('Final',state.knob);
}


locker(code);

//console.log(-101 % 100)


