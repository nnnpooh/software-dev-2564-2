import { db } from './db';
import { setDoc, doc } from 'firebase/firestore';

function updateCourse(id, data) {
  setDoc(doc(db, 'courses', id), data, { merge: true }).then(() => {
    console.log(`Successfully update doc ${id}`);
  });
}

export { updateCourse };
