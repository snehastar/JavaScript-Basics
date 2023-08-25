//EVERY SOME
//EVERY returns true if every value satisfies the condition
//SOME returns true if at least one value satisfies the condition

const arr1 = [1, 5, 3, 0, 6, 4];
const arr2 = [1, 5, 3, -1, 6, -3];

const allPositive1 = arr1.every(function (value) {
  return value >= 0;
});
console.log(allPositive1);

const allPositive2 = arr2.every(function (value) {
  return value >= 0;
});
console.log(allPositive2);

const atLeastOnePositive1 = arr1.every(function (value) {
  return value >= 0;
});
console.log(atLeastOnePositive1);

const atLeastOnePositive2 = arr2.every(function (value) {
  return value >= 0;
});
console.log(atLeastOnePositive2);
