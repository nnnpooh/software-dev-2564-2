import { useState } from 'react';
import { addCourse } from '../db/utilities';

export default function FormControlled({ updateCourses }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: name,
      number: number,
    };
    console.log(data);
    // Send data to firebase
    addCourse(number, data).then(() => {
      updateCourses();
    });
    setName('');
    setNumber('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          ></input>
        </div>
        <div>
          <label htmlFor='number'>Number</label>
          <input
            type='number'
            id='number'
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            value={number}
          ></input>
        </div>
        <button type='submit'>Submit</button>
      </form>

      <p>{name}</p>
      <p>{number}</p>
    </div>
  );
}
