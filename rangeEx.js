function rangeValues(min, max) {
  let ans = [];
  for (let num = min; num <= max; num++) {
    ans.push(num);
  }
  return ans;
}

let ans = rangeValues(0, 17);
console.log(ans);
