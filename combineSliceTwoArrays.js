let arr1 = [1, 2];
let arr2 = [3, 4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr4 = arr3.slice(2, 4);
console.log(arr4);

//elements are copied by value in primitive
//if elements are objects, then they are copied by reference hence the value will change

//SPREAD OPERATOR
//easier to combine
const arr5 = [...arr1, ...arr2];
console.log(arr5);
const arr6 = [...arr1, "a", "b", ...arr2];
console.log(arr6);
const arr7 = [...arr6];
console.log(arr7);

//Iterating in array
for (key of arr7) {
  console.log(key);
}

//for each
arr7.forEach((num, idx) => console.log(idx, num));
