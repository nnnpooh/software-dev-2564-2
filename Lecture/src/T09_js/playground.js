// function operate(a, b, ops) {
//   return ops(a, b);
// }

// Call the function with anonymous function as an argument.
// const result = operate(1, 2, function (a, b) {
//   return a + b;
// });

// const result = operate(1, 2, (a, b) => {
//   return a + b;
// });

// const result = operate(1, 2, (a, b) => a + b);
// const resultWrong = operate(1, 2, (a, b) => {
//   a + b;
// });

// console.log(result);
// console.log(resultWrong);

// function myFunction() {
//   let carName = 'Volvo';
//   // code here CAN use carName
// }

// console.log(carName);

// let carName = 'Volvo';
// // code here can use carName

// function myFunction() {
//   console.log(carName);
// }

// myFunction()

let carName = 'Volvo';

function myFunction() {
  let carName = 'Honda';
  console.log(carName);
}

console.log(carName);
