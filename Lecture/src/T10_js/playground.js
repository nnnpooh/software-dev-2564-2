// for (let i = 0; i < 10; i++) {
//   console.log(Math.random());
// }

// const person = {
//   age: 20,
//   weight: 60,
//   height: 170,
// };

// for (const entry of Object.entries(person)) {
//   console.log(entry);
// }

// const numbers = [4, 11, 42, 14, 39];

// const numberFilter = numbers.find((item) => item > 12);

// console.log(numberFilter);
// const foo = ['one', 'two', 'three'];

// const [red, ...rest] = foo;
// console.log(red); // "one"
// console.log(rest); // ["two", "three"]

// const note = {
//   id: 1,
//   title: 'My first note',
//   date: '01/01/1970',
// };

// const { id, ...rest } = note;
// console.log(id);
// console.log(rest);
// const foo() = ['one', 'two', 'three'];

// const [red, ...rest] = foo;
// console.log(red); // "one"
// console.log(rest); // ["two", "three"]

// let a = 1;

// function myFunc(a) {
//   a = 2;
//   console.log(a);
// }

// myFunc(a);

// console.log(a);

let a = [1, 2, 3];

function myFunc(a) {
  let b = a.slice(0);
  b.push(4);
  console.log(b);
}

myFunc(a);

console.log(a);
