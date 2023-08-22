const arr = [0, 1, 2, 3, null, 6, undefined, "", NaN, 9, false];
console.log(countTruthy(arr));

//instead of using if condition for !== '',null,NaN,0,undefined,false
//we directly increment count if it's a  truthy element
function countTruthy(array) {
  let count = 0;
  for (ele of array) {
    if (ele) count++; //if ele means if it's a truthy it will return true else false
  }
  return count;
}
