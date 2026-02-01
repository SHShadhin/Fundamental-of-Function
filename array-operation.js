function sumOfNumbers(numbers) {
    // console.log(numbers)
    let sum = 0;
    for (const num of numbers) {
        // console.log(num)
         sum = sum + num;
    }
    return sum;
}

const total = sumOfNumbers ([2, 4, 2, 6, 9]);
console.log('Sum of the number is :', total)