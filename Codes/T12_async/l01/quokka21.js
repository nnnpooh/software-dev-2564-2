const myPromise = new Promise((resolve, reject) => {
  setTimeout(reject('foo'), 300);
});

// console.log(myPromise)

myPromise
  .then((msg) => {
    console.log('After promise', msg);
    return 'bar';
  })
  .then((msg2) => {
    console.log('After then', msg2);
    return 'you';
  })
  .then((msg3) => {
    console.log('After second then', msg3);
  })
  .catch((err) => {
    console.log('Rejected', err);
  });
