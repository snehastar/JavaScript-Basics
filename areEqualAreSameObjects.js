function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let ad1 = new Address("123", "Manhattan", "230023");
let ad2 = new Address("123", "Manhattan", "230023");

//shows if they are the same objects
function areSame(ad1, ad2) {
  return ad1 === ad2;
}

//shows if they have the same values
function areEqual(ad1, ad2) {
  return (
    ad1.city === ad2.city &&
    ad1.street === ad2.street &&
    ad1.zipCode === ad2.zipCode
  );
}

console.log(areSame(ad1, ad2)); //false ad1 and ad2 point to differernt memory location hence diff
console.log(areEqual(ad1, ad2)); //true
const ad3 = ad1;
console.log(areSame(ad1, ad3)); //true we assigned ad3 the same klocation and value as ad1
