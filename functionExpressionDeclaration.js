//function declaration
function walk() {
  console.log("walk");
}

//anonymous function expression
let func = function () {
  console.log("talk");
};

//function expression , we hav given the name of the function here
let func2 = function run() {
  console.log("run");
};

walk();
func();
func2();

//difference between function declaration and expression
//we can't call a function expression before it is defined
//this will throw an error -> uncaught reference error
//but we can call a function declaration anywhere in the program

//HOISTING
//A JS engine moves all the function declaration at the top while compiling
//hence we don't get error even if we call that function declaration before it is defined in our program
//because it it sent up while execution
