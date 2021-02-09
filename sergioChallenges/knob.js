let code = [70, -50, -40, 50, 100, 210, -250, 10, 99, ];




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

        if( buffer < 0 ){


            if(buffer < state.underLimit){
                buffer = buffer % state.upperLimit;
                state.knob = state.upperLimit + buffer;
            }
            
            state.knob = state.upperLimit + buffer

        }else if(buffer > state.upperLimit){

             state.knob = buffer % state.upperLimit;

        }else {
            state.knob += element
        }

        if(state.knob == state.upperLimit ||state.knob == state.underLimit ) state.knob = 0;
        console.log(`Movimiento #${i+1}. El knob esta en ${state.knob}`);
    });

    console.log('Final',state.knob);
}


locker(code);
