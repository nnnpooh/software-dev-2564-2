import { useState } from 'react';
import { addCourse } from '../db/utilities';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function FormControlled({ updateCourses, setActiveKey }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      number,
    };
    addCourse(number, data).then(() => {
      updateCourses();
      setActiveKey('home');
    });

    setName('');
    setNumber('');
  }

  const dirty = name && number;

  return (
    <div>
      <p className='fs-1 fw-bold'>Form</p>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={12} md={6}>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='name'>Name</Form.Label>
              <Form.Control
                type='text'
                id='name'
                placeholder='enter class name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col sm={12} md={6}>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='number'>Number</Form.Label>
              <Form.Control
                type='number'
                id='number'
                value={number}
                placeholder='enter class number'
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button type='submit' disabled={!dirty}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
