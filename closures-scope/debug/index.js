var a = 'hello';

function hello() {
    let b = 'hello world';
    const c = 'hello world!';

    if(true){
        let d  = 'Hello World!!';
        debugger
    }
}

hello();


const moneyBox = () =>{
    debugger
    var saveCoins = 0;
    const countCoins = (coins) =>{
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}
// moneyBox()(4);
// moneyBox()(6);
// moneyBox()(10);
// moneyBox()(10);

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(7);

