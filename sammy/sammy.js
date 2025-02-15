console.log('Hello from sammy.js!');

// let name = 'Sammy'; 
// let age = 25;
// const place = 'Pacific Ocean';

// name = 'Sammy the Shark';
// age = 100;

// place = 'Antarctica';

// console.log(name, age);
// console.log(place)

// Data Types
// Primitive Data Types
// // String
// let name = 'Sammy';
// // Number
// let age = 25;
// // Boolean
// let isAdult = true;
// // Null
// let car = null;
// // Undefined
// let test;

// // Non-Primitive Data Types
// // Object
// let person = {
//   name: 'Sammy',
//   age: 25
// };
// // Array
// let colors = ['red', 'blue', 'green'];
// // Function
// function greet() {
//   return 'Hello!';
// }

// //Functions
// // Function Declaration
// function greet() {
//   return 'Hello!';
// }

// // Arrow Function
// const greet = () => {
//   return 'Hello!';
// }

// // Function Expression
// greet()

const greet = () => {
  alert('Hello!');
}

const textElememt = document.querySelector('#text');
const updateButton = document.querySelector('#updateButton');

updateButton.addEventListener('click', ()=>{
    textElememt.textContent='Text has been updated';
    textElememt.style.color = 'yellow';
})