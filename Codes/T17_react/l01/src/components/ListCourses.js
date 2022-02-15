import { deleteCourse } from '../db/utilities';

export default function ListCourses({ courses, updateCourses }) {
  function handleClick(number) {
    deleteCourse(number).then(() => updateCourses());
  }

  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.number} onClick={() => handleClick(course.number)}>
            {course.number}: {course.name}
          </div>
        );
      })}
    </div>
  );
}
