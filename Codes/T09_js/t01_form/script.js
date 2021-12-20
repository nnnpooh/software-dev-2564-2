const form = document.getElementById('form');
const inputArray = document.querySelectorAll('input');

form.addEventListener('submit', logSubmit);
for (const input of inputArray) {
  const id = input.getAttribute('id');
  const error = document.getElementById(`${id}-error`);
  input.addEventListener('input', (event) => handleChange(event, id, error));
}

function handleChange(event, id, error) {
  error.textContent = '';
  const inputValue = event.target.value;
  switch (id) {
    case 'name':
      if (!inputValue) error.textContent = 'Name cannot be blank.';
      break;
    case 'email':
      if (!inputValue.includes('@cmu.ac.th'))
        error.textContent = 'Invalid CMU email.';
      break;
    case 'password':
      if (inputValue.length < 6)
        error.textContent = 'Password must be at least 6 characters.';
      break;
    case 'password-confirm':
      const password = document.getElementById('password').value;
      if (inputValue !== password)
        error.textContent = 'Passwords do not match.';
  }
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
}
