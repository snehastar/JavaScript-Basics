//factory function
//this used camel casing naming convention
function createCircle(radius) {
  return {
    radius,
    diameter() {
      let a = 2 * radius;
      console.log(a);
    },
  };
}

//creating a factoryfunction object
const c1 = createCircle(3);
//calling the function
console.log(c1.diameter());

//constructor function
//here the function name should be writen in pascal casing
//there is no return statement
//while creating an object new is used

function CreateConstructorCircle(radius) {
  this.radius = radius; //these are statements hence we end with ;
  this.diameter = function () {
    let a = 2 * radius;
    console.log(a);
  };
}

//creating constructor object
const c2 = new CreateConstructorCircle(5);
//calling the function
console.log(c2.diameter());
