const obj2 = {
  firstName: "sneha",
  lastName: "shukla",
  set name(value) {
    if (typeof value !== "string") {
      throw new Error("Please type string"); //throwing an exception
    }
    const arr = value.split(" ");
    if (arr.length !== 2) {
      throw new Error("cannot be empty"); //throwing an exception
    }

    this.firstName = arr[0];
    this.lastName = arr[1];
  },
};

console.log(obj2); //we are using name as a property not a function
try {
  obj2.name = null;
} catch (e) {
  alert(e);
}
try {
  obj2.name = "meer";
} catch (e) {
  alert(e);
}
