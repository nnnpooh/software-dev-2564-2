const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('data');
    // reject('Error Message');
  }, 300);
});

// myPromise
//   .then((msg) => {
//     console.log('First Then', msg);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Another data from Promise');
//       }, 1000);
//     });
//   })
//   .then((msg2) => {
//     console.log('Second Then', msg2);
//   })
//   .catch((err) => {
//     console.log('Error: ', err);
//   });

myPromise
  .then((msg) => {
    console.log(msg);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('bar');
      }, 3000);
    });
  })
  .then((msg) => {
    console.log(msg);
  });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 2000);
// });

// myPromise
//   .then((msg) => {
//     console.log(msg);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('bar');
//       }, 4000);
//     });
//   })
//   .then((msg) => {
//     console.log(msg);
//   });
