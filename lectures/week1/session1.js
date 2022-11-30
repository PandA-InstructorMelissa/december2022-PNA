// 1. What are the 3 ways to declare something in js

// var
// let
// const

// 2. Which ones can change and which ones can not

// var and let can be changed, const cannot
var pizza = 'Pizza Time'
pizza = 'I am hungry'
// immutable === const
// when to use let vs var

// hardly LOL

// 3. What are some data types
// Boolean, integer, string, number, float, undefined, null



// 4. Create an array and print it's contents

const array = [];
console.log(array)
var stuff = []
stuff.push(0) = 4

let myArr = ["a", "b", "c", "d", "e", "f"]
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i])
}

// 5. Add an item to the array

array.push(5)

// 6. Remove an item from the array
var arr = [1,2,3,4,5]
arr.pop()


// 7. Add to the beginning of the array
var arr = [1,2,3,4]

arr.unshift(0)

// 8. Remove from the beginning of the array
var arr = [1,2,3,4,5]
arr.shift()



// 9. What is the length of the array?
arr1 = []
arr1.length;

// 10. Create an object

const obj = {
    key: value
}

// 11. Create an objects with multiple key/value pairs plus an array containing objects

const object = {
    name: 'Robert',
    email: 'robert@teets.dev', // gotta plug the email too.
    items: [
        'keys',
        'wallet',
        'skis'
    ]
}


// Q 12-14
var duck = {
    bill: true,
    feet: "webbed",
    featherColors: [
        "yellow",
        "Brown",
        "Blue",
        "Green"
    ],
    famousDucks: [
        {name: "Scrooge McDuck", company: "Disney"},
        {name: "Daffy Duck", company: "Warner Brothers"},
        {name: "Darkwing Duck", company: "Disney"},
        {name: "Psyduck", company: "Pokemon"}
    ]
}

// 12. Print out the Names of the Famous Ducks in the provided object

for (const singleDuck of duck.famousDucks) { //reminds me of advanced for loops in java
    // I haven't done Java, I ran. FAR AWAY, you should, listen man, I really fell in love with js
    // and I hated JS prior to this. LOL
    console.log(singleDuck.name);
}

// 13. Print out the duck object

console.log(duck)

// 14. What data type is bill? //Boolean
typeof duck.bill

// 15 (robert added this) (but im robert too)
// Add an item to the end of an array without push. :)
let newArray = ["a", "b", "c", "d", "e", "f"]
newArray[newArray.length] = "g"

let newerArr = [...newArray, "g"];

// ^ love this, I always forget about spread.
// me too =P
// Do it without spread or length now?
// maybe with splice?
// could also do it RAW with a while loop.
// who uses while loops tsk tsk...jk
const addItem = (array, item) => {
    array[array.length] = item // nobody saw that. You also don't need to return anything cuz its a mutation.
}

const whileAddItem = (array, item) => {
    length = 0;
    while (array[length]) {
        length++;
    }
    array[length] = item;
}

// I'm actually curious if this works LOL.
// run it in node my guy
// It does, wow.
// Its just a more complicated version of the one above lol
// Yeah it's just replacing length with the actual logic to get length.
// My favorite thing of JS is map, though. Or reduce, any of the built in array functions are GREAT.
var cohort = 'Whats up'

// Ok but useless console log if other developers see it
console.log(cohort, 'cohort')


// Much better console log everyone knows who, what, where, and why
console.log("ML LN117 session1.js printing cohort: ", cohort)