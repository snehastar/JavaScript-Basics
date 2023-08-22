let obj1 = {
  radius: 3,
  color: "red",
  diameter: function () {
    let a = 2 * obj["radius"];
    console.log(a);
  },
};

let obj2 = {
  radius: 7,
  color: "green",
  diameter: function () {
    let a = 2 * obj["radius"];
    console.log(a);
  },
};

//  instead of creating objects separately by repeating code we use factory function

function createCircle(radius, color) {
  let obj = {
    radius: radius,
    color: color,
    diameter: function () {
      let a = 2 * obj["radius"];
      console.log(a);
    },
  };
  return obj;
}

const c1 = createCircle(7, "green");
c1.diameter();

//can be further reduced to
function createCircle(radius, color) {
  return {
    radius: radius,
    color: color,
    diameter: function () {
      let a = 2 * radius;
      console.log(a);
    },
  };
}

//even more compressd form
function createCircle(radius, color) {
  return {
    radius,
    color,
    diameter() {
      let a = 2 * radius;
      console.log(a);
    },
  };
}

const c2 = createCircle(4, "green");
c2.diameter();
