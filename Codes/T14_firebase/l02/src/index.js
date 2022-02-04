import { db } from './db';
import { collection, getDocs } from 'firebase/firestore';
import { setDoc, doc } from 'firebase/firestore';
import { deleteDoc } from 'firebase/firestore';

const ul = document.querySelector('ul');
listCourse(ul);
const form = document.querySelector('#form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  // console.log(e);
  const courseName = e.target.name.value;
  const courseNumber = e.target.number.value;
  const id = courseNumber;
  const data = {
    name: courseName,
    number: courseNumber,
  };
  // Add data to database
  addCourse(id, data);

  // Clear form
  e.target.name.value = '';
  e.target.number.value = null;
}

function addCourse(id, data) {
  setDoc(doc(db, 'courses', id), data).then(() => {
    console.log(`Successfully add doc id: ${id}.`);
    listCourse(ul);
  });
}

function listCourse(ul) {
  // Delete existing list
  deleteChildNodes(ul);

  // Add data to list
  getDocs(collection(db, 'courses')).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      // console.log({ id, data });
      const li = document.createElement('li');
      li.textContent = `${data.number}: ${data.name}`;

      li.addEventListener('click', () => {
        // Delete this course and update
        deleteCourse(id, ul);
      });

      ul.appendChild(li);
    });
  });
}

function deleteCourse(id, ul) {
  deleteDoc(doc(db, 'courses', id)).then(() => {
    console.log(`Successfully delete doc id: ${id}`);
    listCourse(ul);
  });
}

function deleteChildNodes(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  // Do not use this method.
  //   const childNodes = element.childNodes;
  //   childNodes.forEach((node) => node.remove());
}
