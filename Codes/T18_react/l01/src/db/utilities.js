import { db } from './db';
import { collection, getDocs } from 'firebase/firestore';
import { setDoc, doc } from 'firebase/firestore';
import { deleteDoc } from 'firebase/firestore';

export function addCourse(id, data) {
  return setDoc(doc(db, 'courses', id), data).then(() => {
    console.log(`Successfully add doc id: ${id}.`);
  });
}

export function getCourses() {
  return getDocs(collection(db, 'courses')).then((querySnapshot) => {
    const courses = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      courses.push(data);
    });
    return courses;
  });
}

export function deleteCourse(number) {
  return deleteDoc(doc(db, 'courses', number)).then(() => {
    console.log(`Successfully delete doc id: ${number}`);
  });
}
