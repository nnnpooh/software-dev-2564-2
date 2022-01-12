const clock = document.querySelector('#clock');
// Asynchronous task
setInterval(() => {
  const date = new Date();
  clock.textContent = date.toLocaleTimeString();
}, 1000);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});
