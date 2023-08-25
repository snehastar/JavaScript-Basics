const obj = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};
const another = {}; //initializing an empty object
for (let key in obj) {
  another[key] = obj[key];
}
console.log(another);

//easier way to write the above same code
const another1 = Object.assign({}, obj);
console.log(another1);

//we can also add new properties while copying from another object
const another2 = Object.assign({ color: "red" }, obj);
console.log(another2);

//easiest way to clone another object using
//SPREAD OPERATOR
const another3 = { ...obj };
console.log(another3);
