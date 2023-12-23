// Write a function called add7 that takes one number and returns that number + 7.
let add7 = (number) => number + 7;

console.log(add7(2));

// Write a function called multiply that takes 2 numbers and returns their product.
let multiply = (x, y) => x * y;

console.log(multiply(3, 4));

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh
let capitalise = (inputString) =>
  inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();

let stringOne = "hello world!";
console.log(capitalise(stringOne));

let stringTwo = "goodbye World!";
console.log(capitalise(stringTwo));

let stringThree = "a MiXturE of UppER CasE and LOWeR cAsE";
console.log(capitalise(stringThree));

// Write a function called lastLetter that takes a string and returns the very last letter of that string: lastLetter("abcd") should return "d"
let lastLetter = (inputWord) => inputWord.slice(-1);

let wordOne = "Manchester";
let wordTwo = "Guardiola";

console.log(lastLetter(wordOne));
console.log(lastLetter(wordTwo));

function lastTwoLetters(word) {
  return word.slice(-2);
}

let example1 = "De Bruyne";
let example2 = "Haaland";

console.log(lastTwoLetters(example1));
console.log(lastTwoLetters(example2));
