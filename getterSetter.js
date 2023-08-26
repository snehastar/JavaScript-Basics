const obj = {
  firstName: "sneha",
  lastName: "shukla",
};

console.log(obj.firstName + obj.lastName);
console.log(`${obj.firstName}  ${obj.lastName}`);
//instead of printing firstname ans lastname so many times where ever it is requireed
//we can create a function to print the fullname
const obj1 = {
  firstName: "sneha",
  lastName: "shukla",
  name() {
    return `${obj1.firstName}  ${obj1.lastName}`;
  },
};
console.log(obj1.name());

//here we can access the function to print the name as a function
//what if we want to access them as property
//also if we want to modify the values
//we can use getter and setter
//getter to get
//setter to set or modify

const obj2 = {
  firstName: "sneha",
  lastName: "shukla",
  get name() {
    return `${obj1.firstName}  ${obj1.lastName}`;
  },
  set name(value) {
    const arr = value.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  },
};
console.log(obj2); //we are using name as a property not a function
obj2.name = "sumo kakashi";
console.log(obj2);
