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

// let carName = 'Volvo';

// function myFunction() {
//   let carName = 'Honda';
//   console.log(carName);
// }

// console.log(carName);

// let choice = 'A'; // 'A', 'B', 'C'

// if (choice === 'A') {
//   console.log('You chose A.');
// } else if (choice === 'B') {
//   console.log('You chose B.');
// } else if (choice === 'C') {
//   console.log('You chose C.');
// } else {
//   console.log('Unknown Choice');
// }

// function absolute(number) {
//   if (!number) return -1; // Error code
//   return Math.abs(number);
// }

// console.log(absolute(-2));
// console.log(absolute(null));
// console.log(absolute(undefined));

// let choice = 'A';
// let score;
// switch (choice) {
//   case 'A':
//     score = 10;
//     break;
//   case 'B':
//     score = 5;
//     break;
//   case 'C':
//     score = 1;
//     break;
//   default:
//     score = 0;
//     break;
// }

// console.log(score);

// let choice = 'A';

// let mapping = {
//   A: 10,
//   B: 5,
//   C: 1,
// };

// result = mapping[choice] ? mapping[choice] : 0;

// console.log(result);

let loading = true;

loading ? console.log('Loading...') : console.log('Done!');
