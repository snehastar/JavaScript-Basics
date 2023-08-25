const arr = [0, 1, 2, 3, 4, 5, 6, 7];

function shiftElements(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid Offset");
    return;
  }

  let numToShift = array[index];
  let ans = [...array];
  ans.splice(index, 1);
  ans.splice(position, 0, numToShift);
  return ans;
}

let output = shiftElements(arr, 1, -2);
console.log(output);
