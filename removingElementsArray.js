const arr1 = [1, 2, 3, 3, 4, 5, 6];
console.log(arr1);

//end -> pop
arr1.pop();
console.log(arr1);

//beginning -> shift
arr1.shift();
console.log(arr1);

//mid -> splice
//starting index, no of characters
arr1.splice(1, 1);
console.log(arr1);

let arr = [1, 2, 3, 3, 4, 5, 6];
//emptying an array 4 ways
//best is 1 or 2 as others will be repetitive

//1:
arr = [];

//2:
arr.length = 0;

//3:
arr.splice(0, arr.length);

//4:
while (arr.length > 0) {
  arr.pop();
}
console.log(arr);
