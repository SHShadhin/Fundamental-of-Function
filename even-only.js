// give only the even numbers in an array.

function evenOnly (numbers) {
    let arr = [];
    for (number of numbers) {
        if (number % 2 === 0) {
            arr.push(number);
        }
    }
    return arr;
}

let numbers = [2, 3, 5, 6, 8, 9]
const even = evenOnly(numbers);
console.log(even);



// sum of all even numbers 

function sumOfEven (numbers) {
    let sum = 0;
    for (let number of numbers) {
        if (number % 2 === 0) {
            sum = sum + number;
        }
    }
    return sum;
}


const arr = [5, 6, 7, 9, 20, 12]
let sum = sumOfEven(arr);
console.log(sum);