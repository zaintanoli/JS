// Primitive Datatypes

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false, because Symbols are always unique

// const bigNumber = 3762198198213212n

// Reference Types (Non Primitive)

// Array, Objects, Functions
const heros = ["superman", "spiderman", "batman"]
let myObj = {
    name: "Zain",
    age: 24,
}
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
