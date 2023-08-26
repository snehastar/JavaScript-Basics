function sum(a, b) {
  console.log(a + b);
}
sum(1, 2); //3  1+2 ->3
sum(2); //NaN  one is 2 other is undefined therefore sum is Nan
sum(1, 2, 3, 4); //3 still takes first 2 numbers
sum(); // Nan

//what if we want to add as many number of arguments but return their complete sum

//use the arguments keyword
//agruments has all the paramters we pass in the function
function sum2() {
  total = 0;
  for (let key of arguments) total += key;
  console.log(total);
}

sum2(1, 2); //3  1+2 ->3
sum2(2); //2
sum2(1, 2, 3, 4); //10
sum2(); //0
sum2("a", "b"); // 0ab
sum2("a", 4); //0a4

//...args is a rest operator when used in a function
//... is spread operator in case of arrays
//...args converts it to an array of all the arguments passed
function sum3(...args) {
  console.log(args);
}
sum3(1, 2, 3, 4);

//to add all the elements
//notice that agrs is an array
//hence we can use reduce to sum up our ans
function sum4(...args) {
  console.log(args.reduce((a, b) => a + b));
}
sum4(1, 2, 3, 4);

//args can be named some other variable too
//we can also pass other parameters apart from rest operator
//rest operator should be the last parameter otherwise it will throw error
function sum4(...args) {
  console.log(args.reduce((a, b) => a + b));
}
sum4(1, 2, 3, 4);

function cost(discount, ...prices) {
  const tot = prices.reduce((a, b) => a + b);
  return tot * (1 - discount);
}

console.log(cost(0.1, 30, 40, 50));
