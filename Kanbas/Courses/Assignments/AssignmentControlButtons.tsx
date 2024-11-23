import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle, FaTrash, FaPen } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaFilePen } from "react-icons/fa6";
import { Assignment } from './AssignmentTypes';
import { User } from "../../Users";

interface AssignmentListProps {
  assignments: Assignment[];
  handleDeleteClick?: (assignmentId: string) => void;
}

export default function AssignmentControlButtons({ assignments, handleDeleteClick }: AssignmentListProps) {
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.accountReducer.currentUser) as User | null;
  const isFaculty = currentUser?.role === "FACULTY";

  const formatDate = (date: Date) => {
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${month} ${day} at ${hours}:${minutes} ${ampm}`;
  };

  const getDefaultDates = (index: number) => {
    const baseDate = new Date();
    const startDate = new Date(baseDate.getTime() + index * 7 * 24 * 60 * 60 * 1000);
    const dueDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    return { startDate: formatDate(startDate), dueDate: formatDate(dueDate) };
  };

  return (
    <div className="list-group">
      {assignments.map((assignment, index) => {
        const { startDate, dueDate } = getDefaultDates(index);

        return (
          <div
            key={assignment._id}
            className="list-group-item p-2 d-flex align-items-center justify-content-between"
            style={{ border: '1px solid #f2f2f2', borderRadius: '8px', marginBottom: '8px' }}
          >
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-3" style={{ cursor: "grab" }} />
              <FaFilePen className="me-3 text-success" />
              <div>
                <Link to={`/assignment/${assignment._id}`} className="fw-bold text-primary">
                  {assignment.title}
                </Link>
                <br />
                <span className="text-danger">Multiple Modules</span>
                <span className="text-muted ms-2">
                  | Not available until {assignment.availableFrom ? formatDate(new Date(assignment.availableFrom)) : startDate} | 
                  Due {assignment.dueDate ? formatDate(new Date(assignment.dueDate)) : dueDate} | 
                  {assignment.points || 100} pts
                </span>
              </div>
            </div>
            {isFaculty && (
              <div className="d-flex align-items-center">
                <FaTrash
                  className="text-danger me-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDeleteClick && handleDeleteClick(assignment._id)}
                />
                <FaPen
                  className="me-3"
                  style={{ cursor: "pointer", color: "#007bff" }}
                  onClick={() => navigate(`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`)}
                />
                <FaCheckCircle className="text-success me-3" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}