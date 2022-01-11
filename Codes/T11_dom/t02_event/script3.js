const divs = document.querySelectorAll('div');

divs.forEach((div) => {
  div.addEventListener('mousemove', handler);
});

function handler(e) {
  e.target.innerText = `${e.offsetX}, ${e.offsetY}`;
  e.target.style.color = 'white';
  e.target.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${
    (e.offsetX + e.offsetY) / 2
  })`;
}
