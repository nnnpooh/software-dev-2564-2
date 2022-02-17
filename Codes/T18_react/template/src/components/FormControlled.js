import { useState } from 'react';
import { addCourse } from '../db/utilities';

export default function FormControlled({ updateCourses }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      number,
    };
    addCourse(number, data).then(updateCourses());
    setName('');
    setNumber('');
  }

  const dirty = name && number;

  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='number'>Number</label>
        <input
          type='number'
          id='number'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type='submit' disabled={!dirty}>
          Submit
        </button>
      </form>
      <p>{name}</p>
      <p>{number}</p>
    </div>
  );
}
