//primitive data types
let name = "sneha"; //string literal
let height = 5.5; //number literal
let isSmart = true; //boolean literal
let notdefined = undefined; // if we don't define anything it becomes undefined but we can mention it explicitely too
let selectedColor = null; //null when we an empty value
console.log(name, height, isSmart, notdefined, selectedColor);

//JS is a dynamically typed language
//the datatype of a variable can be changed
console.log(typeof name); //string
console.log(typeof height); //number
console.log(typeof isSmart); //boolean
console.log(typeof notdefined); //undefined
console.log(typeof selectedColor); //object
//null is a type of object

//we can't changle the data type in a statistically types language
name = 7.7;
console.log(typeof name); // is now number instead of string
