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

// let a = [1, 2, 3];

// function myFunc(a) {
//   let b = a.slice(0);
//   b.push(4);
//   console.log(b);
// }

// myFunc(a);

// console.log(a);

// const names = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// const nameModified = names.map((name) => 'This is ' + name + '.');

// console.log(nameModified)

// const note = {
//   id: 1,
//   title: 'My first note',
//   date: '01/01/1970',
// };
// // Destructure properties into variables
// const { id, title, date } = note;

// console.log(id);
// console.log(title);
// console.log(date);

// const tools = ['hammer', 'screwdriver'];
// const otherTools = ['wrench', 'saw'];

// // Concatenate tools and otherTools together
// const allTools1 = tools.concat(otherTools);

// // Unpack the tools Array into the allTools Array
// const allTools2 = [...tools, ...otherTools];

// console.log(allTools1, allTools2);

// const user = {
//   id: 3,
//   name: 'Ron',
// };
// const updatedUser = { ...user, isLoggedIn: true };

// console.log(updatedUser);

// function multiply(a, b, c) {
//   return a * b * c;
// }

// const numbers = [1, 2, 3];

// console.log(multiply(...numbers));

// function restTest(...args) {
//   console.log(args);
// }

// restTest(1, 2, 3, 4, 5, 6);

a = { a: 1, b: 2 };
