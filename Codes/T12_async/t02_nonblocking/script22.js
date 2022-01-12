const clock = document.querySelector('#clock');
const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');

let timer;
btnStart.addEventListener('click', () => {
  // Asynchronous task
  timer = setInterval(() => {
    const date = new Date();
    clock.textContent = date.toLocaleTimeString();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(timer);
});
