const person = {
  name: "sneha",
  age: 22,
};

for (key in person) {
  console.log(key, person.key); //undefined as person doen't have key as a property
  console.log(key, person[key]); //here we used bracket nootation to access values when we don't know variable names
}

const colors = ["red", "blue", "green"];
for (key in colors) {
  console.log(key, colors[key]);
}

// this is the newer version of JS which is easier to access elements
for (key of colors) {
  console.log(key);
}

//another way using iterator and length
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
