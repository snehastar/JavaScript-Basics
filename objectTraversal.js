const circle = {
  radius: 1,
  draw: function () {
    console.log("draw");
  },
  write() {
    console.log("write");
  },
};

for (let key in circle) console.log(key, circle[key]);

for (let key of Object.keys(circle)) console.log(key);

for (let entry of Object.entries(circle)) console.log(entry);

//check if a key 'radius' exists in circle object
if ("radius" in circle) console.log("yes");

if ("abc" in circle) console.log("yes");
