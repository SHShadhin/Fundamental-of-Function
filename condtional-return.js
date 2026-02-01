function isEven (num) {
    if(num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}



const result = isEven(7);
// console.log(result);
const result2 = isEven(10);
// console.log(result2);


function isOdd (num) {
    if(num % 2 === 1) {
        return true;
    }
    return false;
}

console.log(isOdd(8));
console.log(isOdd(9));