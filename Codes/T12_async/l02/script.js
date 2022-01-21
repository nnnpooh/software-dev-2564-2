const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
fetch('https://swapi.dev/api/people/3')
  .then((res) => res.json())
  .then((data) => {
    p1.textContent = JSON.stringify(data);
    return fetch(data.homeworld);
  })
  .then((res) => res.json())
  .then((data) => {
    p2.textContent = JSON.stringify(data);
  })
  .catch((err) => {
    p1.textContent = err;
  });
