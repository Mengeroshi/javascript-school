const suma = (num1, num2) => num1 + num2;


const calc = (num1, num2, callback) => 
    callback(num1, num2);

console.log(calc(2,2, suma));




const date = callback =>{
    console.log(new Date);
    
    setTimeout(()=>{
        let date = new Date;
        callback(date);
    }, 3000)
}

const printDate = dateNow => console.log(dateNow)

date(printDate)