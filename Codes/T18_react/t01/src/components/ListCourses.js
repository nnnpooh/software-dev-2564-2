import { deleteCourse } from '../db/utilities';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
export default function ListCourses({ courses, updateCourses }) {
  function handleClick(number) {
    // console.log(number);
    deleteCourse(number).then(updateCourses());
  }
  return (
    <div>
      <p className='fs-1 fw-bold'>Courses</p>
      <ListGroup>
        {courses.map((course) => {
          return (
            <ListGroup.Item
              key={course.name}
              onClick={() => handleClick(course.number)}
              style={{ cursor: 'pointer' }}
            >
              <Badge bg='secondary'>{course.number}</Badge> {course.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
