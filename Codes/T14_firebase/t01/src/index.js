import { listCourse } from './utilities/listCourse';
import { addCourse } from './utilities/addCourse';
import { deleteCourse } from './utilities/deleteCourse';
import { updateCourse } from './utilities/updateCourse';
const ul = document.querySelector('ul');
const form = document.querySelector('#form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
  console.log(e.target.name.value);
  console.log(e.target.number.value);
  const id = e.target.number.value;
  const name = e.target.name.value;
  const number = e.target.number.value;

  addCourse(id, { name, number });
  listCourse(ul);

  e.target.name.value = '';
  e.target.number.value = null;
}

// addCourse('', data1);
// addCourse('', data2);
// addCourse('', data3);

listCourse(ul);
