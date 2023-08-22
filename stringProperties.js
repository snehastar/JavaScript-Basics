function findStrings(arr) {
  for (let key in arr) {
    if (typeof arr[key] == "string") console.log(key + ":" + arr[key]);
  }
}
let array = {
  name: "Sneha",
  lastName: "Shukla",
  age: 22,
  weight: 60,
  address: "Baker Street, UK",
};
findStrings(array);
