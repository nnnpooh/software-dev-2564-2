const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 3003);
});

myPromise
  .then((msg) => {
    console.log(msg);
    return myPromise;
  })
  .then((msg) => console.log(msg));
