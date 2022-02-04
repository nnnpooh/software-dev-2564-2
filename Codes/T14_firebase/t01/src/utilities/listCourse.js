import { db } from './db';
import { collection, getDocs } from 'firebase/firestore';
import { deleteCourse } from './deleteCourse';
function listCourse(ul) {
  deleteChildNodes(ul);

  getDocs(collection(db, 'courses')).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
      const id = doc.id;
      const data = doc.data();
      const li = document.createElement('li');
      li.textContent = `${data.number}:  ${data.name}`;

      li.addEventListener('click', () => {
        deleteCourse(id);
        listCourse(ul);
      });

      ul.appendChild(li);
    });
  });
}

function deleteChildNodes(element) {
  // This does not work because the iterator can skip.
  // see https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript#comment68491775_40606838
  // const childNodes = element.childNodes;
  // console.log(childNodes);
  // childNodes.forEach((node) => node.remove());

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export { listCourse };
