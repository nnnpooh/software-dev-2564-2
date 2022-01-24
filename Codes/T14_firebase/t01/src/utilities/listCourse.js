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
  const childNodes = element.childNodes;
  console.log(childNodes);
  childNodes.forEach((node) => node.remove());
}

export { listCourse };
