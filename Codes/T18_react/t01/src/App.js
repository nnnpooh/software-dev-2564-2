import { useEffect, useState } from 'react';
import './App.css';
import { getCourses } from './db/utilities';
import ListCourses from './components/ListCourses';
import FormControlled from './components/FormControlled';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
function App() {
  const [courses, setCourses] = useState([]);
  const [activeKey, setActiveKey] = useState('home');

  function updateCourses() {
    getCourses().then((courses) => setCourses(courses));
  }

  useEffect(() => {
    updateCourses();
  }, []);

  return (
    <div className='App'>
      <Container>
        <Tabs
          activeKey={activeKey}
          onSelect={(k) => setActiveKey(k)}
          className='mt-3'
        >
          <Tabs eventKey='home' title='Home'>
            <ListCourses courses={courses} updateCourses={updateCourses} />
          </Tabs>

          <Tabs eventKey='add-course' title='Add Course'>
            <FormControlled
              updateCourses={updateCourses}
              setActiveKey={setActiveKey}
            />
          </Tabs>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;
