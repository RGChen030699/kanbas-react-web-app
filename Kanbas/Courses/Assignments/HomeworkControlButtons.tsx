import { Link } from 'react-router-dom';
import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";

export default function HomeworkControlButtons() {
  return (
    <div className="list-group">

      <div className="list-group-item p-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-3" style={{ cursor: "grab" }} />
          <FaFileAlt className="me-3 text-success" />
          <div>

            <Link to="/assignment/A1" className="fw-bold">A1</Link>
            <br />
            <span className="text-danger">Multiple Modules</span>
            <span className="text-muted ms-2">| Not available until May 6 at 12:00am</span>
            <br />
            <span className="text-muted">Due May 13 at 11:59pm | 100 pts</span>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <FaCheckCircle className="text-success me-3 fs-4" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>

      <div className="list-group-item p-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-3" style={{ cursor: "grab" }} />
          <FaFileAlt className="me-3 text-success" />
          <div>

            <Link to="/assignment/A2" className="fw-bold">A2</Link>
            <br />
            <span className="text-danger">Multiple Modules</span>
            <span className="text-muted ms-2">| Not available until May 13 at 12:00am</span>
            <br />
            <span className="text-muted">Due May 20 at 11:59pm | 100 pts</span>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <FaCheckCircle className="text-success me-3 fs-4" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>


      <div className="list-group-item p-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-3" style={{ cursor: "grab" }} />
          <FaFileAlt className="me-3 text-success" />
          <div>

            <Link to="/assignment/A3" className="fw-bold">A3</Link>
            <br />
            <span className="text-danger">Multiple Modules</span>
            <span className="text-muted ms-2">| Not available until May 20 at 12:00am</span>
            <br />
            <span className="text-muted">Due May 27 at 11:59pm | 100 pts</span>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <FaCheckCircle className="text-success me-3 fs-4" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>
    </div>
  );
}
