const arr = [1, 3, 2, 3, 1, 1, 4, 5, 6, 6, 7];
console.log(countOccurence(1, arr));

function countOccurence(num, arr) {
  let count = 0;
  for (key of arr) {
    if (key === num) count++;
  }
  return count;
}

//using reduce function
function countOccurenceReduce(num, arr) {
  return arr.reduce((acc, curr) => {
    const occu = curr === num; //will give 1  if true
    return acc + occu;
  }, 0);
}
console.log(countOccurenceReduce(1, arr));
