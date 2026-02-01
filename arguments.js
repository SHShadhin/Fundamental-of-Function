function doubleIt (number) {
    const double = number * 2; 
    console.log(number, double);
}

console.log('I will call the function')
doubleIt (20);
console.log('===============');
doubleIt(111);




function difference (num1, num2) {
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is :', diff);
}

const bigNum = 55;
const smallNum = 22;
difference(bigNum, smallNum);