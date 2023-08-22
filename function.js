function doit() {
  console.log("This is it!");
}

doit();

function print(name) {
  //name is parameter for this function
  console.log("You're awesome " + name + " !"); //string concat
}

print("Sneha"); // argument

function greet(name, lastname) {
  //name is parameter for this function
  console.log("You're awesome " + name + " " + lastname + " !"); //string concat
}

greet("sneha"); //you're awesome sneha undefined!
greet("sneha", "shukla"); //you're awesome sneha shukla!

function square(number) {
  return number * number;
}

console.log(square(2)); //passing a function to another function
