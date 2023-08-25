const arr = [4, 2, 544, 78, 4];
arr.sort();
console.log(arr);

arr.reverse();
console.log(arr);

//incase of objects extra work is required
const courses = [
  { id: 3, name: "b" },
  { id: 1, name: "a" },
  { id: 2, name: "c" },
  { id: 2, name: "a" },
];

courses.sort();
console.log(courses);

//sorting in terms of id
courses.sort(function (first, second) {
  if (first.id > second.id) return 1;
  if (first.id < second.id) return -1;
  return 0;
});

console.log(courses);

//sorting in terms of name
courses.sort(function (first, second) {
  if (first.name > second.name) return 1;
  if (first.name < second.name) return -1;
  return 0;
});

console.log(courses);

//sorting A and a, in ascii A has lower value than a hence comes first
//N will also come before a
//hence we convert the to uppercase or lowercase to make them same
const names = [{ name: "b" }, { name: "Z" }];
console.log(names);

let namesSort = names.sort(function (first, second) {
  if (first.name > second.name) return 1;
  if (first.name < second.name) return -1;
  return 0;
});
console.log(names);

//sorting converting to uppercase
let namesSort2 = names.sort(function (first, second) {
  const nameF = first.name.toUpperCase();
  const nameS = second.name.toUpperCase();
  if (nameF > nameS) return 1;
  if (nameF < nameS) return -1;
  return 0;
});
console.log(names);
