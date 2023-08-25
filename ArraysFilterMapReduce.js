//FILTER
//returns an array with elements which satify a condition
const arr = [1, 2, -4, 2, 6, -6];
const positive = arr.filter(function (value) {
  return value >= 0;
});

console.log(positive);
const number = arr.filter((v) => v >= 0); //easier way to write above code using arrow function

//MAP
//maps elements to index or given condition
const num = [1, 2, 3, 4];
const items = num.map((v) => "<li>" + v + "</li>");
console.log(items);

//we can store this in a string using join, by default separator is , in join
let html = items.join("");
console.log(html);
html = "<ul>" + items.join("") + "</ul>";
console.log(html);

//mapping as objects
const obj = num.map((v) => {
  const ob = { value: v };
  return ob;
});

console.log(obj);

//REDUCE
const num2 = [1, 2, 3, 4, 5];
let sum = 0;
for (let key of num2) {
  sum += key;
}
console.log(sum);
//using reduce

sum = num2.reduce((acc, currVal) => {
  return acc + currVal;
}, 0); //initial value of acc is 0, then we add currVal to acc
console.log(sum);
