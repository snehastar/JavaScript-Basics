//arithmetic assignment comparison logical bitwise
//ARITHMETIC OPERATOR
let a = 5;
let b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b); //a ^ b

//increment
a++;
console.log(a);
//decrement
b--;
console.log(b);

//ASSIGNMENT OPERATOR

a++;
a = a + 1;
a += 1;
a *= 5;

//COMPARISON OPERATOR
//output is boolean
//Relational
let x = 1;
console.log(x > 0);
console.log(x >= 0);
console.log(x < 0);
console.log(x <= 0);

//Equality
console.log(x === 0); //equal to
console.log(x !== 0); // not equal to

//strict equality (type and value should match)
console.log(1 === 1); //true
console.log(1 === "1"); //false

//lose equality (value should match, type may or may not)
console.log(1 == 1); //true
console.log("1" == 1); //true
console.log(1 == true); //true

//TERNARY OPERATOR
//if points is greater than 100 then person is gold member, else silver member

let points = 110;
let person = points > 100 ? "gold" : "silver";
console.log(person);

//LOGICAL OPERATOR with BOOLEAN
//AND (&&)
console.log(1 && 1);
//OR (||)
console.log(1 || 0);
//NOT (!)
console.log(!true);

//LOGICAL OPERATOR with NON BOOLEAN
//FALSY
//null undefined 0 Nan '' false
console.log(false || undefined);
console.log(false || 0);
console.log(false || false);
console.log(false || "");
console.log(false || null);
console.log(false || NaN);

console.log(false && undefined);
console.log(false && 0);
console.log(false && false);
console.log(false && "");
console.log(false && null);
console.log(false && NaN);
//TRUTHY
//anything that is not falsy is truthy
console.log(false || "sneha");
console.log(false || 1);
console.log(false || true);
console.log(false || ["acn", "sdf"]);
console.log(false || { name: "sneha", age: 22 });

//when we get a truthy we return that, it does'nt matter what's after that for non boolean comparison
// this is also called as short circuting as we stop once we get a truthy
console.log(false || 2 || 3); //2 : non boolen comparison
console.log(true && true && false); // false : this is a boolean comparison hence we go till end

//usecase
let userColor = "red";
let defaultColor = "blue";
// if user doesn't provide color, default is given
let currentColor = userColor || defaultColor;
console.log(currentColor);
userColor = null;
currentColor = userColor || defaultColor;
console.log(currentColor);

//BITWISE OPERATOR
let n1 = 1; //00000001
let n2 = 2; //00000010
console.log(1 | 2); //00000011 ->3 //OR
console.log(1 & 2); //00000000 ->0 //AND
//R W E
//_ _ _
//read      001 ->1
//write     010 ->2
//execute   100 ->4
//read and write 011 ->3
let read = 4;

//OPERATOR PRECEDENCE
//follows BODMAS
let y = 2 + 3 * 4; //14
