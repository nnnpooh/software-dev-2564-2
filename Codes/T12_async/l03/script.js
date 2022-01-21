const ul = document.querySelector('ul');

fetch1 = fetch('https://swapi.dev/api/people/1');
fetch2 = fetch('https://swapi.dev/api/people/2');
fetch3 = fetch('https://swapi.dev/api/people/3');
fetch4 = fetch('https://swapi.dev/api/people/4');

Promise.all([fetch1, fetch2, fetch3, fetch4])
  .then((responses) => {
    return responses.map((response) => response.json());
  })
  .then((array) => {
    array.forEach((el) => {
      el.then((data) => {
        const li = document.createElement('li');
        li.textContent = JSON.stringify(data);
        ul.append(li);
      });
    });
  });
