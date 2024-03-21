// creating an object literal
let list = {
  name: "Freddie",
  age: 22,
  "likes Manchester City": true, // multiworded property must be quoted
};

let para = (document.querySelector("p").textContent = list.name);

if (list.name) {
  console.log(list.age); // access properties with dot
}

// square brackets
let user = {
  name: "Frosty",
  age: 23,
};

// set
user["likes Chelsea"] = true;

// get
console.log(user["likes Chelsea"]); // true

// delete
delete user["likes Chelsea"];
console.log(user["likes Chelsea"]); // undefined

// let key = prompt("What would you like to know about the user?");
// alert(user[key]);

// for in loops
let obj = {
  person: "Sarah",
  place: "Leighton Buzzard",
  son: "Noah",
};

for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}

// dot notation

const prsn = {
  name: {
    first: "John",
    last: "Doe",
  },
};

console.log(prsn.name.first + " " + prsn.name.last); // John Doe

// bracket notation

const individual = {
  name: {
    first: "John",
    last: "Doe",
  },
};

console.log(individual["name"]["first"] + " " + individual["name"]["last"]); // John Doe
