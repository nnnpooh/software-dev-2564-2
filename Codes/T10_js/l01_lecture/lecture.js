let a = [1, 2, 3];

function myFunc(a) {
  let b = [...a];
  b.push(4);
  console.log(b);
}

myFunc(a);
console.log(a);
