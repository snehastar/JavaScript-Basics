//SEARCHING IN REFERENCE TYPE
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

//this returns false
//because objects create a new data when referenced, hence they are pointing to diff location
console.log(courses.includes({ id: 2, name: "b" }));

//predicate function for objects
//find ->returns element if found else returns undefined
//hence we use a find function where we write a condition for it to satisfy
let course = courses.find(function (course) {
  return course.name === "a";
});

console.log(course); //{ id: 1, name: 'a' }

let course2 = courses.find(function (course) {
  return course.name === "z";
});

console.log(course2); //undefined

//findIndex ->returns index where element is present else -1
let course3 = courses.findIndex(function (course) {
  return course.name === "b";
});
console.log(course3); //{ id: 1, name: 'a' }

let course4 = courses.findIndex(function (course) {
  return course.name === "z";
});

console.log(course4); //undefined

//ARROW FUNCTION
//easier syntax to write
let course5 = courses.find((course) => course.name === "b");
console.log(course5);

//if there are no parameters
//keep parenthesis
courses.find(() => course.name === "b");

//if there are multiple parameters
courses.find((course, age) => course.name === "b" && course.id === 1);

//if there are multiple parameters and return functions
courses.find((course) => {
  return course.name === "b" && course.id === 1;
});
