const div = document.querySelector('div');

div.addEventListener('mousemove', onMouseMove);

function onMouseMove(e) {
  // console.log(e);
  console.log(e.offsetX, e.offsetY);
  div.innerText = `${e.offsetX}, ${e.offsetY}`;
  div.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${
    (e.offsetX + e.offsetY) / 2
  })`;
}
