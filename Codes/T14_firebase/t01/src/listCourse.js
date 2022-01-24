import { db } from './db';
import { collection, getDocs } from 'firebase/firestore';

function listCourse(ul) {
  getDocs(collection(db, 'courses')).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
      const data = doc.data();
      const li = document.createElement('li');
      li.textContent = `Name: ${data.name} number: ${data.number}`;
      ul.appendChild(li);
    });
  });
}

export { listCourse };
