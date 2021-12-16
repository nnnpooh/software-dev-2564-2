let inputText = '';
const btnRegularMap = {
  b1: '1',
  b2: '2',
  b3: '3',
  b4: '4',
  b5: '5',
  b6: '6',
  b7: '7',
  b8: '8',
  b9: '9',
  b0: '0',
  'b-plus': '+',
  'b-minus': '-',
  'b-multiply': '*',
  'b-divide': '/',
};

const btnCommandMap = {
  'b-equal': clickEqual,
  'b-delete': clickDelete,
  'b-reset': clickReset,
};

const input = document.querySelector('.input');
const result = document.querySelector('.result');
const btnNumOpArray = document.querySelectorAll('.btn.regular');
const btnCommandArray = document.querySelectorAll('.btn.command');

for (const btn of btnNumOpArray) {
  const id = btn.getAttribute('id');
  btn.addEventListener('click', handleClick);
}

for (const btn of btnCommandArray) {
  const id = btn.getAttribute('id');
  btn.addEventListener('click', btnCommandMap[id]);
}

function handleClick(e) {
  const id = e.target.getAttribute('id');
  inputText += btnRegularMap[id];
  input.textContent = inputText;
}

function clickEqual() {
  try {
    const evalResult = eval(inputText);
    result.textContent = evalResult;
  } catch {
    result.textContent = 'NaN';
  }
}

function clickDelete() {
  inputText = inputText.slice(0, -1);
  input.textContent = inputText;
  result.textContent = '';
}

function clickReset() {
  inputText = '';
  input.textContent = inputText;
  result.textContent = '';
}
