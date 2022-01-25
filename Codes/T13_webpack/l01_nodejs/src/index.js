import { data, getMessage } from './lib/utilities';
import './style.css';

const div = document.createElement('div');
const p1 = document.createElement('p');
p1.textContent = 'Hello from Webpack.';
div.appendChild(p1);
document.body.append(div);

const p2 = document.createElement('p');
p2.textContent = getMessage();
div.appendChild(p2);

div.classList.add('main');
console.log(data);
