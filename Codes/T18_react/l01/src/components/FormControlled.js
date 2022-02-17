import { useState } from 'react';
import { addCourse } from '../db/utilities';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function FormControlled({ updateCourses, setActiveKey }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      number,
    };
    addCourse(number, data)
      .then(updateCourses())
      .then(() => setActiveKey('home'));
    setName('');
    setNumber('');
  }

  const dirty = name && number;

  return (
    <div>
      <h1 className='display-5'>Form</h1>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={12} md={6}>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='name'>Name</Form.Label>
              <Form.Control
                type='text'
                id='name'
                value={name}
                placeholder='Enter class number'
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
                placeholder='Enter class name'
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
