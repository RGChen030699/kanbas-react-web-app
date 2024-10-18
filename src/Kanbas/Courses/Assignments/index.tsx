import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { Dropdown } from "react-bootstrap";
import HomeworkControlButtons from './HomeworkControlButtons';
import { Link, useParams } from 'react-router-dom';
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const [showHomework, setShowHomework] = useState<{ [key: string]: boolean }>({});

  // Toggle visibility for specific assignments
  const toggleHomeworkVisibility = (assignmentId: string) => {
    setShowHomework((prevState) => ({
      ...prevState,
      [assignmentId]: !prevState[assignmentId],
    }));
  };


  const courseAssignments = db.assignments.filter((assignment) => assignment.course === cid);

  const buttonStyle = {
    backgroundColor: '#B22222',
    color: 'white',
    padding: '6px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center p-2 mb-3" style={{ border: '1px solid #f2f2f2' }}>
        <div className="input-group" style={{ maxWidth: '300px' }}>
          <span className="input-group-text bg-white">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </div>

        <div className="d-flex align-items-center">
          <button className="btn btn-light border me-2">+ Group</button>
          <button className="btn" style={buttonStyle}>+ Assignment</button>
        </div>
      </div>

      {courseAssignments.map((assignment) => (
        <div key={assignment._id} id="wd-assignment" className="list-group-item p-0 mb-5 fs-5" style={{ border: '1px solid #f2f2f2' }}>
          <div className="wd-title p-3 ps-2 d-flex align-items-center justify-content-between" style={{ backgroundColor: "#b3b8bd", border: '1px solid #f2f2f2' }}>
            <div className="d-flex align-items-center">
              <Dropdown>
                <Dropdown.Toggle
                  id={`assignment-toggle-${assignment._id}`}
                  className="p-0"
                  style={{ background: "none", border: "none", fontWeight: "bold", color: "black" }}
                  onClick={() => toggleHomeworkVisibility(assignment._id)}
                >
                  {assignment.title}
                </Dropdown.Toggle>
              </Dropdown>
            </div>

            <div className="d-flex align-items-center">
              <div className="badge bg-light text-dark" style={{ borderRadius: '20px', padding: '5px 10px', marginRight: '8px' }}>
                {Math.floor(Math.random() * 50) + 1}% of Total
              </div>
              <BsPlus className="fs-4" style={{ fontSize: '20px', marginRight: '8px' }} />
              <IoEllipsisVertical className="fs-4" style={{ fontSize: '20px' }} />
            </div>
          </div>

          <div style={{ padding: "15px" }}>
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              className="text-decoration-none text-dark"
            >
              View Assignment: {assignment.title}
            </Link>
          </div>

          {showHomework[assignment._id] && <HomeworkControlButtons />}
        </div>
      ))}
    </div>
  );
}
