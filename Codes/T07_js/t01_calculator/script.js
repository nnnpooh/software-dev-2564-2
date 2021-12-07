let inputText = '';
const input = document.querySelector('.input');
const result = document.querySelector('.result');

const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const bPlus = document.querySelector('#plus');
const bEqual = document.querySelector('#equal');
const bReset = document.querySelector('#reset');
b1.addEventListener('click', click1);
b2.addEventListener('click', click2);
b3.addEventListener('click', click3);
bPlus.addEventListener('click', clickPlus);
bEqual.addEventListener('click', clickEqual);
bReset.addEventListener('click', clickReset);

function click1() {
  inputText += '1';
  input.textContent = inputText;
}
function click2() {
  inputText += '2';
  input.textContent = inputText;
}
function click3() {
  inputText += '3';
  input.textContent = inputText;
}
function clickPlus() {
  inputText += '+';
  input.textContent = inputText;
}
function clickEqual() {
  const evalResult = eval(inputText);
  result.textContent = evalResult;
}

function clickReset() {
  inputText = '';
  input.textContent = '';
  result.textContent = '';
}
