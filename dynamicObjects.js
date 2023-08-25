//the objects in JS are dynamic
//we can add or delete properties of an object even after it has been created

const circle = {
  radius: 1,
};
console.log(circle);

//adding more properties to circle object after creating it
circle.color = "green";
circle.draw = function () {};
//deleting some property
console.log(circle);
delete circle.draw;
console.log(circle);
// ******* IMP ******
//note that we defined the Ciorcle object as a constant, so how could we modify it?

//because we defined the variable name as Circle as a constant, so we can't assign cCircle to a new object

//Circle = {}; //this will throw error as we are reassigning the circle to something else
