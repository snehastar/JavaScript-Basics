//object is used to store things which belong to a same catrgory together so that they can be accessed easily
// it can nstore variables, functions, another object
//OOP
let obj = {
  radius: 3,
  shape: "Circle",
  diameter: function () {
    let a = 2 * obj["radius"];
    console.log(a);
  },
  sizeCount: {
    small: 5,
    medium: 10,
    big: 2,
  },
};

obj.diameter();
console.log(obj.sizeCount["medium"]);
