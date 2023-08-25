console.log("This is ' new"); //to use ' in string use \
console.log("This prints \n in new line");
// \0 ->null character
const m = "This is a single string";
console.log(m);
console.log(m.split(" ")); //splits into array

//OJECT LITERAL
console.log("This is 'new' and \nwhere have you been?");
//using object literals makes it eay to write use backticks ``
//much easier to write
console.log(`This is 'new' and 
where have you been?`);

//PLACEHOLDER
// is used to add placeholder dynamically
const name = "sneha";
console.log("hi " + name + "!");
//using placeholder
console.log(`hi ${name}!`);

//we can add mathematical expression inside the place holder as well
console.log(`hi ${name} ${3 + 6}!`);

//we can also pass functions there
