//MODIFYING AN ARRAY
const arr = [2, 3];
console.log(arr);

//though const we can mofidy the arr but we can't assign it again
//arr = []; -> throws error

//adding elements at the end of an array
arr.push(4, 5, 6);
console.log(arr);

//adding elements at the beginning of an array
arr.unshift(0, 1);
console.log(arr);

//adding elements in the middle of an array
//splice has 3 parameters
//starting index, no of elements to be added, elements to be added
arr.splice(2, 0, "a", "b");
console.log(arr);

//SEARCHING ELEMENTS IN ARRAY
//indexOf -> returns the index of the element if present in the array else returns -1
const arr2 = [1, 4, 6, 3, 5, 4];
console.log(arr2.indexOf(6));
console.log(arr2.indexOf("6"));
console.log(arr2.indexOf("t"));
console.log(arr2.indexOf(2));

//lastIndexOf returns the index where the element is found at the end if multiple occurence of that element exists
console.log(arr2.lastIndexOf(4));

//includes - > returns true or false if the element is present or not
console.log(arr2.includes(5));
console.log(arr2.includes(7));

//we can use the above searching elements builtin functions using another parameter
//the 2nd parameter defines where to start searcing from
console.log(arr2.indexOf(4, 2));
console.log(arr2.lastIndexOf(4, 5));
console.log(arr2.includes(6, 3));
