const clock = document.querySelector('#clock');
const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
let timer;

btnStart.addEventListener('click', () => {
  timer = setInterval(() => {
    const date = new Date();
    clock.textContent = date.toLocaleTimeString();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(timer);
});

const btn = document.querySelector('#click-me');
btn.addEventListener('click', () => {
  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});
