import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSearch, FaCaretDown, FaCaretUp } from "react-icons/fa";
import AssignmentControlButtons from './AssignmentControlButtons';
import { Modal, Button } from 'react-bootstrap';
import { setAssignments, deleteAssignment } from './reducer';
import { User } from '../../Users';
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<string | null>(null);
  const dispatch = useDispatch();

  

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const assignments = useSelector((state: RootState) =>
    state.assignments.assignments.filter((assignment) => assignment.course === cid)
  );
  const currentUser = useSelector((state: RootState) => state.accountReducer.currentUser) as User | null;
  const isFaculty = currentUser?.role === "FACULTY";

  const handleAddAssignment = () => {
    if (cid) {
      navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
    } else {
      console.error("Course ID is undefined");
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDeleteClick = (assignmentId: string) => {
    setSelectedAssignmentId(assignmentId);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (selectedAssignmentId) {
      dispatch(deleteAssignment(selectedAssignmentId));
    }
    setShowDeleteDialog(false);
    setSelectedAssignmentId(null);
  };

  const cancelDelete = () => {
    setShowDeleteDialog(false);
    setSelectedAssignmentId(null);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center p-2 mb-3" style={{ border: '1px solid #f2f2f2' }}>
        <div className="input-group" style={{ maxWidth: '300px' }}>
          <span className="input-group-text bg-white">
            <FaSearch />
          </span>
          <input type="text" className="form-control" placeholder="Search..." aria-label="Search" />
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-light border me-2">+ Group</button>
          {isFaculty && (
            <button
              className="btn"
              style={{ backgroundColor: '#B22222', color: 'white' }}
              onClick={handleAddAssignment}
            >
              + Assignment
            </button>
          )}
        </div>
      </div>

      <div className="list-group-item p-0 mb-5 fs-5" style={{ border: '1px solid #ddd', backgroundColor: '#f1f1f1' }}>
        <div
          className="wd-title p-3 ps-2 d-flex align-items-center justify-content-between"
          onClick={toggleDropdown}
          style={{ cursor: 'pointer', color: 'black' }}
        >
          <div className="d-flex align-items-center">
            {isDropdownOpen ? <FaCaretUp className="me-2" /> : <FaCaretDown className="me-2" />}
            <span className="fw-bold">ASSIGNMENTS</span>
          </div>
          <div className="badge bg-dark text-white" style={{ borderRadius: '20px', padding: '5px 10px' }}>40% of Total</div>
        </div>

        {isDropdownOpen && (
          <AssignmentControlButtons assignments={assignments} handleDeleteClick={isFaculty ? handleDeleteClick : undefined} />
        )}
      </div>

      <Modal show={showDeleteDialog} onHide={cancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>Cancel</Button>
          <Button variant="danger" onClick={confirmDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}