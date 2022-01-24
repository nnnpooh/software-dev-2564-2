import { db } from './db';
import { doc, deleteDoc } from 'firebase/firestore';

function deleteCourse(id) {
  deleteDoc(doc(db, 'courses', id)).then(() => {
    console.log(`Successfully delete doc ${id}`);
  });
}

export { deleteCourse };
