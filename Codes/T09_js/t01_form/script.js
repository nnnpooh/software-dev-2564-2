const form = document.getElementById('form');
btnElement = document.getElementById('btn');
const inputArray = document.querySelectorAll('input');

form.addEventListener('submit', logSubmit);
for (const input of inputArray) {
  const id = input.getAttribute('id');
  const errorElement = document.getElementById(`${id}-error`);
  input.addEventListener('input', (event) =>
    handleChange(event, id, errorElement)
  );
}

function handleChange(event, id, errorElement) {
  const value = event.target.value;
  errorElement.textContent = validateInput(id, value);
  validateAllInputs();
}

function validateInput(id, value) {
  let error = '';
  switch (id) {
    case 'name':
      if (!value) error = 'Name cannot be blank.';
      break;
    case 'email':
      if (!value.includes('@cmu.ac.th')) error = 'Invalid CMU email.';
      break;
    case 'password':
      if (value.length < 6) error = 'Password must be at least 6 characters.';
      break;
    case 'password-confirm':
      const password = document.getElementById('password').value;
      if (value !== password) error = 'Passwords do not match.';
      break;
    default:
      console.log('Unknwon id');
  }
  return error;
}

function validateAllInputs() {
  let pass = true;
  for (const input of inputArray) {
    const id = input.getAttribute('id');
    const value = input.value;
    pass = pass && validateInput(id, value) === '';
  }
  btnElement.disabled = !pass;
}

function logSubmit(event) {
  event.preventDefault();
  let output = '';
  const formElements = event.target;
  for (const formElement of formElements) {
    const id = formElement.getAttribute('id');
    if (id !== 'btn') {
      output += `${id} : ${formElement.value} \n`;
    }
  }

  alert(output);

  for (const input of inputArray) {
    input.value = '';
  }
  btn.disabled = true;
}
