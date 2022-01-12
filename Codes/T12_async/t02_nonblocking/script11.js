const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  // Asynchronous task
  setTimeout(() => alert('I waited.'), 3000);

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});
