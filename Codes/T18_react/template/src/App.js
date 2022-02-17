import { useEffect, useState } from 'react';
import './App.css';
import { getCourses } from './db/utilities';
import ListCourses from './components/ListCourses';
import FormControlled from './components/FormControlled';
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
      <ListCourses courses={courses} updateCourses={updateCourses} />
      <FormControlled updateCourses={updateCourses} />
    </div>
  );
}

export default App;
