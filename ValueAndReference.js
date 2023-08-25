//primitive types : string, number, boolean. undefined....
//reference type : functions arrays and objects

//remember that functions and arrays are also objects
// data is passed by value in value types and by reference in objects

//pass by value
let x = 10;
let y = x;
x = 20;
console.log(x); //20
console.log(y); //10

//OBJECTS
//pass by reference
let i = { value: 10 };
let j = i;
i.value = 20;
console.log(i); //20
console.log(j); //20

//another example
let num = 2;
function inc(num) {
  num++;
}
inc(num);
console.log(num); //remains 2 as is primitves are passed by value

//by reference will change the number
let obj = { num: 2 };
function inc(obj) {
  obj.num++;
}
inc(obj);
console.log(obj.num); //this will increment the value as it is passed by reference in objects
