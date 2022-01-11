const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function clickHandler() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', clickHandler);

function doubleClickHandler() {
  alert('Reset to white');
  document.body.style.backgroundColor = 'white';
}

btn.addEventListener('dblclick', doubleClickHandler);

btn.removeEventListener('dblclick', doubleClickHandler);

el = document.body;
document.body.addEventListener('mousemove', (e) => {
  console.log(e);
});
