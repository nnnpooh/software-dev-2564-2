import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import FormControlled from './components/FormControlled';
import { getCourses } from './db/utilities';
import ListCourses from './components/ListCourses';

function App() {
  const [courses, setCourses] = useState([]);

  function updateCourses() {
    getCourses().then((courses) => setCourses(courses));
  }

  useEffect(() => {
    updateCourses();
  }, []);

  return (
    <div className='App'>
      <h1>Courses</h1>
      <ListCourses courses={courses} updateCourses={updateCourses} />
      <h1>Form</h1>
      <FormControlled updateCourses={updateCourses} />
    </div>
  );
}

export default App;
