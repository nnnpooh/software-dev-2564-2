// const formElement = document.querySelector('form');
// const divElement = document.querySelector('div');
// const pElement = document.querySelector('p');

// formElement.addEventListener('click', () => handleClick('form'));
// divElement.addEventListener('click', () => handleClick('div'));
// pElement.addEventListener('click', () => handleClick('p'));

// function handleClick(msg) {
//   alert(`Click: "${msg}"`);
// }

// const formElement = document.querySelector('form');
// const divElement = document.querySelector('div');
// const pElement = document.querySelector('p');

// formElement.addEventListener('click', (e) => handleClick(e, 'form'));
// divElement.addEventListener('click', (e) => handleClick(e, 'div'));
// pElement.addEventListener('click', (e) => handleClick(e, 'p'));

// function handleClick(e, msg) {
//   const id = e.target.getAttribute('id');
//   alert(`Click: "${msg}",  Event.target: "${id}"`);
// }

const formElement = document.querySelector('form');
const divElement = document.querySelector('div');
const pElement = document.querySelector('p');

formElement.addEventListener('click', (e) => handleClick(e, 'form'));
divElement.addEventListener('click', (e) => handleClick(e, 'div'));
pElement.addEventListener('click', (e) => handleClick(e, 'p'));

function handleClick(e, msg) {
  const id = e.target.getAttribute('id');
  e.stopPropagation();
  alert(`Click: "${msg}",  Event.target: "${id}"`);
}
