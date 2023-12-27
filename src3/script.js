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

// A function that takes a string and returns the last two letters
function lastTwoLetters(word) {
  return word.slice(-2);
}

let example1 = "De Bruyne";
let example2 = "Haaland";

console.log(lastTwoLetters(example1));
console.log(lastTwoLetters(example2));

// An arrow function that returns "Hello World!" at the click of a button
let button = document.getElementById("button");

let helloWorld = () => alert("Hello World!");
button.addEventListener("click", helloWorld);

// Experimenting with functions. Text appears on click of a button, and disappears with the click of another button
let myBtn = document.getElementById("myBtn");
let resetBtn = document.getElementById("resetBtn");
let para = document.querySelector("p");

let showMessage = () => (para.textContent = "Hello World");
let resetMessage = () => (para.textContent = " ");

myBtn.addEventListener("click", showMessage);
resetBtn.addEventListener("click", resetMessage);

// Function Parameters
function message(from, text) {
  return from + ":" + text;
}

console.log(message("Freddie", " Hello World! "));

// Default Values
function messageTwo(parameterOne, parameterTwo = "default value") {
  return parameterOne + " + " + parameterTwo;
}

console.log(messageTwo("example"));
console.log(messageTwo("example", undefined));

// Function Expressions

let addTwo = function (num1, num2) {
  return num1 + num2;
};

console.log(addTwo(3, 7));

let addThree = (numberOne, numberTwo, numberThree) =>
  numberOne + numberTwo + numberThree;

console.log(addThree(11, 11, 11));

// Javascript.info example
let btn = document.getElementById("jsInfo");

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

btn.addEventListener("click", function () {
  ask(
    "Can you press one of the buttons below?",
    function () {
      alert("You pressed OK");
    },
    function () {
      alert("You pressed cancel");
    }
  );
});

// Add and divide
let addDivide = (x, y, z) => (x + y) / z;

console.log(addDivide(4, 5, 3));

// Ternary Operator
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = prompt("How old are you?", 18);

  let welcome =
    age >= 18
      ? function () {
          alert("18 or over");
        }
      : function () {
          alert("Under 18");
        };

  welcome();
});

// Anonymous functions
let inputBox = document.getElementById("text_box");

inputBox.addEventListener("keydown", function (keyPressed) {
  console.log(`You pressed "${keyPressed.key}"`);
});
``;

// FizzBuzz
document.getElementById("fizzBtn").addEventListener("click", function () {
  let answer = parseInt(prompt("Input a number"));

  for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
});

// For Loops
for (let x = 10; x <= 20; x++) {
  console.log(x);
}

// For Loop: first 10 squared numbers
for (let number = 0; number <= 10; number++) {
  let squared = number * number;
  console.log(squared);
}

// For Loop: first 10 cubed numbers
for (let num = 0; num <= 10; num++) {
  let cubed = num * num * num;
  console.log(cubed);
}
