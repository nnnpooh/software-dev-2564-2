/* // document object
console.log(document.childNodes);

// html
const html = document.childNodes[1];
console.log(html);

// head, body, text nodex
console.log(html.childNodes);
const head = html.childNodes[0];
const body = html.childNodes[2];
console.log(head);
console.log(body);

// #div1
console.log(body.childNodes);
const div1 = body.childNodes[3];
console.log(div1);

// We can change the text of #div1
div1.childNodes[0].textContent = 'Changed';

// Note that this is different from
// div1.textContent = 'Changed'; */

//-----------------------------------//
// const div = document.querySelector('div');
// const divs = document.querySelectorAll('div');
// console.log(div);
// console.log(divs);
//-----------------------------------//

//-----------------------------------//
// const div1 = document.querySelector('#div1');
// const para = document.createElement('p');
// para.innerText = 'New Text!';
// div1.appendChild(para);
//-----------------------------------//

//-----------------------------------//
// const div1 = document.querySelector('#div1');
// div1.remove();
//-----------------------------------//

// const div1 = document.querySelector('#div1');
// div1.innerText = 'New Text!';
// div1.textContent = 'New Text!';
// div1.innerHTML = '<p>New Text!</p>';

// const div1 = document.querySelector('#div1');
// console.dir(div1.style);
// div1.style.backgroundColor = 'red';

// const div1 = document.querySelector('#div1');
// btn = document.createElement('button');
// btn.textContent = 'Click Me';
// div1.appendChild(btn);

// btn.setAttribute('disabled', null);
// btn.removeAttribute('disabled');

// btn.setAttribute('id', 'btnId');
// const btnId = btn.getAttribute('id');
// console.log(btnId);
