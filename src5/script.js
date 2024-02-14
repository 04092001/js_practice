// Completely Unorganised Javascript Practice

//   In this exercise, we want you to print out a simple launch countdown to the output box, from 10 down to Blastoff. Specifically, we want you to:

// Loop from 10 down to 0. We've provided you with an initializer — let i = 10;.
// For each iteration, create a new paragraph and append it to the output <div>, which we've selected using const output = document.querySelector('.output');. In comments, we've provided you with three code lines that need to be used somewhere inside the loop:
// const para = document.createElement('p'); — creates a new paragraph.
// output.appendChild(para); — appends the paragraph to the output <div>.
// para.textContent = — makes the text inside the paragraph equal to whatever you put on the right-hand side, after the equals sign.
// Different iteration numbers require different text to be put in the paragraph for that iteration (you'll need a conditional statement and multiple para.textContent = lines):
// If the number is 10, print "Countdown 10" to the paragraph.
// If the number is 0, print "Blast off!" to the paragraph.
// For any other number, print just the number to the paragraph.
// Remember to include an iterator! However, in this example we are counting down after each iteration, not up, so you don't want i++ — how do you iterate downwards?

const para = document.getElementById("para");
const animals = ["Tiger", "Lion", "Monkey", "Rhino", "Fish"];

for (let i = 0; i < 3; i++) {
  console.log(animals[i]);
}

let output = document.querySelector(".output");
output.innerHTML = "";

let i = 10;
while (i > -1) {
  const para = document.createElement("p");

  if (i === 10) {
    para.textContent = "Countdown " + i;
  } else if (i === 0) {
    para.textContent = "Blast Off!";
  } else {
    para.textContent = i;
  }

  output.appendChild(para);
  i--;
}

// In this exercise, we want you to take a list of names stored in an array and put them into a guest list. But it's not quite that easy — we don't want to let Phil and Lola in because they are greedy and rude, and always eat all the food! We have two lists, one for guests to admit, and one for guests to refuse.

// Specifically, we want you to:

// Write a loop that will iterate through the people array.
// During each loop iteration, check if the current array item is equal to "Phil" or "Lola" using a conditional statement:
// If it is, concatenate the array item to the end of the refused paragraph's textContent, followed by a comma and a space.
// If it isn't, concatenate the array item to the end of the admitted paragraph's textContent, followed by a comma and a space.
// We've already provided you with:

// refused.textContent += — the beginnings of a line that will concatenate something at the end of refused.textContent.
// admitted.textContent += — the beginnings of a line that will concatenate something at the end of admitted.textContent.
// Extra bonus//  question — after completing the above tasks successfully, you will be left with two lists of names, separated by commas, but they will be untidy — there will be a comma at the end of each one. Can you work out how to write lines that slice the last comma off in each case, and add a full stop to the end? Have a look at the Useful string methods article for help.

// If you make a mistake, you can always reset the example with the "Reset" button. If you get really stuck, press "Show solution" to see a solution.

const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");

admitted.textContent = "Admitted: ";
refused.textContent = "Refused: ";

for (const person of people) {
  if (person === "Lola" || person === "Phil") {
    refused.textContent += `${person}` + ", ";
  } else {
    admitted.textContent += `${person}` + ", ";
  }
}

refused.textContent = refused.textContent.slice(0, -2) + ".";
admitted.textContent = admitted.textContent.slice(0, -2) + ".";

// Odd Numbers

let x = 0;

for (; x < 10; x++) {
  if (x % 2 == 1) {
    console.log(x);
  }
}

// while...

let y = 0;

while (y < 7) {
  console.log(y);
  y++;
}

// do..while

let z = 0;
do {
  console.log(z);
  z++;
} while (z <= 3);

// break

let a = 0;
for (; a <= 10; a++) {
  if (a == 4) break;
  console.log(a);
}

let c = 0;
while (c < 10) {
  console.log(c);
  if (c == 4) break;
  c++;
}

let d = 20;
do {
  console.log(d);
  if (d == 25) break;
  d++;
} while (d <= 30);

// continue

let b = 0;
for (; b <= 10; b++) {
  if (b == 4 || b == 5) continue;
  console.log(b);
}

let f = 0;
while (f < 10) {
  f++;
  if (f == 8) continue;
  console.log(f);
}

let g = 0;
do {
  g++;
  if (g == 3 || g == 4) continue;
  console.log(g);
} while (g < 10);

// labelling continue

// Array.at

const array1 = ["De Bruyne", "Haaland", "Aguero"];

console.log(array1.at(1));
