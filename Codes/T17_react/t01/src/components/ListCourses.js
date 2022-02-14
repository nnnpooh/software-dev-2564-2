import { deleteCourse } from '../db/utilities';

export default function ListCourses({ courses, updateCourses }) {
  function handleClick(number) {
    // console.log(number);
    deleteCourse(number).then(updateCourses());
  }
  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => {
        return (
          <div key={course.name} onClick={() => handleClick(course.number)}>
            {course.number}: {course.name}
          </div>
        );
      })}
    </div>
  );
}
