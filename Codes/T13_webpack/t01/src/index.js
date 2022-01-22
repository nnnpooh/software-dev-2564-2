import { data } from './lib/utilities'; // Or import { data } from 'lib/utilities';
import './style.css'; // Or import './style.css';

import Icon from './assets/icon.png'; // Or import Icon from 'assets/icon.png';

const pEle = document.createElement('p');
pEle.textContent = 'This is a text!';
document.body.appendChild(pEle);

console.log({ data });

pEle.classList.add('hello');

const myIcon = new Image(200);
myIcon.src = Icon;

document.body.appendChild(myIcon);
