let piedra = "piedra";
let papel = "papel";
let tijera = "tijera";

function ppt(user, machine) {
  if (user == machine) {
    console.log("empate");
  } else if (user == piedra) {
    if (machine == papel) {
      console.log("Machine Wins");
    } else if (machine == tijera) {
      console.log("User Wins");
    }
  } else if (user == papel) {
    if (machine == tijera) {
      console.log("Machine Wins");
    } else if (machine == piedra) {
      console.log("User Wins");
    }
  } else if (user == tijera) {
    if (machine == piedra) {
      console.log("Machine Wins");
    } else if (machine == papel) {
      console.log("User Wins");
    }
  }
}

let user = piedra;
let machine = papel;

ppt(user, machine);
