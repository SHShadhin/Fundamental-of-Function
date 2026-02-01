function isEvenSized(str) {
  console.log(str);
  const size = str.length;
  console.log(size);
  if (size % 2 === 0) {
    // console.log('This is even sized')
    return true;
  } else {
    // console.log('This is Odd size');
    return false;
  }
}

const Even = isEvenSized("barishal");
console.log(Even);

function doubleOrTriple(num, doDouble) {
  if (doDouble === true) {
    const result = num * 2;
    return result;
  } else {
    const result = num * 3;
    return result;
  }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));




function arr(numbers) {
  const len = numbers.length;
  return len;
}

const result = arr([24, 535, 6, 346, 63, 74]);

console.log(result)
