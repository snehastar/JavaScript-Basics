const arr = [1, 4, 2, 6, 8, 9];
function findMax(arr) {
  if (arr.length === 0) return undefined;
  let maxi = 0;
  for (key of arr) maxi = Math.max(maxi, key);
  return maxi;
}

console.log(findMax(arr));

//using reduce
const ans = arr.reduce((acc, curr) => {
  return (acc = Math.max(acc, curr));
}, 0);

console.log(ans);

const ans2 = arr.reduce((a, c) => {
  return (a = Math.max(a, c));
});

console.log(ans2);

const ans3 = arr.reduce((a, c) => (a > c ? a : c));

console.log(ans3);
