import { db } from './db';

// List data

// import { collection, getDocFromServer, getDocs } from 'firebase/firestore';
// getDocs(collection(db, 'courses')).then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, doc.data());
//   });
// });

// Add document with ID

// import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

// const id = '255219';
// const data = {
//   name: 'Production support',
//   number: id,
// };

// setDoc(doc(db, 'courses', id), data).then(() => {
//   console.log(`Successfully add doc id: ${id}.`);
// });

// Add doc with auto-generated ID
// import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

// const id = '255219';
// const data = {
//   name: 'Production support',
//   number: id,
// };

// addDoc(collection(db, 'courses'), data).then((docRef) => {
//   console.log(`Successfully add doc id: ${docRef.id}.`);
// });

// Delete document
// import { doc, deleteDoc } from 'firebase/firestore';
// const id = 'w7DLgweSS8jsd8RU7DBx';

// deleteDoc(doc(db, 'courses', id)).then(() => {
//   console.log(`Successfully delete doc id: ${id}.`);
// });

// Update document

// import { setDoc, doc } from 'firebase/firestore';

// const id = '25511434343';

// const data = {
//   name: 'OR2',
//   semester: '2564-2',
// };

// setDoc(doc(db, 'courses', id), data, { merge: true }).then(() => {
//   console.log(`Successfully update doc id: ${id}.`);
// });
