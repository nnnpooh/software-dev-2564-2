let inputText = '';
const input = document.querySelector('.input');
const result = document.querySelector('.result');

const bEqual = document.querySelector('#equal');
const bDelete = document.querySelector('#delete');
const bReset = document.querySelector('#reset');
const btnArray = document.querySelectorAll('.btn.num-op');

for (const btn of btnArray) {
  const id = btn.getAttribute('id');
  btn.addEventListener('click', handleClick);
}

bEqual.addEventListener('click', clickEqual);
bDelete.addEventListener('click', clickDelete);
bReset.addEventListener('click', clickReset);

function handleClick(e) {
  const id = e.target.getAttribute('id');
  inputText += id.slice(1);
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
