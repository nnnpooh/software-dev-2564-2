const p1 = document.querySelector('#p1');

// fetch('https://swapi.dev/api/people/1')
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(JSON.stringify(data));
//     p1.textContent = JSON.stringify(data);
//   });

const url = 'https://swapi.dev/api/people/1';

async function getData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    p1.textContent = JSON.stringify(data);
  } catch (err) {
    p1.textContent = 'Error Loading Message';
  }
}

getData(url);
