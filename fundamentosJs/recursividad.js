function divisionEntera(dividendo, divisor){
    if(dividendo < divisor){
        return 0;
    }
    let obo =  1 + divisionEntera(dividendo - divisor, dividendo );
    console.log(obo)
    return  1 + divisionEntera(dividendo - divisor, divisor );
}

console.log(divisionEntera(13, 4))