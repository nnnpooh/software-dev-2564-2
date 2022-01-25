import { db } from './db';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

function addCourse(id, data) {
  if (id) {
    // Add a new document with a specified id.
    setDoc(doc(db, 'courses', id), data).then(() => {
      console.log(`Successfully add doc ${id}`);
    });
  } else {
    // Add a new document with a generated id.
    addDoc(collection(db, 'courses'), data).then((docRef) => {
      console.log(`Successfully add doc ${docRef.id}`);
    });
  }
}

export { addCourse };
