const buidlCount = (i) =>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    }
    return displayCount;
}

const myCount = buidlCount(1);
myCount();
myCount();
myCount();


const myOtherCount = buidlCount(10);
myOtherCount()
myOtherCount()