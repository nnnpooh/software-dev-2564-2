const form = document.getElementById('form');

form.addEventListener('submit', logSubmit);

function logSubmit(event) {
  event.preventDefault();
  console.log('Form submitted');
}
