// 21 - Map vs Object:

// Regular Object Converts All Keys To String => (OverWrite).
// While Map Doesn't Convert Into String. It Keeps The Data As It Is.

// How To Make A Map Before The Existence Of ES6 And Before The Existence Of The Map
/* var user = {};
user["username"] = "Kinan";
// user.username = "Kinan";
user.website = "Musician.org";
user["10"] = "String";
user[10] = "Number";
user["10"] = "String Last";

console.log(user);
console.log(user.username);
console.log(user.website);

console.log("*".repeat(10)); */

// Answer 1
/* let myMap = new Map();
myMap.set("10", "String").set(10, "Number").set(false, "Boolean");

console.log(myMap); */

// Answer 2
/* let myMap = new Map();
myMap.set("10", "String")
.set(10, "Number")
.set(false, "Boolean");

console.log(myMap); */

// Answer 3 
// (How To Create Data After You Create The Map)
/* let myMap = new Map();
myMap.set("10", "String");
myMap.set(10, "Number");
myMap.set(10, "Number 2"); // In This Case There Will Be Overwrite
myMap.set(false, "Boolean");
myMap.set({a:1, b:2}, "Object");
myMap.set(function sayHello() {}, "Function");

console.log(myMap); */

// Answer 4 (How To Create Data At The Same Time That The Map Was Created)
/* let myMap = new Map([
    ["10", "String"],
    [10, "Number"],
    [false, "Boolean"],
    [{a:1, b:2}, "Object"],
    [function sayHello() {}, "Function"]
]);
console.log(myMap); */

// ____________________________________

// 22 - Map Methods:

/* var user = {};
user["username"] = "Kinan";
// user.username = "Kinan";
user.website = "Musician.org";
user["10"] = "String";
user[10] = "Number";
user["10"] = "String Last";

console.log(user);
console.log(user.username);
console.log(user.website);

let myMap = new Map([
    ["10", "String"],
    [10, "Number"],
    [false, "Boolean"],
    [{a:1, b:2}, "Object"],
    [function sayHello() {}, "Function"]
]);
console.log(myMap);

// By Using Size:
// (It Returns The Number Of Elements In An Array)
console.log(`My Map Elements Count Is: ${myMap.size}`); // My Map Elements Count Is: 5

// By Using Get Method:
// (It Gives The Key Value, Which You Specify)
console.log(`Using Get Method: ${myMap.get(10)}`); // Using Get Method: Number
console.log(`Using Get Method: ${myMap.get("10")}`); // Using Get Method: String
console.log(`Using Get Method: ${myMap.get(false)}`); // Using Get Method: Boolean

// By Using Has Method:
// (Does This Key Exist Or Not?)
console.log(`Using Has Method: ${myMap.has(false)}`); // Using Has Method: true

// By Using Delete Method:
console.log(`Using Delete Method: ${myMap.delete(false)}`); // Using Delete Method: true
console.log(`My Map Elements Count Is: ${myMap.size}`); // My Map Elements Count Is: 4

// By Using Clear:
// (It Removes All The Elements)
myMap.clear();
console.log(`My Map Elements Count Is: ${myMap.size}`); // My Map Elements Count Is: 0 */

// ____________________________________

// 23 - Symbol Part 1:

/* const mySymbol = Symbol();
console.log(typeof mySymbol); // Symbol Data Type

const mySymbolOne = Symbol();
const mySymbolTwo = Symbol();
console.log(mySymbolOne === mySymbolTwo); // False (Unique)

const myNewSymbol = Symbol();

const myObject = {
    username: "Kinan Ashkar",
    website: "Musician.org",
    [myNewSymbol]: "This Is Hidden From Iteration"
}

console.log(myObject);
// {username: "Kinan Ashkar", website: "Musician.org", Symbol(): "This Is Hidden From Iteration"}
// username: "Kinan Ashkar"
// website: "Musician.org"
// Symbol(): "This Is Hidden From Iteration"

for(let obj of Object.entries(myObject)){
    console.log(obj);
    // (2) ["username", "Kinan Ashkar"]
    // (2) ["website", "Musician.org"]
}

console.log(Object.getOwnPropertyNames(myObject)); 
// ["username", "website"]

console.log(Object.keys(myObject)); 
// (2) ["username", "website"]

console.log(Object.getOwnPropertySymbols(myObject));
// [Symbol()]

console.log(JSON.stringify(myObject));
// {"username":"Kinan Ashkar","website":"Musician.org"} */

// ____________________________________

// 24 - Symbol Part 2:

// For:
/* const mySymbolOne = Symbol.for("testing"); // Symbol Not Exist, Create It
const mySymbolTwo = Symbol.for("testing"); // Symbol Is Exist, Retrun It

console.log(mySymbolOne === mySymbolTwo); */

// KeyFor:
/* const mySymbolOne = Symbol.for("one"); // Symbol Not Exist, Create It
const mySymbolTwo = Symbol.for("one"); // Symbol Is Exist, Retrun It

console.log(mySymbolOne === mySymbolTwo);
console.log(Symbol.keyFor(mySymbolTwo)); */

/* const mySymbolOne = Symbol("One");
alert(mySymbolOne); // TypeError: Cannot convert a Symbol value to a string */

/* const mySymbolOne = Symbol("One");
alert(mySymbolOne.toString()); */

/* const mySymbolOne = Symbol("One");
console.log(mySymbolOne.description); */

// ____________________________________

// 25 - forEach And Discussions:

// forEach(CurrentValue, index, array):

/* const arr = ["A", "B", "C", "D", , "F"];
for(let i = 0; i < arr.length; i++){
    console.log(`${i} - ${arr[i]}`);
};

console.log("*".repeat(10));

arr.forEach((element, i) => {
    console.log(`${i} - ${element}`)
});

console.log("*".repeat(10));

let callBack = 0;

arr.forEach((element, i) => {
    console.log(`${i} - ${element}`);
    callBack++;
});

console.log(callBack);

console.log("*".repeat(10));

function makeTheLoop (element, index){
    console.log(`${index} - ${element}`);
}

arr.forEach(makeTheLoop); */

// ____________________________________