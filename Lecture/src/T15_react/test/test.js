const ul = document.createElement('ul');
for (let i = 1; i < 4; i++) {
  const li = document.createElement('li');
  li.textContent = `List ${i}`;
  ul.appendChild(li);
}
document.body.appendChild(ul);
