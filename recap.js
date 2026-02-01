function add (price1, price2) {
    const sum = price1 + price2;
    return sum;
}

const bill = add(200, 50);

function add (price1 , price2) {
    return price1 + price2;
}

const bill2 = add(200, 50);
console.log(bill, bill2);


function doMath (num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = sum * diff;
    const result = mult / 2;
    return result;
}

const results = doMath(20, 10);
console.log(results);