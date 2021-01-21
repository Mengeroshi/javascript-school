let piedra = "piedra";
let papel = "papel";
let tijera = "tijera";

function ppt(user, machine) {

    switch(true){
        case (user == machine):
            console.log("empate");
            break;
        case (user == piedra):
            switch(true){
                case machine == papel:
                console.log("Machine Wins");
                break;
                default:
                    console.log("User Wins");
            }
            break;
        case user == papel:
            switch(true){
                case machine == tijera:
                console.log("Machine Wins");
                break;
                default:
                    console.log("User Wins");
            }
            break;
        case user == tijera:
            switch(true){
                case machine == piedra:
                console.log("Machine Wins");
                break;
                default:
                    console.log("User Wins");
            }
            break;

    }

}
let user = tijera;
let machine = piedra;

ppt(user, machine);
