// // {
// //     let message = "안녕하세요";
// //     console.log(message);
// // }

// // console.log(message);

// // {
// //     let message = "안녕하세요.";
// //     console.log(message);
// // }

// // {
// //     let message = "안녕하세여.";
// //     console.log(message);
// // }

// function sayHiBye(firstName, lastName) {
//     return function getFullName() {
//         return firstName + " " + lastName;
//     };
// }

// console.log(sayHiBye("dooru", "I"));

// function makeCounter() {
//     let count = 0;

//     return function () {
//         return count++;
//     };
// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// function f() {
//     let value = Math.random();

//     return value;
// }

// let arr = [f(), f(), f()];

// let [index1, index2, index3] = arr;

// console.log(index1);
// console.log(index2);
// console.log(index3);

let name = "John";

function sayHi() {
    console.log(`Hi, ${name}`);
}
sayHi();

name = "pete";
