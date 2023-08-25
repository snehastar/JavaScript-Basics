const address = {
  street: "123",
  city: "London",
  zipCode: "345789",
};

function showAdd(street, city, zipCode) {
  console.log(`${street}, ${city}, ${zipCode}`);
}
showAdd(address.street, address.city, address.zipCode);

function showAdd2(address) {
  for (key in address) {
    console.log(key, address[key]);
  }
}

showAdd2(address);

//using factory function

function addre(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let ad = addre("123", "Manhattan", "230023");
console.log(ad);

//constructor function
function ConstructorAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let ad2 = new ConstructorAddress("123", "Manhattan", "230023");
console.log(ad2);
