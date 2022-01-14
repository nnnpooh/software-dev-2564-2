// const p1 = document.querySelector('#p1');

// fetch('https://swapi.dev/api/people/1')
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(JSON.stringify(data));
//     p1.textContent = JSON.stringify(data);
//   });

//-----------------------------------------------
// const p1 = document.querySelector('#p1');

// fetch('https://swapi.dev/api/people/random_stuff')
//   .then((res) => res.json())
//   .then((data) => {
//     p1.textContent = JSON.stringify(data);
//   })
//   .catch((err) => {
//     p1.textContent = err;
//   });
//-----------------------------------------------

// const p1 = document.querySelector('#p1');
// const p2 = document.querySelector('#p2');
//
// fetch('https://swapi.dev/api/people/1')
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     p1.textContent = JSON.stringify(data);
//     return fetch(data.homeworld);
//   })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     p2.textContent = JSON.stringify(data);
//   });
//-----------------------------------------------

// const ul = document.querySelector('ul');

// fetch1 = fetch('https://swapi.dev/api/people/1');
// fetch2 = fetch('https://swapi.dev/api/people/2');
// fetch3 = fetch('https://swapi.dev/api/people/3');
// fetch4 = fetch('https://swapi.dev/api/people/4');

// Promise.all([fetch1, fetch2, fetch3, fetch4])
//   .then((responses) => {
//     return responses.map((response) => response.json());
//   })
//   .then((array) => {
//     array.forEach((el) => {
//       el.then((data) => {
//         const li = document.createElement('li');
//         li.textContent = JSON.stringify(data);
//         ul.appendChild(li);
//       });
//     });
//   });
//-----------------------------------------------

// const p1 = document.querySelector('#p1');

// async function getData(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   p1.textContent = JSON.stringify(data);
// }

// getData('https://swapi.dev/api/people/1');

// const p1 = document.querySelector('#p1');

// async function getData(url) {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     p1.textContent = JSON.stringify(data);
//   } catch (err) {
//     p1.textContent = JSON.stringify(err);
//   }
// }

// getData('https://swapi.dev/api/people/random_staff');
//-----------------------------------------------

// const ul = document.querySelector('ul');

// const urls = [
//   'https://swapi.dev/api/people/1',
//   'https://swapi.dev/api/people/2',
//   'https://swapi.dev/api/people/3',
//   'https://swapi.dev/api/people/4',
// ];

// async function getData(urls) {
//   for (const url of urls) {
//     const res = await fetch(url);
//     const data = await res.json();
//     const li = document.createElement('li');
//     li.textContent = JSON.stringify(data);
//     ul.appendChild(li);
//   }
// }

// getData(urls);
//-----------------------------------------------

// const ul = document.querySelector('ul');

// const urls = [
//   'https://swapi.dev/api/people/1',
//   'https://swapi.dev/api/people/2',
//   'https://swapi.dev/api/people/3',
//   'https://swapi.dev/api/people/4',
// ];

// async function getData(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   const li = document.createElement('li');
//   li.textContent = JSON.stringify(data);
//   ul.appendChild(li);
// }

// urls.forEach((url) => getData(url));
