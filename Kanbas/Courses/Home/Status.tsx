import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineHome, AiOutlineEye, AiOutlineBell, AiOutlineBarChart } from "react-icons/ai";
import { FiSpeaker } from "react-icons/fi";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ padding: "20px", borderLeft: "1px solid #ddd", width: "300px" }}>
      <h2>Course Status</h2>
      
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </button>
        </div>
      </div>
      
      <div style={{ marginTop: "20px" }}>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <BiImport className="me-2 fs-5" /> Import Existing Content
        </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
        </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <AiOutlineHome className="me-2 fs-5" /> Choose Home Page
        </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <AiOutlineEye className="me-2 fs-5" /> View Course Stream
        </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <FiSpeaker className="me-2 fs-5" /> New Announcement
        </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <AiOutlineBarChart className="me-2 fs-5" /> New Analytics
        </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <AiOutlineBell className="me-2 fs-5" /> View Course Notifications
        </button>
      </div>
    </div>
  );
}
