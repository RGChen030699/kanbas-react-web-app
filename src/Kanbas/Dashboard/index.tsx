import React, { useEffect, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchEnrollments } from './client';
import { RootState } from '../store';
import { AppDispatch } from '../store';
import { DashboardCourse } from "./DashboardTypes";
import '../styles.css';

interface DashboardProps {
  courses: DashboardCourse[] | null;
  allCourses: DashboardCourse[] | null;
  course: DashboardCourse;
  setCourse: (course: DashboardCourse) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: Dispatch<SetStateAction<boolean>>;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}

export default function Dashboard({
  course,
  courses,
  allCourses,
  enrolling,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  setEnrolling,
  updateEnrollment
}: DashboardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  useEffect(() => {
    if (Array.isArray(allCourses)) {
      const coursesToCheck = allCourses;
      coursesToCheck.forEach((course) => {
        dispatch(fetchEnrollments(course._id));
      });
    }
  }, [dispatch, allCourses]);

  const handleCourseClick = (courseId: string, event: React.MouseEvent) => {
    if (currentUser.role === 'STUDENT' && !enrolledCourses.some(c => c?._id === courseId)) {
      event.preventDefault();
      return;
    }
  };

  const enrolledCourses = (courses || []).filter(course => course?._id);
  const availableCourses = (Array.isArray(allCourses) ? allCourses : [])
    .filter(course => course?._id && !enrolledCourses.some(enrolled => enrolled._id === course._id));

  const displayedCourses = currentUser.role === 'FACULTY'
    ? (Array.isArray(allCourses) ? allCourses : [])
    : (enrolling ? availableCourses : enrolledCourses);

  const allCoursesCount = Array.isArray(allCourses) ? allCourses.length : 0;
  const availableCoursesCount = availableCourses.length;
  const enrolledCoursesCount = enrolledCourses.length;

  return (
    <div id="wd-dashboard" className="p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser.role === 'STUDENT' && (
          <button
            className="btn btn-primary"
            onClick={() => setEnrolling(!enrolling)}
          >
            {enrolling ? "My Courses" : "All Courses"}
          </button>
        )}
      </div>
      <hr />

      {currentUser.role === 'FACULTY' && (
        <>
          <h5>New Course</h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />
          <input
            value={course.number}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
            placeholder="Course Number"
          />
          <textarea
            value={course.description}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            placeholder="Course Description"
          />
          <div className="d-flex gap-2">
            <button
              className="btn btn-success mb-4"
              onClick={course._id ? updateCourse : addNewCourse}
            >
              {course._id ? "Done" : "Add Course"}
            </button>
            {course._id && (
              <button
                className="btn btn-danger mb-4"
                onClick={() => setCourse({
                  _id: "",
                  name: "",
                  number: "",
                  description: ""
                })}
              >
                Cancel
              </button>
            )}
          </div>
          <hr />
        </>
      )}

      <h2>
        {currentUser.role === 'FACULTY'
          ? `Available Courses (${allCoursesCount})`
          : (enrolling
            ? `Available Courses (${availableCoursesCount})`
            : `My Courses (${enrolledCoursesCount})`
          )
        }
      </h2>
      <hr />

      <div className="row row-cols-1 row-cols-md-5 g-4">
        {displayedCourses.map((course) => (
          <div key={course._id} className="col" style={{ width: '300px' }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="text-decoration-none text-dark"
                to={`/Kanbas/Courses/${course._id}/Home`}
                onClick={(e) => handleCourseClick(course._id, e)}
              >
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">{course.description}</p>

                  {currentUser.role === 'STUDENT' && (
                    <button
                      className={`btn ${enrolledCourses.some(c => c._id === course._id) ? 'btn-danger' : 'btn-success'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        updateEnrollment(course._id, !enrolledCourses.some(c => c._id === course._id));
                      }}
                    >
                      {enrolledCourses.some(c => c._id === course._id) ? 'Unenroll' : 'Enroll'}
                    </button>
                  )}
                  {currentUser.role === 'FACULTY' && (
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="btn btn-primary"
                      >
                        Go
                      </Link>
                      <div className="d-flex gap-2">
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
