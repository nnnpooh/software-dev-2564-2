// const result = fetch('https://swapi.dev/api/people/1');
// console.log(result);

// const a = new Promise(() => {});
// const b = Promise.resolve();
// const b = Promise.resolve('I waited.');
// const c = Promise.reject();
// const c = Promise.reject('Wrong');

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('foo');
//   }, 5000);
// });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 3000);
// });

// myPromise
//   .then((msg) => {
//     console.log(msg);
//     return 'bar';
//   })
//   .then((msg) => console.log(msg));

// myPromise
//   .then((msg) => {
//     console.log(msg);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('bar');
//       }, 3000);
//     });
//   })
//   .then((msg) => console.log(msg));

// function wait(msg, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(msg), time);
//   });
// }

// wait('First', 1000)
//   .then((msg) => {
//     console.log(msg);
//     return wait('Second', 2000);
//   })
//   .then((msg) => {
//     console.log(msg);
//     return wait('Third', 3000);
//   })
//   .then((msg) => {
//     console.log(msg);
//     return wait('Fourth', 4000);
//   })
//   .then((msg) => {
//     console.log(msg);
//   });
