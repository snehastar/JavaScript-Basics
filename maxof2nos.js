function f(i, j) {
  if (i >= j) return i;
  return j;
}
console.log(f(400, 89));

//using ternary
function maxi(a, b) {
  return a >= b ? a : b;
}
console.log(maxi(40, 89));

//more concise
function maxo(a, b) {
  return a >= b; //evaluated to true or false
}
console.log(maxo(4, 8));
