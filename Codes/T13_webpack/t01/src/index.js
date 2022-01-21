import { data } from 'lib/utilities';

const pEle = document.createElement('p');

pEle.textContent = 'This is a text!';

document.body.appendChild(pEle);

console.log({ data });
