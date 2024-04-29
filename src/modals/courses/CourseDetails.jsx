import React from 'react';
import PropTypes from 'prop-types';
import './CourseDetails.scss';

const CourseDetails = ({ course }) => {
  return (
    <div className="course-details">
      <h2>Course Details</h2>
      <div className="detail-item">
        <span className="label">Course Name:</span>
        {/* <span className="value">{course.courseId.name}</span> */}
        <span className="value">hihi</span>
      </div>
      <div className="detail-item">
        <span className="label">Major:</span>
        {/* <span className="value">{course.major.name}</span> */}
      </div>
      <div className="detail-item">
        <span className="label">Instructor:</span>
        {/* <span className="value">{course.instructor}</span> */}
      </div>
      <div className="detail-item">
        <span className="label">Max Students:</span>
        {/* <span className="value">{course.maxStudents}</span> */}
      </div>
      <div className="detail-item">
        <span className="label">Class Schedule:</span>
        {/* <span className="value">{`Weekday: ${course.classSchedule.weekDay}, Start: ${course.classSchedule.start}, End: ${course.classSchedule.end}`}</span> */}
      </div>
      <div className="detail-item">
        <span className="label">Room:</span>
        {/* <span className="value">{course.room}</span> */}
      </div>
    </div>
  );
};

CourseDetails.propTypes = {
  course: PropTypes.object.isRequired,
};

export default CourseDetails;
