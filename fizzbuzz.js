function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) console.log("fizzbuzz");
  else if (num % 3 === 0) console.log("fizz");
  else if (num % 5 === 0) console.log("buzz");
  else if (typeof num === "number") console.log(num);
  else console.log(NaN);
}
fizzbuzz(6);
fizzbuzz(20);
fizzbuzz(15);
fizzbuzz(7);
fizzbuzz("a");

console.log(typeof NaN); //type of this is number
