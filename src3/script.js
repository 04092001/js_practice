// Write a function called add7 that takes one number and returns that number + 7.
function add7(number) {
  newNum = number + 7;
  return newNum;
}

add7(1);
console.log(newNum);

// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(x, y) {
  number = x * y;
  return number;
}

multiply(2, 4);
console.log(number);

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh
function capitalise(inputString) {
  return (
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
  );
}

let stringOne = "hello world!";
console.log(capitalise(stringOne));

let stringTwo = "goodbye World!";
console.log(capitalise(stringTwo));

let stringThree = "a MiXturE of UppER CasE and LOWeR cAsE";
console.log(capitalise(stringThree));

// Write a function called lastLetter that takes a string and returns the very last letter of that string: lastLetter("abcd") should return "d"

function lastLetter(inputWord) {
  return inputWord.slice(-1);
}

let wordOne = "Manchester";
console.log(lastLetter(wordOne));

let wordTwo = "Guardiola";
console.log(lastLetter(wordTwo));
