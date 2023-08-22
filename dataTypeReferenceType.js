//object

let person = {
  name: "sneha",
  age: 22,
};

console.log(person);
//to access properties of an object
//dot notation
console.log(person.name);

//bracket notation
console.log(person["name"]);

//arrays
let colors = ["red", "blue"];
console.log(colors);
console.log(colors[1]);
//we can change the array size and type since JS is a dynamically typed language
//changing the size
colors[2] = "green";
console.log(colors[2]);
//changing the type
colors[3] = 1;
console.log(colors[3]);
//array is also the type of an object
console.log(typeof colors);
