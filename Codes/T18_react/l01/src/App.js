import { useEffect, useState } from 'react';
import './App.css';
import { getCourses } from './db/utilities';
import ListCourses from './components/ListCourses';
import FormControlled from './components/FormControlled';
import { Container, Tabs } from 'react-bootstrap';

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
    <Container>
      <Tabs
        activeKey={activeKey}
        transition={false}
        id='noanim-tab-example'
        className='mt-3'
        onSelect={(key) => {
          setActiveKey(key);
        }}
      >
        <Tabs eventKey='home' title='Home'>
          <ListCourses courses={courses} updateCourses={updateCourses} />
        </Tabs>
        <Tabs eventKey='form' title='Form'>
          <FormControlled
            updateCourses={updateCourses}
            setActiveKey={setActiveKey}
          />
        </Tabs>
      </Tabs>
    </Container>
  );
}

export default App;
