import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import * as db from "./Database";
import { enroll, unenroll } from "./reducer";
import { User } from "./Users";
import { DashboardCourses } from "./DashboardTypes";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardCourses) {
  const currentUser = useSelector((state: RootState) => state.accountReducer.currentUser) as User | null;
  const { enrolledCourses } = useSelector((state: RootState) => state.enrollment);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const navigate = useNavigate();

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  const handleToggleCourses = () => setShowAllCourses((prev) => !prev);

  const handleEnroll = (courseId: string) => {
    dispatch(enroll(courseId));
  };

  const handleUnenroll = (courseId: string) => {
    dispatch(unenroll(courseId));
  };

  const coursesToShow = showAllCourses ? db.courses : courses.filter((c) => enrolledCourses.includes(c._id));

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {isStudent && (
          <button className="btn btn-primary" onClick={handleToggleCourses}>
            {showAllCourses ? "Published Courses" : "Enrollments"}
          </button>
        )}
      </div>
      <hr />

      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            placeholder="Course Name"
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            placeholder="Course Description"
            className="form-control mb-3"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}

      <hr />
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : `Published Courses (${courses.length})`}
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {coursesToShow.map((course) => {
            const isEnrolled = enrolledCourses.includes(course._id);
            return (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img src={course.image} alt={course.name} width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-primary">Go</button>
                        {isStudent && showAllCourses && (
                          isEnrolled ? (
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                handleUnenroll(course._id);
                              }}
                              className="btn btn-danger ms-2"
                            >
                              Unenroll
                            </button>
                          ) : (
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                handleEnroll(course._id);
                              }}
                              className="btn btn-success ms-2"
                            >
                              Enroll
                            </button>
                          )
                        )}
                        {isFaculty && (
                          <div className="d-flex justify-content-end align-items-center ms-2">
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2"
                              id="wd-update-course-click"
                            >
                              Edit
                            </button>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                              className="btn btn-danger"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}