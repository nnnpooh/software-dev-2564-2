import { deleteCourse } from '../db/utilities';
import { ListGroup, Badge } from 'react-bootstrap';

export default function ListCourses({ courses, updateCourses }) {
  function handleClick(number) {
    // console.log(number);
    deleteCourse(number).then(updateCourses());
  }
  return (
    <div>
      <h1 className='display-5'>Courses</h1>
      <ListGroup>
        {courses.map((course) => {
          return (
            <ListGroup.Item
              key={course.name}
              onClick={() => handleClick(course.number)}
              style={{ cursor: 'pointer' }}
            >
              <Badge bg='info'>{course.number}</Badge> {course.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
